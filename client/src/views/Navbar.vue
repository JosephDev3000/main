<template>
<div>
      <header class="text-gray-600 body-font shadow-lg ">
    <div class="container mx-auto flex flex-wrap pt-4 pb-0 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 no-underline">
       <img class="w-12" src="../assets/img/logos/logo.jpg" alt="hr-logo"/>
        <span class="ml-3 text-xl ">
        Intern Tracker</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 no-underline hover:text-gray-900"><button type ="button" @click="()=>$router.push('dashboard')">Dashboard</button></a>
        <a class="mr-5 no-underline hover:text-gray-900"><button type ="button" @click="()=>$router.push('interns')">Interns</button></a>
        <a class="mr-5 no-underline hover:text-gray-900"><button type ="button" @click="()=>$router.push('attendance')">Attendance</button></a>
        <a class="mr-5 no-underline hover:text-gray-900"><button type ="button" @click="()=>$router.push('leave')">Leave</button></a>
        <a class="mr-5 no-underline hover:text-gray-900"><button type ="button" @click="logout">Log out</button></a>
      </nav>
    </div>
  </header>
</div>
</template>

<style scoped>
.container{@apply, px-5 py-10 flex md:flex-row flex-col items-start;}
</style>

<script>
import Swal from 'sweetalert2'

export default {
  name: "Navbar",
  methods: {
    logout: function() {

        Swal.fire({
          title: 'Are you sure?',
          text: "Do you want to Logout",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('setToken', '')
            this.$store.dispatch('setUser','')
            localStorage.removeItem('user')
            this.isLoggedIn=false
            //window.location.href = "http://localhost:5000/logout"
            this.$router.push({ name: 'login' })
          }
        })
          
          
          
        }
  }
}



</script>