<template>
  <div id="app">
    <label for="username">
      <input type="text" v-model="username">
    </label>
    <label for="password">
      <input type="text" name="" v-model="password">
    </label>
    <input type="submit" @click="login">
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '13588254457',
      password: '123456'
    }
  },
  methods: {
    login() {
      axios.post('/api/auth/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data.success === true) {
          sessionStorage.setItem('token', res.data.token);
          location.reload();
        }
      })
    }
  }
}
</script>
