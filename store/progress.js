
export const state = () =>
  ({
    /**
     * progressCount
     *  directly    外部からいきなり
     *  index       最初の画面
     *  consent     実験に同意していない
     *  operation   実験に同意し、操作を説明
     *  experiment  実験に同意し、実験が開始した
     *  finished    実験終了
     *  thanks      実験結果送信済み
     */
    pageType: 'directly',
  })


export const actions = {
  checkAndRedirectOrNot({commit, rootState}, currentPageType){
    
    const previousPageType = rootState.progress.pageType

    console.dir(currentPageType)
return 
    // 初見なら必ず初期ページに戻る
    if(previousPageType === 'directly'){
      this.$router.push('/')
    }



    if(
      currentPageType === 'index'
      || currentPageType === 'consent'
      || currentPageType === 'operation'
    ){

    }
    
    
    if(currentPageType === 'experiment'){
      if(previousPageType === 'operation'){
        return
      }
      else if(previousPageType === 'operation'){

      }
    }
    
    if(currentPageType === 'finished'){
      
    }
    
    if(currentPageType === 'thanks'){
      
    }
  }
}

export const mutations = {
  updatePageType(state, pageType){
    
  }
}