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
}
.logo {
  width: 100px;
}
body{
  padding: 0;
  margin: 0;
}
.register input, .login input{
width: 300px;
height: 40px;
padding-left: 20px;
display: block;
margin-bottom: 30px;
margin-left: auto;
margin-right: auto;
border: 1px solid skyblue;
}
.register button,.login button{
    width: 325px;
    height: 40px;
    background-color: skyblue;
    border: 1px solid skyblue;
}
.register button:hover{
    background-color: #fff;
}
.log{
  text-decoration: none;
}
.log:hover{
  color: black;
  width: fit-content;
}
body{
    background-color: rgb(234, 246, 250);
}
</style>
