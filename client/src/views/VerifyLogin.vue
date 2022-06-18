import { shallowEqual } from '@babel/types';

<template>
  <div>
    <p>{{ getToken }}</p>
    <a @click="display">Click Here</a>
  </div>
</template>

<!-- script -->
<!-- <script src = "../scripts/verifylogin.js">
export default {
  computed: {
    token() {
         return this.$store.getters.token;
      },
  },
  created() {
    this.$store.dispatch('googleLogin');  
  },
}
</script> -->
<script src="../scripts/verifylogin.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/index.css";
</style>
