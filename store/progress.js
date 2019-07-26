
export const state = () =>
  ({
    /**
     * progressCount
     *  directly    外部からいきなり
     *  operation   実験に同意していない
     *  experiment  実験に同意し、実験が開始した
     *  finished    実験終了
     *  thanks      実験結果送信済み
     */
    pageType: 'directly',
  })


export const actions = {
  checkAndRedirectOrNot({commit, rootState}, currentPageType){
    
    const previousPageType = rootState.progress.pageType
    const results = rootState.experiment.results

  }
}