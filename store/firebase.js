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

// 全ての結果を1つの配列にする
const makeResultsToInALine = results =>
  results.reduce((pre, cur) =>
    [ 
      ... pre,
      ... Object.entries(cur).map(v => v[1])
    ]
  , [])

export const mutations = {
  writeResults(state, results){

    state.results = results
    
    console.dir(state.results)
    console.dir(makeResultsToInALine(state.results))
  },
}

export const state = () =>
({
  results: null
})