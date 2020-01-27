import Vue from 'vue'
import VuePageTitle from 'vue-page-title'
import App from './App.vue'
import router from './router'
import store from './store'
import NProgress from 'vue-nprogress'
import BootstrapVue from 'bootstrap-vue'
import $ from 'jquery';
import '@progress/kendo-ui/js/kendo.filtercell.min.js'
import '@progress/kendo-ui/js/kendo.grid.min.js'
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { DataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'
import '@progress/kendo-ui/js/messages/kendo.messages.es-BO.min.js'
import '@progress/kendo-ui/js/cultures/kendo.culture.es-BO.min.js'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VeeValidate from 'vee-validate'
import VueValidationEs  from 'vee-validate/dist/locale/es';

import {
  Avatar, Alert, Skeleton, Form, Message, Button, Layout, Table, Dropdown,
  Input, Calendar, notification, Drawer, Cascader, DatePicker, TimePicker, Divider, List, 
  Row, Col, Spin, message, Popconfirm
} from 'ant-design-vue'

import './global.scss'

kendo.culture("es-BO");


Vue.component('loading', Loading);

Vue.use(VeeValidate, {
  locale: 'es',
  dictionary: {
    es: VueValidationEs
  }
});

Vue.prototype.$setErrorsFromResponse = function(errorResponse) {
  if(!this.hasOwnProperty('$validator')) {
    return;
  }
    
  function addErrorToChildComponents(vm,field,errorString) {
    if(vm && vm.$validator && vm.$validator.errors){
      const inputfield = vm.$validator.fields.find({ name: field });
      if(inputfield){
      vm.$validator.errors.add({
        field,
        msg:errorString
      });
        return;
      }
    }
    if(vm.$children){
      vm.$children.map(async ($cvm) => {
        addErrorToChildComponents($cvm,field,errorString);
      });
    }
    return;
  }

  this.$validator.errors.clear();

  if(!errorResponse.hasOwnProperty('errors')) {
    return;
  }

  let errorFields = Object.keys(errorResponse.errors);

  errorFields.map(field => {
    let errorString = errorResponse.errors[field].join(', ');
    addErrorToChildComponents(this,field,errorString);     
  });
};

Vue.use(GridInstaller)
Vue.use(DataSourceInstaller)

Vue.use(BootstrapVue)
Vue.use(Avatar)
Vue.use(Alert)
Vue.use(Skeleton)
Vue.use(Form)
Vue.use(Message)
Vue.use(Button)
Vue.use(Layout)
Vue.use(Table)
Vue.use(Dropdown)
Vue.use(Input)
Vue.use(Calendar)
Vue.use(Drawer)
Vue.use(Cascader)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Divider)
Vue.use(List)
Vue.use(Row)
Vue.use(Col)
Vue.use(Spin)
Vue.use(Popconfirm)

Vue.prototype.$notification = notification
Vue.prototype.$message = message

Vue.use(NProgress)
Vue.use(VuePageTitle, {
  prefix: 'Batebol |',
  router,
})

Vue.config.productionTip = false
const nprogress = new NProgress({ parent: 'body' })

new Vue({
  router,
  store,
  nprogress,
  // i18n,
  render: h => h(App),
  components: {
    DataSource,
    Grid
  }
}).$mount('#app')
