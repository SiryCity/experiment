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

  async select({commit}){

    console.dir('clicked')

    const rawResults = await firebase.firestore().collection('results').get()

    let results = []

    rawResults.forEach(doc => results.push(doc.data()))

    commit('writeResults', results)
  }
}

export const mutations = {
  writeResults(state, results){

    // resultsInARow は全ての結果を1つの配列にしたもの
    const resultsInARow = results.reduce((pre, cur) =>
      [ 
        ... pre,
        ... Object.entries(cur).map(v => v[1])
      ]
    , [])

    state.results = results
    state.resultsInARow = resultsInARow

    console.dir(state.results)
    console.dir(state.resultsInARow)
  },
}

export const state = () =>
({
  results: null,
  resultsInARow: null,
})