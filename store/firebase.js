/**
 * 実験結果をfirestoreに保存
 */

import firebase from 'firebase/app'
import Chart from 'chart.js'


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

    commit('renderGraph', results)
  }
}


export const mutations = {
  renderGraph(_, results){

    console.dir(results)
    console.dir(makeResultsToInALine(results))

    ~c `myChart` `line`
    ({
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets:
        [
          {
            label: 'apples',
            data: [12, 19, 3, 17, 6, 3, 7],
            backgroundColor: "rgba(153,255,51,0.4)"
          },
          {
            label: 'oranges',
            data: [2, 29, 5, 5, 2, 3, 10],
            backgroundColor: "rgba(255,153,0,0.4)"
          }
        ]
    })

  },
}

// chartレンダリングのラッパー
const c = id =>
  ([type]) =>
    data => 
      new Chart(
        ctx([id[0]]),
        {
          type,
          data
        }
      )

//canvas取得
const ctx = idName =>
  id([[idName]]).getContext('2d')

// id取得
const id = id =>
  document.getElementById(id[0])

// 全ての結果を1つの配列にする
const makeResultsToInALine = results =>
  results.reduce((pre, cur) =>
    [ 
      ... pre,
      ... Object.entries(cur).map(v => v[1])
    ]
  , [])