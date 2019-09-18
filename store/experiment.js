export const actions = {
  // 「実験をはじめる」を押した時
  init({commit}){
    commit('setInitialState')
    commit('setNextState')
  },
  // 画面をタッチした時
  touched({commit}, e){
    commit('resisterResult', e)
    commit('setNextState')
  }
}

// 何回タッチしたらゲームが終了か
const LIMIT = 100

// 座標を何分割するか
const DIVISIONS = 21

export const mutations = {

  // 結果をresults[]に追加
  resisterResult(state, e){
    state.results.push({
      // ユニークID
      u: state.uniqueId,

      //利き
      d: state.dominance,

      // 何回目か
      n: state.times,

      // 画面の大きさ d = display
      dx: state.outerWidth,
      dy: state.outerHeight,

      // 画面上で●が表示されている位置 p = position
      px: ~~state.translateX,
      py: ~~state.translateY,

      // 被験者がタッチした位置 t = touched
      tx: e.pageX,
      ty: e.pageY,

      // 経過時間(秒)
      t: ~~(((new Date().getTime() + '').slice(5)|0) - (~~(state.previousTime * 1000) / 1000) * 1000) / 1000,

      // HSL
      h: state.hue,
      s: state.saturation,
      l: state.lightness,

    })
  },

  setDominance(state, dominance){

    // 利き手を決定
    state.dominance = dominance
  },

  setInitialState(state){

    // ユニークIDを決定
    state.uniqueId = ~~(Math.random() * 1000000)

    // 画面の幅と高さを決定
    state.outerWidth = window.outerWidth
    state.outerHeight = window.outerHeight

  },
  
  setNextState(state){

    // 指定された回数タップしたら実験を終了
    if(state.times > LIMIT - 1){
      state.times = 0
      this.$router.push('finished')
      return
    }

    // 回数を加算
    state.times++

    // 次の座標をランダムに更新
    state.translateX = state.outerWidth / DIVISIONS * ~~(Math.random() * DIVISIONS)
    state.translateY = state.outerHeight / DIVISIONS * ~~(Math.random() * DIVISIONS)
    
    // 次の色をランダムに更新
    state.hue = ~~(Math.random() * 256)
    state.saturation = ~~(Math.random() * 101)
    state.lightness = ~~(Math.random() * 101)

    // 経過時間を追加
    state.previousTime += ~~(((new Date().getTime() + '').slice(5)|0) - (~~(state.previousTime * 1000) / 1000) * 1000) / 1000

  }
}

export const state = () =>
  ({
    uniqueId: null,
    dominance: null,
    times: 0,
    outerWidth: 0,
    outerHeight: 0,
    translateX: 0,
    translateY: 0,
    previousTime: 0,
    hue: 0,
    saturation: 0,
    lightness: 100,
    results: [],
  })