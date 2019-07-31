import firebase from "~/plugins/firebase.js"

export const actions = {
  async insert({rootState}){
    const results = rootState.experiment.results
    console.log(results)
  }
}