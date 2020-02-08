import firebase from "firebase/app"


export const actions = {
  async authAction({commit}){
    
    const RESULT = 'pushed'

    commit('authMutation', RESULT)
  }
}


export const mutations = {
  authMutation(state, e){
    state.authState = e
  }
}


export const state = () => 
  ({
    authState : 'push'
  })


export const getters = {
  authGetter: state =>
    state.authState
}
