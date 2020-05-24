import Vue from 'vue';
import Hello from '@/components/Hello.vue';

new Vue({
  el: '.app',
  // template: `<h1>Hello {{name}}</h1>`,
  render: h => h(Hello)
});