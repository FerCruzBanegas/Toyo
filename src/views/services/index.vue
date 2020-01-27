<template>
  <div>
    <b-card no-body header-bg-variant="light">
      <template v-slot:header>
        <div>
          <span class="text-dark font-size-24 font-weight-bold">
            REGISTROS DE ASISTENCIA TÉCNICA
          </span>
          <router-link :to="{path: 'asistencia-tecnica/nuevo'}">
            <button
              type="button"
              class="btn btn-primary btn-with-addon mr-auto text-nowrap pull-right"
              to="materials/create"
            >
              <span class="btn-addon">
                <i class="btn-addon-icon fe fe-plus-circle" />
              </span>
              Nuevo Servicio
            </button>
          </router-link>
        </div>   
      </template>
      <b-tabs  v-model="tabIndex" card active-nav-item-class="font-weight-bold text-uppercase text-black">
        <b-tab title="General" :title-link-class="linkClass(0)">
          <a-skeleton active :loading="tabGeneral"/>
          <grid-general v-show="!tabGeneral" v-on:general='general'></grid-general>
        </b-tab>
        <b-tab title="Pendientes" :title-link-class="linkClass(1)" lazy>
          <a-skeleton active :loading="tabPendiente"/>
          <grid-pendiente v-show="!tabPendiente" v-on:pendiente='pendiente'></grid-pendiente>
        </b-tab>
        <b-tab title="Entregados" :title-link-class="linkClass(2)" lazy>
          <a-skeleton active :loading="tabEntregado"/>
          <grid-entregado v-show="!tabEntregado" v-on:entregado='entregado'></grid-entregado>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
  import GridGeneral from '../../components/services/GridGeneral'
  import GridPendiente from '../../components/services/GridPendiente'
  import GridEntregado from '../../components/services/GridEntregado'

  export default {
    components: {
      'grid-general': GridGeneral,
      'grid-pendiente': GridPendiente,
      'grid-entregado': GridEntregado
    },

    data() {
      return {
        tabGeneral: true,
        tabPendiente: true,
        tabEntregado: true,
        tabIndex: 0
      }
    },

    watch: {
      tabIndex(val) {
        if (val != 1 || val != 2) {
          this.tabPendiente = true
          this.tabEntregado = true
        }
      }
    },

    methods: {
      general(e) {
        this.tabGeneral = e
      },

      pendiente(e) {
        this.tabPendiente = e
      },

      entregado(e) {
        this.tabEntregado = e
      },

      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['text-black']
        } else {
          return ['text-info']
        }
      }
    }
  }
</script>