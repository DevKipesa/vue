<template>
<HeaderBar />
    <h1>Hello, Welcome to Update restaurant page Peeps</h1>
</template>
<script>
import HeaderBar from './Header.vue'
export default {
    name: 'UpdatePage',
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
