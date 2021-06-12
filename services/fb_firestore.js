// firestore reference (https://firebase.google.com/docs/reference/js/firebase.firestore.html?authuser=0)
// firestore quickstart (https://firebase.google.com/docs/firestore/quickstart?authuser=0)

import * as firebase from 'firebase/app'
import 'firebase/firestore'
import PortfolioBuilder from '~/scripts/types/builder/PortfolioBuilder'

/**
 * ポートフォリオデータを取得
 * @return {Promise<Array<Portfolio>>}
 */
export async function loadPortfoliosData() {
  const snapshot = await firebase
    .firestore()
    .collection('portfolios')
    .orderBy('date', 'desc')
    .get()
    .catch((_) => {
      // eslint-disable-next-line no-console
      console.error('response error of firestore api')
      return []
    })

  /**
   * @type {Array<Portfolio>}
   */
  const docsData = []
  snapshot.forEach((doc) => {
    docsData.push(PortfolioBuilder.build(doc))
  })
  return docsData
}

/**
 * 指定したIDのポートフォリオデータを取得
 * @param {String} id
 * @return {Promise<Portfolio>}
 */
export async function fetchPortfolio(id) {
  const snapshot = await firebase
    .firestore()
    .collection('portfolios')
    .doc(id)
    .get()
    .catch((_) => {
      // eslint-disable-next-line no-console
      console.error('response error of firestore api')
      return null
    })

  return snapshot !== null ? PortfolioBuilder.build(snapshot) : null
}
