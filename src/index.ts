import Vue from 'vue';
// import Hello from '@/components/Hello.vue';
import QueryComponent from 'vue-simple-query-component';

new Vue({
  el: '.app',
  // template: `<h1>Hello {{name}}</h1>`,
  // render: h => h(Hello)
  components: {
    QueryComponent
  },
  template: `<query-component @query="getParam" :department="department" />`,
  data: {
    department: [
      { department: '技术部', departmentId: 1 },
      { department: '产品部', departmentId: 2 },
      { department: '市场部', departmentId: 3 },
      { department: '运营部', departmentId: 4 }
    ]
  },
  methods: {
    getParam(params: any) {
      console.log("getParam -> params", params)
    }
  }
});