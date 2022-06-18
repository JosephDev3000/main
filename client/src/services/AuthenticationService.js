import Api from "@/services/Api"
import authHeader from './AuthHeader';
export default {
    // call the register method in the server side on post
    register (credentials){
        return Api().post('register', credentials)
    },
    
    // call the login method in the server side on post
    login (credentials){
        return Api().post('login', credentials, { headers: authHeader() })
    },
    
    logout (){
        Api().get('logout')
    },

    forgotPassword(credentials){
        Api().post('forgot-password', credentials)
    }

}