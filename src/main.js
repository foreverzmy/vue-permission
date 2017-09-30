// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Login from './components/Login'
import axios from 'axios';
import permit from './directive/permit'
import creatRouter from './router/creatRoute'

let vm;

Vue.config.productionTip = false;
Vue.directive('permit', permit);

let token = sessionStorage.getItem('token');

// 判断用户是否登录
axios.get('/api/auth/islogin', {
  params: {
    token: token
  }
}).then(res => {
  if (res.data.success === true) {
    load(res.data.routes);
  } else {
    login();
  }
}).catch(err => {
  login();
})

// 登录页面
function login() {
  if (vm) {
    vm.$destroy(true);
  }
  vm = new Vue({
    el: '#app',
    template: '<Login/>',
    components: {
      Login
    }
  })
}

// 用户界面
async function load(permit) {
  const router = creatRouter(permit);
  if (vm) {
    vm.$destroy(true);
  }
  vm = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
      App
    }
  })
}
