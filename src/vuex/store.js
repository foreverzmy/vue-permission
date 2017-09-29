import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    routes: {},
  },
  mutations: {
    saveRoute(state, routes) {
      for (const route of routes) {
        if (route.meta.hidden !== true) {
          state.routes[route.path] = route;
        }
      }
    },
    saveToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    saveRoute(ctx, routes) {
      ctx.commit('saveRoute', routes);
    },
    saveToken(ctx, token) {
      ctx.commit('saveToken', token);
    }
  }
})
