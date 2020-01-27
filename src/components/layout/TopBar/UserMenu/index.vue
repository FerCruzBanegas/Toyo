<template>
  <a-dropdown :trigger="['click']" placement="bottomLeft">
    <div :class="$style.dropdown">
      <a-avatar shape="square" icon="user" size="large" :class="$style.avatar" />
    </div>
    <a-menu slot="overlay">
      <!-- <a-menu-item>
        <strong>{{ $t('topBar.profileMenu.hello') }}, Username</strong>
        <div>
          <strong class="mr-1">{{ $t('topBar.profileMenu.billingPlan') }}:</strong>
          Professional
        </div>
        <div>
          <strong>{{ $t('topBar.profileMenu.role') }}:</strong>
          Administrator
        </div>
      </a-menu-item>
      <a-menu-divider /> -->
      <a-menu-item>
        <div v-if="currentUser">
          <strong class="mr-1">Usuario:</strong> {{ currentUser.name }}
        </div>
        <!-- <div>
          <strong class="mr-1">{{ $t('topBar.profileMenu.phone') }}:</strong> -
        </div> -->
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item>
        <a href="javascript: void(0);">
          <i :class="$style.menuIcon" class="fe fe-user"></i>
          <!-- {{ $t('topBar.profileMenu.editProfile') }} -->
          Perfil
        </a>
      </a-menu-item>
      <a-menu-item>
        <a href="javascript: void(0);" @click="logout">
          <i :class="$style.menuIcon" class="fe fe-log-out"></i>
          <!-- {{ $t('topBar.profileMenu.logout') }} -->
          Cerrar Sesión
        </a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data: function () {
      return {
        count: 7,
      }
    },

    computed: {
      ...mapGetters([
        'currentUser',
        'authenticated'
      ])
    },

    methods: {
      async logout() {
        const response = await this.$store.dispatch('logout')
        if (response) this.$router.push({ path: '/system/login' })
      },
    },
  }
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
