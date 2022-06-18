<template>
  <Navbar/>
  <section class="text-gray-600 body-font">
    <div class="container">
      <div class="inline-flex items-center lg:justify-start sm:justify-center mr-3 lg:w-48 sm:w-full sm:mb-4">
            <img class="w-12 h-auto shadow-lg rounded-full bg-white" src ="https://icons.iconarchive.com/icons/icons8/windows-8/256/Users-User-icon.png" />
        </div>
      <div class="w-1/2 lg:text-left sm:text-center sm:w-full">
        <h2 class="text-sm text-blue-500 tracking-widest font-medium title-font mb-1">Welcome Back</h2>
        <h1 class="md:text-3xl text-2xl font-semibold title-font text-gray-900">{{name}}</h1>
      </div>
    
      <div class="dash-con w-1/2 lg:text-left sm:text-center sm:w-full">
        <h2 class="text-sm text-blue-500 tracking-widest font-medium title-font mb-1">Time</h2>
        <h1 class="md:text-3xl text-2xl font-semibold title-font text-gray-900">{{timestamp}}</h1>
      </div>

    </div>
  </section>

  <div class="container bg-white p-5">
    <div class="w-1/2 sm:w-full">
      <table class="attendance-tb">
        <tr><td class="font-bold">Name:</td><td>{{name}}</td></tr>
        <tr><td class="font-bold">Department:</td><td>IT</td></tr>
        <tr><td class="font-bold">Role:</td><td>Back-End</td></tr>
        <tr><td class="font-bold">Date Started:</td><td>April 19, 2022</td></tr>
      </table>
    </div>
    <div class="w-1/2 sm:w-full">
       <table class="attendance-tb">
        <tr><td class="font-bold">Email Address:</td><td>{{email}}</td></tr>
        <tr><td class="font-bold">Contact Address:</td><td>123456789</td></tr>
        <tr><td class="font-bold">Hours to Render:</td><td>600</td></tr>
        <tr><td class="font-bold">Designation:</td><td>Programmer</td></tr>
      </table>
    </div>
  </div>
    
  <div class="container">
    <button class="time-btn bg-green-600">Time-in</button>
    <button class="time-btn bg-red-600">Time-out</button>
    <button class="time-btn bg-blue-600">Apply For Leave</button>

  </div>

  <div class="my-0 px-20 py-10">
    <h5 class="text-blue-600 font-bold mb-3">Time History:</h5>
    <div class="bg-slate-200 w-full p-4">
      <table class="history-tb">
        <tr>
          <th>Date</th>
          <th>Start</th>
          <th>End</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>06-06-22</td>
          <td>09:00</td>
          <td>18:00</td>
          <td> <p class="py-0 px-2 text-white bg-green-600 rounded-lg">Present</p></td>
        </tr>
        <tr>
          <td>06-07-22</td>
          <td>09:00</td>
          <td>18:00</td>
          <td> <p class="py-0 px-2 text-white bg-green-600 rounded-lg">Present</p></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.container{@apply my-0 px-5 py-10 flex md:flex-row flex-col items-start;}

.dash-con{@apply md:mx-16 sm:mx-0;}

.attendance-tb td{@apply p-2;}

.time-btn{@apply text-sm px-4 py-3 mr-5 border-gray-400 border-2 rounded-md w-40 text-white;}
.history-tb td,.history-tb th{@apply px-12 py-1;}



</style>

<script>
import Navbar from '@/views/Navbar'
export default {
  name: 'Attendance',
  data() {
    return{
      timestamp: "",name:"",email:""
    }
  },
  components: {
    Navbar
  },
  created() {
    this.getTime()
    setInterval(this.getTime, 1000);
    this.getData()
  },
    // two way binding of data set the initial value to blank
  methods: {
    navigateTo (route){
        this.$router.push(route) 
    },
    getTime: function() {
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = time;
      this.timestamp = dateTime;
    },
    getData: function(){
    this.name= JSON.parse(localStorage.getItem('user')).user.name
    this.email= JSON.parse(localStorage.getItem('user')).user.email
    }
  }

}
</script>