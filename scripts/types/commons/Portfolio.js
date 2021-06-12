import { formatDate } from '@/scripts/functions/data-formatting'

export default class Portfolio {
  constructor(
    id,
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
    this.id = id
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

  get dateString() {
    const format = 'yyyy年MM月dd日'
    return formatDate(this.date, format)
  }
}
