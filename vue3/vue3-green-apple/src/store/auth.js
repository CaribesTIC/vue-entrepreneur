import axios from 'axios'
import Cookies from 'js-cookie'


export default {

  state: {
    user: null,
    token: null
  },

  getters: {
    user: state => state.user,
    token: state => state.token,
    check: state => state.user !== null
  },

  mutations: {
    setToken (state, { token, remember }) {
      state.token = token
    },
  },

  actions: {
    saveToken ({ commit, dispatch }, payload) {
      commit('setToken', payload)
    },
  
  //   async fetchUser ({ commit }) {
  //     try {
  //       const { data } = await axios.get('/api/user')
  
  //       commit(types.FETCH_USER_SUCCESS, { user: data })
  //     } catch (e) {
  //       commit(types.FETCH_USER_FAILURE)
  //     }
  //   },
  
  //   updateUser ({ commit }, payload) {
  //     commit(types.UPDATE_USER, payload)
  //   },
  
  //   async logout ({ commit }) {
  //     try {
  //       await axios.post('/api/logout')
  //     } catch (e) { }
  
  //     commit(types.LOGOUT)
  //   },
  
  //   async fetchOauthUrl (ctx, { provider }) {
  //     const { data } = await axios.post(`/api/oauth/${provider}`)
  
  //     return data.url
  //   }
  }



}

