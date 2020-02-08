import firebase from 'firebase'


export const actions = {
  async authAction({commit}){
    
    const EMAIL = 'sirycity2018@gmail.com'
    const PASSWORD = null

    const user = await firebase.auth().createUserWithEmailAndPassword(EMAIL, PASSWORD).catch(e => alert(e.message))
    
    alert('Create account: ', user)
    console.dir(user)
    
    

    const RESULT = '新規作成しました'

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
    authState : '新規作成'
  })


export const getters = {
  authGetter: state =>
    state.authState
}
