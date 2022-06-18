<template>
  <div class="d-flex flex-wrap forgot-password-page-container">
  <HeaderForgotPassword/>
    <div class="container d-flex justify-content-center">
      <img src="../assets/img/banners/forgot-password-email-sent-banner.png" class="forgot-password-email-sent-banner" alt="" />
    </div>
    <div class="container">
      <p class="forgot-password-email-sent-text-password-reset text-center">Password Reset Request Sent</p>
      <p class="forgot-password-email-sent-text-password-message text-center">
        A password reset message was sent to your email. Please click the link
        in <br />
        email messsage to reset your password in a few moments. <br />
        Please check your spam, junk, or other folder it might be.
      </p>
    </div>
  </div>
</template>

<script src="../scripts/forgot-password-email-sent.js">
  import HeaderForgotPassword from "@/components/HeaderForgotPassword";

  export default {
    name: "ForgotPasswordEmailSent ",
    components: {
      HeaderForgotPassword,
    },
    mounted(){
      document.body.style.backgroundColor = "#ffffff";
    }
  };
</script>



<style scoped>
  @import "../css/forgot-password-email-sent.css";
</style>
