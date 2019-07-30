export const actions = {
  init({commit, rootState}){
    commit('setInitialPositionAndTime', rootState)
  }
}

export const mutations = {
  setInitialPositionAndTime(_, rootState){

    const dx = window.outerWidth
    const dy = window.outerHeight
    const DIVISIONS = 20

    rootState.experiment.positionXpixel = dx / DIVISIONS * ~~(Math.random() * DIVISIONS)
    rootState.experiment.positionYpixel = dy / DIVISIONS * ~~(Math.random() * DIVISIONS)
    
    rootState.experiment.previousTime = ~~((new Date().getTime() + '').slice(5)|0) / 1000
  },
}