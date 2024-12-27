import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/shared/seo"
import WadribuhonBlog from "../../components/blog/Wadribuhon"
import { posts } from "../../components/blog/posts"
import "./blog.css"

const BlogPostOne = () => {
  return (
    <Layout>
      <WadribuhonBlog post={posts[0]} />
    </Layout>
  )
}

export default BlogPostOne

export const Head = ({ location }) => {
  return (
    <Seo
      location={location}
      title="Blog | شبهة الضرب في القرآن"
      description="Dr. Abla Hasan Blog Archive Page."
    />
  )
}
