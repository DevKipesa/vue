<template>
<HeaderBar />
    <h1>Hello, Welcome to Addpage Peeps</h1>
</template>
<script>
import HeaderBar from './Header.vue'
export default {
    name: 'AddPage',
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
