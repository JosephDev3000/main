<template>
  <div class="container main-container mt-5">
    <div class="row">
      <div class="col-lg-5">
        <div class="login-container p-0">
          <div class="text-center pb-3">
            <p class="log-in-text pt-3">LOG IN</p>
            <p class="login-access-text">
              Login to access your employee account
            </p>
            <div v-if="error" v-html="error" class="error alert alert-danger w-80 mx-auto" role="alert" ></div>
          </div>
          <form class="form-container">
            <div
              class="email-container d-flex align-items-center border-secondary px-3 py-2 mx-auto"
            >
            <Icon icon="ic:outline-email" class="login-credentials-icon" />
              <!-- <span
                class="iconify"
                data-icon="ant-design:mail-outlined"
                style="color: #999"
                data-width="28"
                data-height="28"
              ></span> -->
              <input
                type="email"
                class="email-input px-2"
                name=""
                placeholder="Email"
                v-model="email"
              />
            </div>
            <div
              class="password-container d-flex align-items-center border-secondary px-3 py-2 mx-auto"
            >
            <Icon icon="ri:lock-password-fill" class="login-credentials-icon" />
              <!-- <span
                class="iconify"
                data-icon="ps:padlock"
                style="color: #999"
                data-width="28"
                data-height="28"
              ></span> -->
              <input
                type="password"
                class="password-input px-2"
                name=""
                placeholder="Password"
                v-model="password"
              />
            </div>
            <div
              class="container-additional-login mx-auto d-flex justify-content-between flex-wrap py-1"
            >
              <div class="toggle-switch d-flex justify-content-start p-0">
                <label class="switch"
                  ><input type="checkbox" v-model="saveinfo" /><span class="slider round"></span
                ></label>
                &ensp;
                <p class="keep-me-text">Remember me</p>
              </div>
              <div class="forgot-password-container d-flex">
                <a
                  href="#/forgot-password"
                  class="forgot-password-text text-decoration-none w-100"
                  >Forgot password?</a
                >
              </div>
            </div>
            <div class="d-flex justify-content-center py-1 ">
              <button type="button" class="btn-login" @click="login">LOGIN</button>
            </div>
          </form>
          <div class="py-3">
            <p class="sign-up-text text-center">
              Don’t have an account yet?
              <a href="#/register" class="text-decoration-none">Sign up</a>
            </p>
          </div>

          <div class="sign-in-with-main-container">
            <div class="or-container text-center">
              <div></div>
              <div></div>
              <p class="or-text my-0 mx-auto">OR</p>
            </div>
            <div class="sign-in-with-container text-center">
              <p class="sign-in-with-text pt-3">Sign in with:</p>
              <!-- linkedin logo -->
              <a href="http://localhost:5000/auth/linkedin"  class="logo-anchor sign-in-logos" type="button">
                <Icon
                  icon="bxl:linkedin"
                  class="social-media-icon"
                  id="linkedin-icon"
                />
                <!-- <span
                  class="iconify sign-in-logos p-2 m-2"
                  data-icon="bxl:linkedin"
                  style="color: #0b66c3"
                  data-width="40"
                  data-height="40"
                ></span -->
              </a>
              <!-- google logo -->
              <a href="http://localhost:5000/auth/google" class="logo-anchor sign-in-logos" type="button">
                <Icon icon="flat-color-icons:google" class="social-media-icon" />
                <!-- <span
                  class="iconify sign-in-logos p-2 m-2"
                  data-icon="flat-color-icons:google"
                  data-width="40"
                  data-height="40"
                ></span
              > -->
              </a>
              <!-- facebook logo -->
              <a href="http://localhost:5000/auth/facebook"  class="logo-anchor sign-in-logos" type="button">
                <Icon icon="la:facebook-f" id="facebook-icon" class="social-media-icon"/>
                <!-- <span
                  class="iconify sign-in-logos p-2 m-2"
                  data-icon="la:facebook-f"
                  style="color: #0b66c3"
                  data-width="40"
                  data-height="40"
                ></span
              > -->
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col picture-container w-500 p-0">
        <img
          src="../assets/img/logos/hr-services-logo.png"
          alt="HRServices Logo"
          class="hr-services-logo mx-auto d-block mt-5"
        />
        <img
          src="../assets/img/banners/hero-login-banner.png"
          alt="Background image"
          class="background-img"
        />
      </div>
    </div>
  </div>
</template>

<!-- script -->
<script src = "../scripts/login.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../css/index.css';
</style>
