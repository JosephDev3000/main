import AuthenticationService from '@/services/AuthenticationService'
import Swal from 'sweetalert2'
export default {
    // two way binding of data set the initial value to blank
  data() {
    return{
      email: '',
      name: '',
      password: '',
      error: null,
      isLoggedIn: false
    }
  },

  methods: {
    navigateTo(route){
      this.$router.push(route)
    },
    async register() {
      try{
        const response = await AuthenticationService.register({
          email: this.email,
          name: this.name,
          password: this.password
        })
        this.isLoggedIn=true
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        localStorage.setItem('user', JSON.stringify(response.data))
        Swal.fire(
          'Register Successful',
          'Click the OK button to continue',
          'success'
          ).then(()=> {this.navigateTo({name: 'dashboard'})})
              
      }catch(error){
        this.error = error.response.data.error
      }
    }
  }
};
