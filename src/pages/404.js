import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/shared/Seo"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const Head = ({ location }) => {
  return (
    <Seo location={location} title="404: Page Not found" />
  )
}

export default NotFoundPage
