<template>
<router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  width: 100px;
}
.register input{
width: 300px;
height: 40px;
padding-left: 20px;
display: block;
margin-bottom: 30px;
margin-left: auto;
margin-right: auto;
border: 1px solid skyblue;
}
.register button{
    width: 325px;
    height: 40px;
    background-color: skyblue;
    border: 1px solid skyblue;
}
.register button:hover{
    background-color: #fff;
}
body{
    background-color: rgb(234, 246, 250);
}
</style>
