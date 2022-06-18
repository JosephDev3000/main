import AuthenticationService from '@/services/AuthenticationService'
import { Icon } from "../../node_modules/@iconify/vue";
import Swal from 'sweetalert2'

export default {
  name: "Login",
  components: {
    Icon,
  },
    // two way binding of data set the initial value to blank
  data() {
    return{
      email: this.$cookies.get('email') ? this.$cookies.get('email') :'',
      password: this.$cookies.get('password') ? this.$cookies.get('password') : '',
      saveinfo: false,
      error: null
    }
  },

  methods: {
    navigateTo(route){
      this.$router.push(route)
    },

    async login() {
      try{
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        if (response.data.token) {
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          console.log("Save toogle status is on before checking: "+this.saveinfo)
          
          if(this.saveinfo === true){
            // localStorage.setItem('user', JSON.stringify(response.data))
            // this.$cookies.set("user",JSON.stringify(response.data),60*5); 
            if(!(this.$cookies.isKey('saveinfo') || this.$cookies.isKey('email') || this.$cookies.isKey('password'))){
              this.$cookies.set("email",this.email,'1d');  //60 seconds * 5 minutes
              this.$cookies.set("password",this.password,'1d')
              this.$cookies.set("saveinfo",this.saveinfo,'1d')
            }
            console.log("Save if toogle is on: "+this.$cookies.get('saveinfo'))
          }else{
            this.$cookies.remove("email")
            this.$cookies.remove("password")
            this.$cookies.remove("saveinfo")
          }
          localStorage.setItem('user', JSON.stringify(response.data))
          Swal.fire(
            'Login Successful',
            'Click the OK button to continue',
            'success'
          )
          this.$router.push('dashboard')
        }
        // this.navigateTo({name: 'dashboard'})
      }catch(error){
        this.error = error.response.data.error
      }
    },


  },

  mounted(){
    document.body.style.backgroundColor = "#f6f6f6";
  }
};


