import Vue from 'vue';
import Router from 'vue-router';
import RogersUI from '@/components/RogersUI';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RogersUI',
      component: RogersUI,
    },
  ],
});
