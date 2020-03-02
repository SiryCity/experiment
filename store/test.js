import firebase from 'firebase'


export const actions = {
  async authAction({commit}){
    
    const EMAIL = 'sirycity2018@gmail.com'
    const PASSWORD = '111111'

    const user = await firebase.auth().createUserWithEmailAndPassword(EMAIL, PASSWORD).catch(e => alert(e.message))
    
    if(!user) return 

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
