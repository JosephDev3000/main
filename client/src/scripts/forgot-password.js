import HeaderForgotPassword from "@/components/HeaderForgotPassword";
import AuthenticationService from '@/services/AuthenticationService'


export default {
  name: "ForgotPassword ",
  components: {
    HeaderForgotPassword,
  },
  methods: {
    navigateTo(route){
      this.$router.push(route)
    },
    async forgotPasssword(){
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        if(response.data.status === 'ok'){
          // Code goes here
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted(){
    document.body.style.backgroundColor = "#ffffff";
  }
};