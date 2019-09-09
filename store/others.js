export const mutations = {
  //画面1個分の高さをセットする
  setStatic100vh(){
    (/iPhone|iPod|iPad|Android/i.test(window.navigator.userAgent)
    || (window.navigator.userAgent.includes('Macintosh')
    && 'ontouchend' in document))
    && document.documentElement.style.setProperty(
      '--static100vh',
      `${window.outerHeight}px`
    )
  },
}


export const getters = {
  json: (_, __, {experiment}) =>
    JSON.stringify(experiment.results),
  
  // ●のCSSを定義
  css: (_, __, {experiment}) =>
    ({
      transform: `
        translateX(${experiment.positionXpixel}px)
        translateY(${experiment.positionYpixel}px)
      `,
    }),

  calculateResults(_, __, rootState){

  }
}