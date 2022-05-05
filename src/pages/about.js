import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutHero from '../components/about/AboutHero'
import Awards from '../components/about/Awards'
import Education from '../components/about/Education'
import ArabicProgram from '../components/about/ArabicProgram'
import Background from '../components/about/Background'

function AboutPage() {
  return (
    <Layout>
      <Seo title="Biography" />
      <AboutHero />
      <Background />
      <Education />
      <Awards />
      <ArabicProgram />
    </Layout>
  )
}

export default AboutPage