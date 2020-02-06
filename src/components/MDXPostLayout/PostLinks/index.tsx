export { default } from './component'

export interface PostLinkInterface {
  frontmatter: {
    title: string
  }
  fields: {
    slug: string
  }
}
