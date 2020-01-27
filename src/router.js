import Vue from 'vue'
import Router from 'vue-router'
import AuthLayout from '@/layouts/Auth'
import AppLayout from '@/layouts/App'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/inicio',
      component: AppLayout,
      meta: { authRequired: true, hidden: true },
      children: [
        {
          path: '/inicio',
          meta: {
            title: 'Inicio',
          },
          component: () => import('./views/dashboard/home'),
        }
      ],
    },
    {
      path: '/servicios',
      redirect: '/servicios/asistencia-tecnica',
      component: AppLayout,
      meta: { authRequired: true, hidden: true },
      children: [
        {
          path: '/servicios/asistencia-tecnica',
          meta: {
            title: 'Asistencia Técnica',
          },
          component: () => import('./views/services'),
        },
        {
          path: '/servicios/asistencia-tecnica/nuevo',
          meta: {
            title: 'Asistencia Técnica | Nuevo',
          },
          component: () => import('./views/services/Form.vue')
        },
        {
          path: 'mantenimiento',
          meta: {
            title: 'Mantenimiento',
          },
          component: () => import('./views/dashboard/statistics'),
        }
      ],
    },
    {
      path: '/seguimientos',
      redirect: '/seguimientos',
      component: AppLayout,
      meta: { authRequired: true, hidden: true },
      children: [
        {
          path: '/',
          meta: {
            title: 'Seguimientos',
          },
          component: () => import('./views/dashboard/analytics'),
        }
      ],
    },
    // {
    //   path: '/clientes',
    //   redirect: '/clientes',
    //   component: AppLayout,
    //   meta: { authRequired: true, hidden: true },
    //   children: [
    //     {
    //       path: '/',
    //       meta: {
    //         title: 'Clientes',
    //       },
    //       component: () => import('./views/dashboard/analytics'),
    //     }
    //   ],
    // },

    // System Pages
    {
      path: '/system',
      component: AuthLayout,
      redirect: '/system/login',
      children: [
        {
          path: '/system/login',
          meta: {
            title: 'Login',
            redirectIfLogged: true,
          },
          component: () => import('./views/system/login'),
        },
        {
          path: '/system/forgot-password',
          meta: {
            title: 'Forgot Password',
          },
          component: () => import('./views/system/forgot-password'),
        },
        {
          path: '/system/register',
          meta: {
            title: 'Register',
          },
          component: () => import('./views/system/register'),
        },
        {
          path: '/system/lockscreen',
          meta: {
            title: 'Lockscreen',
          },
          component: () => import('./views/system/lockscreen'),
        },
        {
          path: '/system/404',
          meta: {
            title: 'Error 404',
          },
          component: () => import('./views/system/404'),
        },
        {
          path: '/system/500',
          meta: {
            title: 'Error 500',
          },
          component: () => import('./views/system/500'),
        },
      ],
    },

    // Redirect to 404
    // 
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.getters.authenticating) {
      next({
        path: '/system/login',
        query: { redirect: to.fullPath },
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => store.getters.redirectIfLogged)) {
    if (store.getters.authenticating) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
