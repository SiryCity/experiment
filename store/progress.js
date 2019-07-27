
export const state = () =>
  ({
    /**
     * progressCount
     *  directly    外部からいきなり
     *  index       最初の画面
     *  consent     実験に同意していない
     *  operation   実験に同意し、操作を説明
     *  measurement  実験に同意し、実験が開始した
     *  finished    実験終了
     *  thanks      実験結果送信済み
     */
    pageType: 'directly',
  })


export const actions = {
  checkAndRedirectOrNot({commit, rootState}, currentPageType){
    
    // 直前のページタイプを取得
    const previousPageType = rootState.progress.pageType

    // 外部から来た場合は必ずindexに戻る
    if(previousPageType === 'directly'){
      this.$router.push('/')
      return
    }

    // 内部からならページタイプを更新
    commit('updatePageType', currentPageType)

    // 最初の3つに飛んだら
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
      return
    }
    
    // 実験中のページに飛んだら
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
    
    // 実験完了のページに飛んだら
    if(currentPageType === 'finished'){
      
    }
    
    if(currentPageType === 'thanks'){
      
    }
  }
}

export const mutations = {
  updatePageType(state, pageType){
    state.pageType = pageType
  },

  resetResults(_, rootState){
    console.dir(rootState.experiment.results)
  }
}