export const mutations = {

  tapped(state, e){

    // 何回タップしたらゲームが終了か
    const LIMIT = 30

    // 座標を何分割するか
    const DIVISIONS = 20

    // デバイスの大きさ
    const dx = window.outerWidth
    const dy = window.outerHeight

    // 画面に表示されている位置 p = position
    const px = state.positionXpixel
    const py = state.positionYpixel

    // 被験者がタップした位置 t = tapped
    const tx = e.pageXpixel
    const ty = e.pageYpixel

    state.previousTime = ~~(state.previousTime * 1000) / 1000
    // 時間
    const t = ~~(((new Date().getTime() + '').slice(5)|0) - state.previousTime * 1000) / 1000

    // 結果
    const result = {
      dx,
      dy,
      px,
      py,
      tx,
      ty,
      t
    }

    // 次の座標をランダムに更新
    state.positionXpixel = dx / DIVISIONS * ~~(Math.random() * DIVISIONS)
    state.positionYpixel = dy / DIVISIONS * ~~(Math.random() * DIVISIONS)
    
    state.results = [... state.results, result]

    state.previousTime += t

    if(state.results.length >= LIMIT){
      this.$router.push('finished')
    }
  }
}


export const state = () =>
  ({
    positionXpixel: 0,
    positionYpixel: 0,
    previousTime: 0,
    results: [],
  })