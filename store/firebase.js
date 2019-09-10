/**
 * 実験結果をfirestoreに保存
 */

import firebase from 'firebase/app';

export const actions = {

  async insert({rootState}){
    
    // 実験結果の巨大なJSONを代入
    const RESULTS = rootState.experiment.results

    firebase.firestore().collection('results').add({
      ... RESULTS
    })

    console.dir(RESULTS)
  }
}