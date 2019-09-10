export const mutations = {

  tapped(state, e){

    // 何回タップしたらゲームが終了か
    const LIMIT = 3

    // 座標を何分割するか
    const DIVISIONS = 21

    // ユニークID
    const uniqueId = state.uniqueId

    // 何回目か
    const n = state.results.length + 1
    
    // デバイスの大きさ d = device
    const dx = window.outerWidth
    const dy = window.outerHeight

    // 画面上で●が表示されている位置 p = position
    const px = state.translateX
    const py = state.translateY

    // 被験者がタップした位置 t = tapped
    const tx = e.pageX
    const ty = e.pageY

    state.previousTime = ~~(state.previousTime * 1000) / 1000

    // 経過時間(秒)
    const t = ~~(((new Date().getTime() + '').slice(5)|0) - state.previousTime * 1000) / 1000

    const h = state.h
    const s = state.s
    const l = state.l

    // 結果
    const result = {
      uniqueId,
      n,
      dx,
      dy,
      px,
      py,
      tx,
      ty,
      t,
      h,
      s,
      l,
    }

    // 計測結果を代入
    state.results = [... state.results, result]

    // 次の座標をランダムに更新
    state.translateX = dx / DIVISIONS * ~~(Math.random() * DIVISIONS)
    state.translateY = dy / DIVISIONS * ~~(Math.random() * DIVISIONS)
    
    // 次の色をランダムに更新
    state.h = ~~(Math.random() * 256)
    state.s = ~~(Math.random() * 101)
    state.l = ~~(Math.random() * 101)


    // 経過時間を追加
    state.previousTime += t

    // 指定された回数タップしたら実験を終了
    if(state.results.length >= LIMIT){
      this.$router.push('finished')
    }

  }
}


export const state = () =>
  ({
    translateX: 0,
    translateY: 0,
    h: 0,
    s: 0,
    l: 0,
    previousTime: 0,
    uniqueId: null,
    results: [],
  })