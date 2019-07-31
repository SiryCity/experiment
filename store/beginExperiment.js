export const actions = {
  init({commit, rootState}){
    commit('setInitialStatus', rootState)
  }
}

export const mutations = {
  setInitialStatus(_, rootState){

    const dx = window.outerWidth
    const dy = window.outerHeight
    const DIVISIONS = 20

    rootState.experiment.positionXpixel = dx / DIVISIONS * ~~(Math.random() * DIVISIONS)
    rootState.experiment.positionYpixel = dy / DIVISIONS * ~~(Math.random() * DIVISIONS)
    
    rootState.experiment.previousTime = ~~((new Date().getTime() + '').slice(5)|0) / 1000
    rootState.experiment.uniqueId = ~~(Math.random() * 1000000)
  },
}