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
  renderGraph(_, rawResults){

    const results = makeResultsToInALine(rawResults).map(v =>
        ({
          ... v,
          t: v.t < 0 ? 0 : v.t
        })
      ).filter(v => v.n <= 100 && v.n > 0)

    const ver = v =>
      v ? v : 1
    
    console.dir(rawResults)
    console.dir(results)
    
    console.info(results.filter(e => e.v && e.v === 2 ).length / 100)
    console.info([
      results.filter(e => e.d === 'right' ).length,
      results.filter(e => e.d === 'left' ).length,
    ])

    ~chart
    `scatter--n-time`
    `scatter`
    ({
      datasets:
      [
        {
          label: 'タッチ回数と所要時間',
          data: results.map(({n, t}) =>
            ({
              x: n,
              y: t > 2 ? 2 : t
            })
          )
        }
      ]
    })

    ~chart
    `scatter--n-dist`
    `scatter`
    ({
      datasets:
      [
        {
          label: 'タッチ回数とタッチ誤差',
          data: results.map(({n, px, py, tx, ty}) =>
            ({
              x: n,
              y: Math.sqrt((px - tx) ** 2 + (py - ty) ** 2) > 600
              ? 600
              : Math.sqrt((px - tx) ** 2 + (py - ty) ** 2)
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
          data: results.map(({h, t, v}) =>
            ({
              x: ver(v) === 1
              ? ~~(h / 255 * 360)
              : ver(v) === 2
              ? ~~((h - 256) / 104 * 360)
              : h,
              y: t > 2 ? 2 : t
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
          data: results.map(({l, t}) =>
            ({
              x: l,
              y: t > 2 ? 2 : t
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
          data: results.map(({s, t}) =>
            ({
              x: s,
              y: t > 2 ? 2 : t
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
          data: results.map(({px, py, tx, ty, t}) =>
            ({
              x: Math.sqrt((px - tx) ** 2 + (py - ty) ** 2) > 600
              ? 600
              : Math.sqrt((px - tx) ** 2 + (py - ty) ** 2),
              y: t > 5 ? 5 : t
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
          label: '色相とタッチ誤差',
          data: results.map(({px, py, tx, ty, h, v})=>
            ({
              y: Math.sqrt((px - tx) ** 2 + (py - ty) ** 2) > 600
                ? 600
                : Math.sqrt((px - tx) ** 2 + (py - ty) ** 2),
              x: ver(v) === 1
                ? ~~(h / 255 * 360)
                : ver(v) === 2
                ? ~~((h - 256) / 104 * 360)
                : h,
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
          label: '明度とタッチ誤差',
          data: results.map(({px, py, tx, ty, l})=>
            ({
              y: Math.sqrt((px - tx) ** 2 + (py - ty) ** 2) > 600
              ? 600
              : Math.sqrt((px - tx) ** 2 + (py - ty) ** 2),
              x: l
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
          label: '彩度とタッチ誤差',
          data: results.map(({px, py, tx, ty, s})=>
            ({
              y: Math.sqrt((px - tx) ** 2 + (py - ty) ** 2) > 600
              ? 600
              : Math.sqrt((px - tx) ** 2 + (py - ty) ** 2),
              x: s
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
          data: results.map(({dx, px, t}) =>
            ({
              x: (100 / dx * px) + ~~(Math.random() * 5),
              y: t > 5 ? 5 : t
            })
          )
        }
      ]
    })
    /*
    ~chart
    `scatter--px-time--right`
    `scatter`
    ({
      datasets:
      [
        {
          label: 'タッチ箇所(x軸)と所要時間(右利き)',
          data: results.filter(v => v.d === 'right').map(({dx, px, t}) =>
            ({
              x: (100 / dx * px) + ~~(Math.random() * 5),
              y: t > 5 ? 5 : t
            })
          )
        }
      ]
    })
    
    ~chart
    `scatter--px-time--left`
    `scatter`
    ({
      datasets:
      [
        {
          label: 'タッチ箇所(x軸)と所要時間(左利き)',
          data: results.filter(v => v.d === 'left').map(({dx, px, t}) =>
            ({
              x: (100 / dx * px) + ~~(Math.random() * 5),
              y: t > 5 ? 5 : t
            })
          )
        }
      ]
    })
    */
    ~chart
    `scatter--py-time`
    `scatter`
    ({
      datasets:
      [
        {
          label: 'タッチ箇所(y軸)と所要時間',
          data: results.map(({dy, py, t}) =>
            ({
              x: (100 / dy * py) + ~~(Math.random() * 5),
              y: t > 5 ? 5 : t
            })
          )
        }
      ]
    })
/*
    ~chart
    `scatter--py-time--right`
    `scatter`
    ({
      datasets:
      [
        {
          label: 'タッチ箇所(y軸)と所要時間(右利き)',
          data: results.filter(v => v.d === 'right').map(({dy, py, t}) =>
            ({
              x: (100 / dy * py) + ~~(Math.random() * 5),
              y: t > 5 ? 5 : t
            })
          )
        }
      ]
    })
    
    ~chart
    `scatter--py-time--left`
    `scatter`
    ({
      datasets:
      [
        {
          label: 'タッチ箇所(y軸)と所要時間(左利き)',
          data: results.filter(v => v.d === 'left').map(({dy, py, t}) =>
            ({
              x: (100 / dy * py) + ~~(Math.random() * 5),
              y: t > 5 ? 5 : t
            })
          )
        }
      ]
    })
*/

    ~chart
    `scatter--px-dist`
    `scatter`
    ({
      datasets:
      [
        {
          label: 'タッチ箇所(x軸)とタッチ誤差',
          data: results.map(({dx, px, py, tx, ty}) =>
            ({
              x: (100 / dx * px) + ~~(Math.random() * 5),
              y: Math.sqrt((px - tx) ** 2 + (py - ty) ** 2) > 600
              ? 600
              : Math.sqrt((px - tx) ** 2 + (py - ty) ** 2),
            })
          )
        }
      ]
    })

    ~chart
    `scatter--py-dist`
    `scatter`
    ({
      datasets:
      [
        {
          label: 'タッチ箇所(y軸)とタッチ誤差',
          data: results.map(({dy, px, py, tx, ty}) =>
            ({
              x: (100 / dy * py) + ~~(Math.random() * 5),
              y: Math.sqrt((px - tx) ** 2 + (py - ty) ** 2) > 600
              ? 600
              : Math.sqrt((px - tx) ** 2 + (py - ty) ** 2),
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