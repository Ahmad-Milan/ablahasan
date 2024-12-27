import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/shared/seo"
import BlogArchive from "../../components/blog/BlogArchive"
import { posts } from "../../components/blog/posts"

const BlogPage = () => {
  return (
    <Layout>
      <BlogArchive posts={posts} />
    </Layout>
  )
}

export default BlogPage

export const Head = ({ location }) => {
  return (
    <Seo
      location={location}
      title="Blog"
      description="Dr. Abla Hasan Blog Archive Page."
    />
  )
}
