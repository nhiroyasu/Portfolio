import Portfolio from '@/scripts/types/commons/Portfolio'

export default class PortfolioBuilder {
  /**
   * Firestoreから取得したデータオブジェクト
   * @param {DocumentSnapshot} documentSnapshot
   * @return {Portfolio}
   */
  static build(documentSnapshot) {
    const firestoreData = documentSnapshot.data()
    const date = firestoreData.date.toDate()
    const imgLink = firestoreData.img_link ? firestoreData.img_link : null
    const githubLink = firestoreData.github ? firestoreData.github : null
    const googlePlayLink = firestoreData.google_play_link
      ? firestoreData.google_play_link
      : null
    const webAppLink = firestoreData.web_app_link
      ? firestoreData.web_app_link
      : null

    return new Portfolio(
      documentSnapshot.id,
      firestoreData.title,
      firestoreData.detail,
      date,
      firestoreData.language,
      firestoreData.platform,
      imgLink,
      githubLink,
      googlePlayLink,
      webAppLink
    )
  }
}
