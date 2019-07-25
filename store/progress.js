
export const state = () =>
  ({
    /**
     * progressCount
     *  0 実験に同意していない
     *  1 実験中
     *  2 実験終了
     *  3 実験結果送信済み
     */
    progressCount: 0,
  })


export const actions = {

  /**
   * pageType
   *  0 実験の直前
   *    progressCountが0なら1にする
   *    0以外なら0にして、実験結果をリセット
   * 
   * 
   */
  checkAndRedirectOrCount({commit, rootState}, pageType){
    
    const progressCount = rootState.progress.progressCount

    if(pageType === 0){
      console.log(progressCount)
    }
  }

}