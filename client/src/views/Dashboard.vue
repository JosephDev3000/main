<template>
  <Navbar/>
  <section class="text-gray-600 body-font">
    <div class="container">
      <div class="inline-flex items-center lg:justify-start sm:justify-center mr-3 lg:w-48 sm:w-full sm:mb-4">
            <img class="w-12 h-auto shadow-lg rounded-full bg-white" src ="https://icons.iconarchive.com/icons/icons8/windows-8/256/Users-User-icon.png" />
        </div>
      <div class="w-1/3 lg:text-left sm:text-center sm:w-full">
        <h2 class="text-sm text-blue-500 tracking-widest font-medium title-font mb-1">Welcome Back</h2>
        <h1 class="md:text-3xl text-2xl font-semibold title-font text-gray-900">{{name}}</h1>
      </div>
    
      <div class="dash-con w-1/3 lg:text-left sm:text-center sm:w-full">
        <h2 class="text-sm text-blue-500 tracking-widest font-medium title-font mb-1">Time</h2>
        <h1 class="md:text-3xl text-2xl font-semibold title-font text-gray-900">{{timestamp}}</h1>
      </div>

      <div class="dash-con w-1/3 lg:text-left sm:text-center sm:w-full">
        <h2 class="text-sm text-blue-500 tracking-widest font-medium title-font mb-1">Date</h2>
        <input type="date" class="dash-input px-4 py-1 sm:w-12">
      </div>
    </div>
  </section>

<section>
<div class="px-5 w-100 mx-auto flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full ">
        <div class="dash-bar bg-gray-300 ">
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium text-center text-base">Complete list of interns</h2>
          </div>
        </div>
      </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="dash-bar bg-blue-500">
          <div class="flex-grow">
            <h2 class="text-base text-gray-900 title-font font-medium text-center"><span class="mr-5 font-bold">00</span>Total Intern</h2>
          </div>
        </div>
      </div>
      
       <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="dash-bar bg-green-500">
          <div class="flex-grow">
            <h2 class="text-base text-gray-900 title-font font-medium text-center"><span class="mr-5 font-bold">00</span>Present Intern</h2>
          </div>
        </div>
      </div>


       <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="dash-bar bg-violet-500">
          <div class="flex-grow">
            <h2 class="text-base text-gray-900 title-font font-medium text-center"> <span class="mr-5 font-bold">00</span>On-Leave Intern</h2>
          </div>
        </div>
      </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="dash-bar bg-yellow-500">
          <div class="flex-grow">
            <h2 class="text-base text-gray-900 title-font font-medium text-center"><span class="mr-5 font-bold">00</span>Late Intern</h2>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="dash-bar bg-red-500">
          <div class="flex-grow">
            <h2 class="text-base text-gray-900 title-font font-medium text-center"><span class="mr-5 font-bold">00</span>Absent Intern</h2>
          </div>
        </div>
      </div>
    </div>
</section>


<section>
<div class="container mb-0">
  <form class="md:flex items-center sm:items-start">
      <div class="dash-con w-full ">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="dash-input w-full" placeholder="Search" required="">
        </div>
      </div>
      <div class="dash-con w-full ">
        <select name="cars" id="dept" class="dash-input">
          <option value="">Select Department</option>
          <option value="saab">IT</option>
          <option value="mercedes">HR</option>
        </select>
      </div>
      <div class="dash-con w-full ">
        <select name="cars" id="des" class="dash-input">
          <option value="">Select Designation</option>
          <option value="saab">Back-End</option>
          <option value="mercedes">Security</option>
          <option value="audi">Front-End</option>
        </select>
      </div>
  </form>
</div>
</section>

<section>
  <div class="container  my-0 bg-white mb-2">
      <table class="dash-table lg:table-auto w-100 sm:1/2" id="dash-tb">
        <thead><tr>
          <th>Name of Intern</th>
          <th>Status</th>
          <th>Time-in</th>
          <th>Time-out</th>
          <th>Late</th>
          <th>Overtime</th>
          <th>Undertime</th>
        </tr></thead>
        <tr>
          <td>Kristel</td><td>Present</td><td>8:00</td><td>18:00</td><td>0:00</td><td>0:00</td><td>0:00</td>  
        </tr>
        <tr>
        <td>Kenneth</td><td>Absent</td><td>9:00</td><td>19:00</td><td>0:00</td><td>0:00</td><td>0:00</td> 
        </tr>
        <tr>
        <td>George</td><td>Present</td><td>8:00</td><td>18:00</td><td>0:00</td><td>0:00</td><td>0:00</td> 
        </tr>
        <tr>
        <td>Julius</td><td>Absent</td><td>8:00</td><td>18:00</td><td>0:00</td><td>0:00</td><td>0:00</td> 
        </tr>
        <tr>
        <td>Benson</td><td>Present</td><td>8:00</td><td>18:00</td><td>0:00</td><td>0:00</td><td>0:00</td> 
        </tr>
        <tr>
        <td>Marlito</td><td>Late</td><td>8:00</td><td>18:00</td><td>0:00</td><td>0:00</td><td>0:00</td> 
        </tr>
        <tr>
        <td>Maricar</td><td>Present</td><td>8:00</td><td>18:00</td><td>0:00</td><td>0:00</td><td>0:00</td> 
        </tr>
      </table>
  </div>
</section>
</template>

<script src = "../scripts/dashboard.js">
// import Sidebar from './Sidebar.vue.js';</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*tailwind*/
.container{@apply px-5 py-10 flex md:flex-row flex-col items-start;}

.dash-con{@apply md:mx-16 sm:mx-0;}

.dash-input{@apply px-10 py-2 border text-sm border-gray-300 my-2 w-full}

.dash-table td,.dash-table th{@apply py-2 px-5 sm:text-sm sm:p-2 lg:text-lg;}
.dash-table{overflow-x:auto;}

.dash-bar{@apply h-full flex items-center border-gray-200 border p-4 rounded-lg 
transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300;}

</style>

