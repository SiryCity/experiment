/**
 * 進捗によりページ遷移を操作
 */

export const state = () =>
  ({
    /**
     * redirectCount
     *  directly    外部からいきなり
     *  index       最初の画面
     *  consent     実験に同意していない
     *  operation   実験に同意し、操作を説明
     *  measurement 実験に同意し、実験が開始した
     *  finished    実験終了
     *  thanks      実験結果送信済み
     */
    pageType: 'directly',
  })


export const actions = {
  redirection({commit, rootState}, currentPageType){
    
    // 直前のページタイプを取得
    const previousPageType = rootState.redirect.pageType

    // 外部から来た場合は必ずindexに戻る

    if(previousPageType === 'directly'){
      commit('updatePageType', 'index')
      this.$router.push('/')
      return
    }

    // 内部からならページタイプを更新
    commit('updatePageType', currentPageType)



    // 最初の3つを開いたら
    if(
      currentPageType === 'index'
      || currentPageType === 'consent'
      || currentPageType === 'operation'
    ){

      // measurementからなら実験中なので戻す
      if(previousPageType === 'measurement'){
        this.$router.push('measurement')
        return 
      }

      // finishedからならまだ実験結果送信してないので戻す
      if(previousPageType === 'finished'){
        this.$router.push('finished')
        return 
      }

      // thanksからならおそらく実験2回目やりたい人の誤作動なのでトップに戻す
      if(previousPageType === 'thanks'){
        this.$router.push('/')
        return
      }

      // 他は特に何もしない
      commit('resetResults', rootState)
      return
    }



    // 実験中のページを開いたら
    if(currentPageType === 'measurement'){

      // operationか
      // measurementからなら順当な流れなので何もしない
      if(
        previousPageType === 'operation'
        || previousPageType === 'measurement'
      ){
        this.$router.push('measurement')
        return 
      }

      // finishedからならまだ実験結果送信してないので戻す
      if(previousPageType === 'finished'){
        this.$router.push('finished')
        return 
      }

      // 他はトップに戻す
      else {
        this.$router.push('/')
        return
      }
    }



    // 実験完了のページを開いたら
    if(currentPageType === 'finished'){
      
      // measurementか
      // finishedからなら順当な流れなので何もしない
      if(
        previousPageType === 'measurement'
        || previousPageType === 'finished'
      ){
        this.$router.push('finished')
        return 
      }

      // 他はトップに戻す
      else {
        this.$router.push('/')
        return
      }

    }
    
    // 送信完了のページを開いたら
    if(currentPageType === 'thanks'){
      
      // finishedか
      // thanksからなら順当な流れなので何もしない
      if(
        previousPageType === 'finished'
        || previousPageType === 'thanks'
      ){
        this.$router.push('thanks')
        return 
      }

      // 他はトップに戻す
      else {
        this.$router.push('/')
        return
      }
    }
  }
}

export const mutations = {
  updatePageType(state, pageType){
    state.pageType = pageType
  },

  resetResults(_, rootState){
    rootState.experiment.results = []
  }
}