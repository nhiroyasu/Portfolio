export default class Portfolio {
  /**
   * タイトル
   * @type {String}
   */
  title

  /**
   * 詳細
   * @type {String}
   */
  detail

  /**
   * 公開日
   * @type {Date}
   */
  date

  /**
   * 言語
   * @type {Array<String>}
   */
  languages

  /**
   * 動作環境
   * @type {Array<String>}
   */
  platforms

  /**
   * アプリアイコンリンク
   * @Nullable
   * @type {String}
   */
  imgLink

  /**
   * いらない
   */
  // eventLink

  /**
   * GitHubリンク
   * @Nullable
   * @type {String}
   */
  githubLink

  /**
   * GooglePlayリンク
   * @Nullable
   * @type {String}
   */
  googlePlayLink

  /**
   * Webアプリリンク
   * @Nullable
   * @type {String}
   */
  webAppLink

  constructor(
    title,
    detail,
    date,
    languages,
    platforms,
    imgLink,
    githubLink,
    googlePlayLink,
    webAppLink
  ) {
    this.title = title
    this.detail = detail
    this.date = date
    this.languages = languages
    this.platforms = platforms
    this.imgLink = imgLink
    this.githubLink = githubLink
    this.googlePlayLink = googlePlayLink
    this.webAppLink = webAppLink
  }
}
