<template>
  <div>
    <b-card no-body header-bg-variant="light">
      <template v-slot:header>
        <button
          type="button"
          class="btn btn-primary btn-with-addon mr-auto text-nowrap pull-right"
        >
          <span class="btn-addon">
            <i class="btn-addon-icon fe fe-plus-circle" />
          </span>
          Nuevo Servicio
        </button>
      </template>
    </b-card>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        tabIndex: 0
      }
    },

    methods: {
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