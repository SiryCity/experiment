/**
 * 実験開始時の座標を決定する
 */

export const actions = {

  // operationの「実験をはじめる」を押した瞬間に発火
  init({commit, rootState}){
    commit('setInitialStatus', rootState)
  }
}

export const mutations = {
  setInitialStatus(_, {experiment}){

    const dx = window.outerWidth
    const dy = window.outerHeight
    const DIVISIONS = 21

    experiment.translateX = dx / DIVISIONS * ~~(Math.random() * DIVISIONS)
    experiment.translateY = dy / DIVISIONS * ~~(Math.random() * DIVISIONS)
    
    experiment.previousTime = ~~((new Date().getTime() + '').slice(5)|0) / 1000
    experiment.uniqueId = ~~(Math.random() * 1000000)

    experiment.hue = ~~(Math.random() * 256)
    experiment.saturation = ~~(Math.random() * 101)
    experiment.llightness = ~~(Math.random() * 101)

    experiment.dominance = null
  },
}