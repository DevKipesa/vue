<template>
<HeaderBar />
    <h1>Hello, Welcome to Homepage Peeps</h1>
</template>
<script>
import HeaderBar from './Header.vue'
export default {
    name: 'HomePage',
    components:{
        HeaderBar
    },
    mounted(){
     let user=localStorage.getItem('user-info');
     if(!user){
      this.$router.push({name:'SignUp'})
     }
 }
}
</script>
