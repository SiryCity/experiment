
export const state = () =>
  ({
    isFinished: false,
  })

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

    /*
        // 前回の結果を取得
    const previousResult = state.results.length - 1
      ? state.results[state.results.length - 1]
      : null

    // 画面に表示されている位置
    const displayedAbsolutePositionXpixel = state.positionXpixel
    const displayedAbsolutePositionYpixel = state.positionYpixel
    const displayedRelativePositionXpixel = state.positionXpixel - previousResult.displayedAbsolutePositionXpixel || 0
    const displayedRelativePositionYpixel = state.positionYpixel - previousResult.displayedAbsolutePositionYpixel || 0

    // 被験者がタップした位置
    const tappedAbsolutePositionXpixel = e.pageXpixel
    const tappedAbsolutePositionYpixel = e.pageYpixel
    const tappedRelativePositionXpixel = e.pageXpixel - previousResult.tappedAbsolutePositionXpixel || 0
    const tappedRelativePositionYpixel = e.pageYpixel - previousResult.tappedAbsolutePositionYpixel || 0

    // 画像が表示されていた位置と実際にタップした位置との差異
    const differenceOfXpixel = tappedAbsolutePositionXpixel - displayedAbsolutePositionXpixel
    const differenceOfYpixel = tappedAbsolutePositionYpixel - displayedAbsolutePositionYpixel


    // 結果
    const result = {

    }
    */

  }
}