<template>
  <div class="d-flex flex-wrap forgot-password-page-container">
  <HeaderForgotPassword/>
    <div class="overflow-hidden w-100">
      <div class="row w-100 m-0">
        <div
          class="col-12 col-sm-7 d-flex flex-wrap justify-content-center align-content-center"
        >
          <img
            src="../assets/img/banners/forgot-password-banner-png.png"
            class="forgot-password-banner"
            alt=""
          />
        </div>
        <div
          class="col-12 col-sm-5 d-flex flex-wrap align-content-center forgot-password-right-container"
        >
          <h1 class="fw-bold w-100 mb-4">
            FORGOT <br />
            PASSWORD?
          </h1>
          <h5 class="mb-4 w-100">
            Enter the email address associated <br />
            with your account
          </h5>
          <form class="forgot-password-form pb-4">
            <div class="mb-4 forgot-password-email-input p-2 d-flex w-100">
              <span
                class="iconify"
                data-icon="eva:email-outline"
                style="color: #071a30"
                data-width="35"
                data-flip="horizontal"
              ></span>
              <input
                type="text"
                name=""
                id=""
                class="border-0 outline-0 w-100 ps-2"
                placeholder="Email"
              />
            </div>

            <button type="button" class="forgot-password-next-button p-2 border-0">
              Next
            </button>
            <a @click="forgotPassword" ><button type="button" class="forgot-password-next-button p-2 border-0 ml-2">
              Back
            </button></a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/forgot-password.js"></script>



<style scoped>
  @import "../css/forgot-password.css";
</style>
