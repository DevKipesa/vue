<template>
  <img class="logo" src="../assets/logo1.png" />
  <h1>Sign Up</h1>
  <div class="register">
    <input  type="text"  placeholder="Enter name" />
    <input type="text" placeholder="Enter Email" />
    <input type="password" placeholder="Enter Password" />
    <button>Sign Up</button>
  </div>
</template>
<script>
export default {
  name: "SignUp",
};
</script>
<style>
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