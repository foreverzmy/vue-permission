// 根据权限生成路由
import Vue from 'vue'
import Router from 'vue-router'
import routerConf from './index'

Vue.use(Router);

function creatRoutes(route, permit) {
  permit.forEach(item => {
    const subRoute = route.filter(val => val.path === item.path)[0];
    Object.keys(subRoute)
      .forEach(key => {
        if (key !== 'children') {
          item[key] = subRoute[key]
        } else {
          creatRoutes(subRoute[key], item[key])
        }
      })
  })

  const redirct = route.filter(subRoute => subRoute.path === '*');
  if (redirct.length !== 0) {
    permit.push(redirct[0]);
  }
  return permit;
}

function redirect(routerPermit) {
  routerPermit.forEach(route => {
    if (route.hasOwnProperty('redirect')) {
      if (route.children) {
        route.redirect = route.children[0].path;
        route.children = redirect(route.children);
      } else {
        delete route.redirect;
      }
    }
  })
  return routerPermit;
}

export default function (permit) {
  const routerPermit = creatRoutes(routerConf, permit);
  return new Router({
    mode: 'history',
    routes: redirect(routerPermit)
  })
};
