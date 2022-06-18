<template>
  <div class="register">
    <!-- v-model use for 2 way data binding -->
    <center>
      <form class="container-register">
        <h1>Register</h1>
        <div v-html="error" class="error" style="color:red"/>
        <input type="text" class="form-control" placeholder="name" v-model="name"><br/><br/>
        <input type="email" class="form-control" placeholder="email" v-model="email"><br/><br/>
        <input type="password" class="form-control" placeholder="password"  v-model="password"><br/><br/>
        <center>
          <button type="button" class='btn btn-success' @click="register">Register</button>
          <a href="#/" ><button type="button" class='bg-gray-600 mt-3 text-white'>Back to Login</button></a>
        </center>
      </form>
    </center>
  </div>
</template>

<!-- scripts -->


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
  background-color:white;
  margin: auto;
  width:50%;
  padding:5%;
  width: 50%;
  margin-top:10%;
}
.register input{
  border:  1px gray solid !important;
  background-color: #ccc;
}
.register button{
  width:80%;
  padding:2%;
}

</style>

<script src = "../scripts/register.js"></script>