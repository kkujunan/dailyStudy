<template>
<form v-on:submit.prevent="submitForm">
  <div>
    <label for="username">id:</label>
    <input id="username" type="text" v-model="username">
  </div>
  <div>
    <label for="password">pw:</label>
    <input id="password" type="password" v-model="password">
  </div>
  <button type="submit">login</button>
</form>
</template>

<script>
// import axios from 'axios';
export default {
  data:function() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm: function() {
      // e.preventDefault();
      console.log(this.username, this.password);
      // let url = "https://jsonplaceholder.typicode.com/user";
      // let data = {
      //   username: this.username, 
      //   password: this.password
      // }
      // axios.post(url, data)
      // .then(response => response.json())
      // .then(json => console.log(json))
      // .catch(error=>console.log(error))
    }
  }
}
</script>

<style>

</style>