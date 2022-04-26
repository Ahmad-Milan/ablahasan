import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const MediaPage = () => {
  return (
    <Layout>
      <Seo title="Media" />
      <h1>Media page</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default MediaPage
