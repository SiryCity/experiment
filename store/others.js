export const mutations = {
  //画面1個分の高さをセットする
  setStatic100vh(){
    /iPhone|iPod|iPad|Android/i.test(navigator.userAgent)
    && document.documentElement.style.setProperty(
      '--static100vh',
      `${window.outerHeight}px`
    )
  },

}

export const getters = {
  json: (_, __, rootState) =>
    JSON.stringify(rootState.experiment.results),
  
  transform: (_, __, rootState) =>
    ({
      transform: `
        translateX(${rootState.experiment.positionXpixel}px)
        translateY(${rootState.experiment.positionYpixel}px)
      `
    }),

  calculateResults(_, __, rootState){

  }
}