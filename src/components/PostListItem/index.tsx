export { default } from './container'

export interface PostLinkProps {
  node: {
    id: string
    excerpt: string
    frontmatter: {
      path: string
      title: string
      date: string
      featuredImage: any
    }
  }
}
