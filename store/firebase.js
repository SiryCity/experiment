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

    const resultsInALine = makeResultsToInALine(results)

    console.dir(results)
    console.dir(resultsInALine)
    //alert(resultsInALine.filter(e => e.v && e.v === 2 ).length / 100)
    //alert([
    //  resultsInALine.filter(e => e.d === 'right' ).length,
    //  resultsInALine.filter(e => e.d === 'left' ).length,
    //])

    ~chart
    `scatter--n-time`
    `scatter`
    ({
      datasets:
      [
        {
          label: 'タッチ回数と所要時間',
          data: resultsInALine.map(({n, t}) =>
            ({
              x: n,
              y: t < 0 ? 0 : t > 2 ? 2 : t
            })
          )
        }
      ]
    })

    ~chart
    `scatter--h-time`
    `scatter`
    ({
      datasets:
      [
        {
          label: '色相と所要時間',
          data: resultsInALine.map(({h, t}) =>
            ({
              x: h,
              y: t < 0 ? 0 : t > 2 ? 2 : t
            })
          )
        }
      ]
    })

    ~chart
    `scatter--l-time`
    `scatter`
    ({
      datasets:
      [
        {
          label: '明度と所要時間',
          data: resultsInALine.map(({l, t}) =>
            ({
              x: l,
              y: t < 0 ? 0 : t > 2 ? 2 : t
            })
          )
        }
      ]
    })

    ~chart
    `scatter--s-time`
    `scatter`
    ({
      datasets:
      [
        {
          label: '彩度と所要時間',
          data: resultsInALine.map(({s, t}) =>
            ({
              x: s,
              y: t < 0 ? 0 : t > 2 ? 2 : t
            })
          )
        }
      ]
    })

    ~chart
    `scatter--dist-time`
    `scatter`
    ({
      datasets:
      [
        {
          label: 'タッチ誤差と所要時間',
          data: resultsInALine.map(({px, py, tx, ty, t}) =>
            ({
              x: Math.sqrt((px - tx) ^ 2 + (py - ty) ^ 2),
              y: t < 0 ? 0 : t > 5 ? 5 : t
            })
          )
        }
      ]
    })
    
    ~chart
    `scatter--dist-h`
    `scatter`
    ({
      datasets:
      [
        {
          label: 'タッチ誤差と色相',
          data: resultsInALine.map(({px, py, tx, ty, h})=>
            ({
              x: Math.sqrt((px - tx) ** 2 + (py - ty) ** 2),
              y: h
            })
          )
        }
      ]
    })
    
    ~chart
    `scatter--dist-s`
    `scatter`
    ({
      datasets:
      [
        {
          label: 'タッチ誤差と明度',
          data: resultsInALine.map(({px, py, tx, ty, s})=>
            ({
              x: Math.sqrt((px - tx) ** 2 + (py - ty) ** 2),
              y: s
            })
          )
        }
      ]
    })
    
    ~chart
    `scatter--dist-l`
    `scatter`
    ({
      datasets:
      [
        {
          label: 'タッチ誤差と彩度',
          data: resultsInALine.map(({px, py, tx, ty, l})=>
            ({
              x: Math.sqrt((px - tx) ** 2 + (py - ty) ** 2),
              y: l
            })
          )
        }
      ]
    })
    
    ~chart
    `scatter--px-time`
    `scatter`
    ({
      datasets:
      [
        {
          label: 'タッチ箇所(x軸)と所要時間',
          data: resultsInALine.map(({dx, px, t}) =>
            ({
              x: (100 / dx * px) + ~~(Math.random() * 5),
              y: t < 0 ? 0 : t > 5 ? 5 : t
            })
          )
        }
      ]
    })
    
    ~chart
    `scatter--py-time`
    `scatter`
    ({
      datasets:
      [
        {
          label: 'タッチ箇所(y軸)と所要時間',
          data: resultsInALine.map(({dy, py, t}) =>
            ({
              x: (100 / dy * py) + ~~(Math.random() * 5),
              y: t < 0 ? 0 : t > 5 ? 5 : t
            })
          )
        }
      ]
    })

    /*
    ~chart `myChart` `line`
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

    ~chart `Scatter` `scatter`
    ({
      datasets:
      [
        {
          label: '1組',
          data: [{x:90, y:82},{x:39, y:45},{x:63, y:65},{x:83, y:75},{x:83, y:95}],
          backgroundColor: 'RGBA(225,95,150, 1)',
        }, 
        {
          label: '2組',
          data: [{x:97, y:92},{x:63, y:70},{x:48, y:52},{x:83, y:79},{x:66, y:74}],
          backgroundColor: 'RGBA(115,255,25, 1)',
        }]
    })
    */

  },
}

// chartレンダリングのラッパー
const chart = id =>
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