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
  },

  async select(){

    const DOCUMENTS = await firebase.firestore().collection('results').get()

    let ITERABLE_DOCUMENTS = []

    DOCUMENTS.forEach(doc => ITERABLE_DOCUMENTS.push(doc.data()))

    // RESULTS は全ての結果を1つの配列にしたもの
    const RESULTS = ITERABLE_DOCUMENTS.reduce((pre, cur) =>
      [ 
        ... pre,
        ... Object.entries(cur).map(v => v[1])
      ]
    , [])

    console.dir(RESULTS)

    console.dir(RESULTS.length)

  }
}