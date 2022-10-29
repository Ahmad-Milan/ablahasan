import * as React from "react"
import HomeHero from "../components/home/HomeHero"
import Layout from "../components/layout"
import Seo from "../components/shared/Seo"
import AblaJsonLD from '../components/home/AblaJsonLD'

const IndexPage = () => (
  <Layout>
    <HomeHero />
    <AblaJsonLD />
  </Layout>
)

export const Head = ({ location }) => {
  return (
    <Seo location={location} title="Home" description="Dr. Abla Hasan | Associate Prof of practice of Arabic language and culture | Nebraska University" />
  )
}

export default IndexPage
