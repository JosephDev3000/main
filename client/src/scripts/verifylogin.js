import Swal from 'sweetalert2'

export default {
    props: {
        method:{
          type: String,
          required: true
        },
        token: {
          type: String,
          required: true
        }
    },
    data() {
        return{
        isLoggedIn: false
        }
    },
    methods: {
        navigateTo(route){
        this.$router.push(route)
        },
        display(){
            console.log(eval(this.token))
        }
    },
    computed: {
        getToken(){
        //   this.token = this.usertoken
          const response = JSON.parse(this.token)
          this.$store.dispatch('setToken', response.token)
          this.$store.dispatch('setUser', response.user)
          
          return this.token
        }
    },
    created() {
        // this.googleLogin();
    },
    mounted() {
        localStorage.setItem('user', JSON.stringify(JSON.parse(this.token)));
        Swal.fire(
            'Login Successful',
            'Click the OK button to continue',
            'success'
          )
        this.$router.push('/dashboard')
        
    }
};
