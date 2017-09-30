<template>
  <div>
    <h1>Hello App!</h1>
    <button type="button" @click="logout">Logout</button>
    <p>
      <router-link v-permit="[$router,'/bar']" to="/bar">Go to Bar</router-link>
      <router-link v-permit="[$router,'/foo']" to="/foo">Go to Foo</router-link>
      <router-view></router-view>
    </p>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      sessionStorage.removeItem('token');
      location.replace('/')
    }
  }
}
</script>

