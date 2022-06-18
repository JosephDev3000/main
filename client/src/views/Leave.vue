<template>
<Navbar/>
<div class="container p-10 mt-0">
<h4 class="text-blue-600 font-bold">Apply for Leave</h4>
<section class="text-gray-600 body-font">
  <div class="px-5 py-4 mx-auto">
    <div class="flex flex-wrap -m-2">
      <div class="leave-card">
        <div class="leave-border">
          <div class="flex-grow">
            <h4 class="text-blue-600 title-font font-bold">Total Leaves</h4>
            <h4 class="text-gray-600">00</h4>
          </div>
        </div>
      </div>
      <div class="leave-card">
        <div class="leave-border">
          <div class="flex-grow">
            <h4 class="text-blue-600 title-font font-bold">Annual</h4>
            <h4 class="text-gray-600">00</h4>
          </div>
        </div>
      </div>
      <div class="leave-card">
        <div class="leave-border">
          <div class="flex-grow">
            <h4 class="text-blue-600 title-font font-bold">Sick</h4>
            <h4 class="text-gray-600">00</h4>
          </div>
        </div>
      </div>
      <div class="leave-card">
        <div class="leave-border">
          <div class="flex-grow">
            <h4 class="text-blue-600 title-font font-bold">Vacation</h4>
            <h4 class="text-gray-600">00</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="flex flex-wrap">
  <div class=" lg:w-1/2 md:w-1/2 w-full bg-white p-5 rounded-lg">
    <form action="">
      <label for="fname">Description:</label><br>
      <input type="text" id="fname" name="fname"><br>
      <label for="fname">Type of Leave:</label><br>
      <select name="cars" id="cars">
        <option value="volvo">Select</option>
      </select><br>
      <label for="fname">From:</label><br>
      <input type="date" id="fname" name="fname"><br>
      <label for="fname">Until:</label><br>
      <input type="date" id="fname" name="fname"><br>
      <label for="fname">Reason:</label><br>
      <textarea class="h-20"></textarea><br>
      <label for="fname">Upload Supporting Files:</label><br>
      <input type="file" id="myfile" name="myfile"><br>
      <div class="mt-4">
        <input class="w-1/4 text-white bg-blue-600 border-blue-600 border-1 rounded-sm py-2 p-1 mx-3" type="submit" value="Submit">
        <input class="w-1/4 text-blue-600 border-blue-600 border-1 rounded-sm py-2 p-1" type="reset" value="Cancel">
      </div>
    </form> 
  </div>
  <div class=" lg:w-1/2 md:w-1/2 w-full bg-white p-5 rounded-lg">
    <h5 class="text-blue-600 font-bold">Leave Request History</h5>
        <div class="border-1 border-blue-500 p-2 rounded-lg w-full my-3">
          <div class="p-4 flex">
              <div class="h-12 inline-flex items-center justify-center">
                <h6 class="text-blue-600">May 05</h6>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Leave Description</h2>
                <p class="leading-relaxed text-base">type of leave</p>
              </div>
              <div class="h-12 inline-flex items-center justify-center">
                <p class="py-1 px-3 text-white bg-green-600 rounded-lg">Approved</p>
              </div>
            </div>
        </div>
        <div class="border-1 border-blue-500 p-2 rounded-lg w-full my-3">
          <div class="p-4 flex">
              <div class="h-12 inline-flex items-center justify-center">
                <h6 class="text-blue-600">May 05</h6>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Leave Description</h2>
                <p class="leading-relaxed text-base">type of leave</p>
              </div>
              <div class="h-12 inline-flex items-center justify-center">
                <p class="py-1 px-3 text-white bg-red-600 rounded-lg">Rejected</p>
              </div>
            </div>
        </div>
        <div class="border-1 border-blue-500 p-2 rounded-lg w-full my-3">
          <div class="p-4 flex">
              <div class="h-12 inline-flex items-center justify-center">
                <h6 class="text-blue-600">May 05</h6>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Leave Description</h2>
                <p class="leading-relaxed text-base">type of leave</p>
              </div>
              <div class="h-12 inline-flex items-center justify-center">
                <p class="py-1 px-3 text-white bg-yellow-600 rounded-lg">Pending</p>
              </div>
            </div>
        </div>
        
  </div>
</div>



</div>



</template>

<style scoped>
.leave-card{ @apply p-2 lg:w-1/4 sm:w-1/2 w-full;}
.leave-border{ @apply h-full flex items-center border-blue-600 border-2 p-6 rounded-sm bg-white;}

input[type=text],select,input[type=date],textarea, input[type=file]{ @apply  w-full rounded-sm px-3 py-1 mb-4 bg-slate-200 
border-slate-300 border-2;}

label{@apply mb-2}
</style>

<script>
import Navbar from '@/views/Navbar'

export default {
  name: 'Leave',
  components: {
    Navbar
  }
}
</script>