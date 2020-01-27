export const getMenuData = [
  {
    category: true,
    title: 'Dashboard',
  },
  {
    title: 'Inicio',
    key: 'Inicio',
    icon: 'fa fa-home',
    url: '/inicio',
  },
  {
    category: true,
    title: 'Servicios',
  },
  {
    title: 'Asistencia Técnica',
    key: 'AsistenciaTecnica',
    icon: 'fa fa-automobile',
    url: '/servicios/asistencia-tecnica',
  },
  {
    title: 'Mantenimiento',
    key: 'Mantenimiento',
    icon: 'fa fa-wrench',
    url: '/servicios/mantenimiento',
  },
  {
    title: 'Seguimientos',
    key: 'Seguimientos',
    icon: 'fa fa-tty',
    url: '/seguimientos',
  },
  {
    title: 'Clientes',
    key: 'Clientes',
    icon: 'fa fa-group',
    url: '/clientes',
  },
  {
    title: 'Reportes',
    key: 'Reportes',
    icon: 'fa fa-bar-chart',
    url: '/advanced/invoice',
  },
  {
    category: true,
    title: 'Administración',
  },
  {
    title: 'Configuración',
    key: 'configuracion',
    icon: 'fa fa-gear',
    count: 6,
    children: [
      {
        title: 'Baterías',
        key: 'dashboardAnalytics',
        url: '/dashboard/analytics',
      },
      {
        title: 'Usuarios',
        key: 'usuarios',
        url: '/dashboard/statistics',
      },
    ],
  }
]
