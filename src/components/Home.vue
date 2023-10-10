<template>
<HeaderBar />
    <h1>Hello {{name}}, Welcome to Homepage Peeps</h1>
</template>
<script>
import HeaderBar from './Header.vue'
export default {
    name: 'HomePage',
    data (){
      return{
        name:''
      }
    },
    components:{
        HeaderBar
    },
    mounted(){
     let user=localStorage.getItem('user-info');
     this.name=JSON.parse(user).name;
     if(!user){
      this.$router.push({name:'SignUp'})
     }
 }
}
</script>
