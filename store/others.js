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

  // ●のCSSを定義
  css: (_, __, {experiment}) =>
    ({
      transform: `
        translateX(calc(${experiment.translateX}px - 5vmin))
        translateY(calc(${experiment.translateY}px - 5vmin))
      `,
      background: `hsl(${experiment.hue},${experiment.saturation}%,${experiment.lightness}%)`
    }),
}