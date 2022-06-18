// import AuthenticationService from '@/services/AuthenticationService'
import { Icon } from "../../node_modules/@iconify/vue";
// import * as Cookies from 'vue-cookies'

//dashboard
import Navbar from '@/views/Navbar'
import Sidebar from '@/views/Sidebar'

export default {
  name: "App",
  data() {
    return{
      timestamp: "",name:""
    }
  },
  components: {
    Icon,
    Navbar,
    Sidebar
  },
  created() {
    this.getTime()
    setInterval(this.getTime, 1000);
    this.getName()
  },
    // two way binding of data set the initial value to blank
  methods: {
    navigateTo (route){
        this.$router.push(route) 
    },
    /*
    logout() {
      
      this.$store.dispatch('setToken', '')
      this.$store.dispatch('setUser','')
      localStorage.removeItem('user')
      this.isLoggedIn=false
      //window.location.href = "http://localhost:5000/logout"
      this.navigateTo ({name: 'login'})
      
    }, */
    getTime: function() {
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = time;
      this.timestamp = dateTime;
    },
    getName: function(){
    const temp_name = JSON.parse(localStorage.getItem('user')).user.name
    this.name= temp_name;
    }
  }
};


document.body.style.backgroundColor = "#f6f6f6";
