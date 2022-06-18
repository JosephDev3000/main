import { createStore } from "vuex";
const userLocalStorage = JSON.parse(localStorage.getItem('user'));

export default createStore({
  strict: true,
  state: {
    token:  userLocalStorage? userLocalStorage.token : null,
    user: userLocalStorage? userLocalStorage.user : null,
    isUserLoggedIn: userLocalStorage? true: false
  },
  getters: {},
  mutations: {
    setToken (state, token){
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      }else{
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user){
      state.user = user
    }
  },
  actions: {
    setToken ({commit}, token){
      commit('setToken', token)
    },

    setUser ({commit}, user){
      commit('setUser', user)
    },
  },
  modules: {},
  // plugins: [createPersistedState({
  //   storage: {
  //     getItem: key => Cookies.get(key),
  //     setItem: (key, value) => Cookies.set(key, value, { expires: '7d', secure: true }),
  //     removeItem: key => Cookies.remove(key)
  //   }
  // })]
});
