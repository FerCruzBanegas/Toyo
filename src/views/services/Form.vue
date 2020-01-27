<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h4 class="mb-4">
          <strong>Validation & Background</strong>
        </h4>
        <div class="rounded-lg p-5">
          <a-form>
            <a-form-item
              :label-col="labelCol"
              :wrapper-col="wrapperCol"
              label="Validating"
              has-feedback
              validate-status="success"
              help="The information is being validated..."
            >
              <!-- <a-spin :spinning="spinning"> -->
                <a-input id="validating" placeholder="I'm the content is being validated" />
              <!-- </a-spin> -->
            </a-form-item>
          </a-form>
          <button @click="changeSpinning">sss</button>
          <!-- <div class="row">
            <div class="col-lg-8 mx-auto">
                <form-services />
            </div>
          </div> -->
          <a-spin :spinning="spinning">
          <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
          </a-spin>
          <br>
          <a-table :columns="columns" :dataSource="data"/>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .form-control-lg {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #e6e6e6;
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;
  }
  .form-control-lg:focus {
    background-color: #e6e6e6;
    /*color: #fff;*/
  }
</style>
<script>
  import FormServices from '../../components/services/FormServices'
  export default {
    components: {
      'form-services': FormServices
    },

    data() {
      return {
        data: [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ],
        columns: [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ],
         spinning: false,
        labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
      }
    },

    methods: {
      changeSpinning() {
        this.spinning = !this.spinning;
      },
    },
  }
</script>
