import * as React from "react"
import HomeHero from "../components/home/HomeHero"
import Layout from "../components/layout"
import Seo from "../components/shared/seo"
import AblaJsonLD from '../components/home/AblaJsonLD'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="Dr. Abla Hasan | Associate Prof of practice of Arabic language and culture | Nebraska University" />
    <HomeHero />
    <AblaJsonLD />
  </Layout>
)

export default IndexPage
