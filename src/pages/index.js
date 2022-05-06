import * as React from "react"
import HomeHero from "../components/home/HomeHero"
import Layout from "../components/layout"
import Seo from "../components/shared/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeHero />
  </Layout>
)

export default IndexPage
