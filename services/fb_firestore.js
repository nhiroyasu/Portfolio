// firestore reference (https://firebase.google.com/docs/reference/js/firebase.firestore.html?authuser=0)
// firestore quickstart (https://firebase.google.com/docs/firestore/quickstart?authuser=0)

import * as firebase from 'firebase/app'
import 'firebase/firestore'

export async function loadPortfoliosData() {
  const snapshot = await firebase
    .firestore()
    .collection('portfolios')
    .orderBy('date', 'desc')
    .get()
    .catch((err) => {
      console.error('response error of firestore api')
      return []
    })
  const docsData = []
  snapshot.forEach((doc) => {
    docsData.push(doc.data())
  })
  return docsData
}
