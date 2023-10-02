<template>
  <div>
    <img class="logo" src="../assets/logo1.png" />
    <h1>LogIn</h1>
    <div class="login">
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button v-on:click="login">Login</button>
      <p>
        <router-link class="log" to="/sign-up">SignUp</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status === 200 && result.data.length>0) {
        localStorage.setItem('user-info', JSON.stringify(result.data[0]));
        this.$router.push({ name: 'HomePage' });
        console.warn(result);
      }
    },
    //function makes it to remain on the same page
    mounted(){
     let user=localStorage.getItem('user-info');
     if(user){
      this.$router.push({name:'HomePage'})
     }
 }
  }
};
</script>
