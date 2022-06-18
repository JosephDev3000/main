<template>
  <div class="d-flex flex-wrap forgot-password-page-container">
  <HeaderForgotPassword/>
  <div
    class="overflow-hidden w-100 reset-password-content-container d-flex flex-wrap justify-content-center align-items-center"
  >
    <div class="w-100 d-flex flex-wrap justify-content-center">
      <img
        src="../assets/img/banners/reset-pass-banner-png.png"
        alt=""
        class="reset-password-banner-png"
      />
    </div>
    <h1 class="fw-bold w-100 text-center">Reset Password</h1>
    <p>
      Strong passwords include numbers, letters <br />and punctuation marks
    </p>
    <form action="" class="reset-password-form w-100 mb-2">
      <div
        class="reset-password-input-password d-flex justify-content-center align-items-center p-2 mb-2 mx-auto"
      >
        <span
          class="iconify"
          data-icon="akar-icons:key"
          data-width="20"
          data-height="20"
        ></span>
        <input
          type="text"
          class="w-100 px-2"
          placeholder="create new password"
        />
      </div>
      <div
        class="reset-password-input-password d-flex justify-content-center align-items-center p-2 mb-4 mx-auto"
      >
        <span
          class="iconify"
          data-icon="akar-icons:key"
          data-width="20"
          data-height="20"
        ></span>
        <input
          type="text"
          class="w-100 px-2"
          placeholder="confirm password"
        />
      </div>
      <div class="d-flex flex-wrap justify-content-center">
        <button
          type="button"
          class="border-0 outline-0 py-2 px-3 mb-2 mx-auto"
        >
          Reset Password</button
        ><br />
      </div>
    </form>
    <div class="w-100 text-center">
      <a href="" class="">Back To Login</a>
    </div>
  </div>
</div>
</template>

<script src="../scripts/reset-password.js">

</script>



<style scoped>
  @import "../css/reset-password.css";
</style>
