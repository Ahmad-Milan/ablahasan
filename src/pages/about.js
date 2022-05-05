import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutHero from '../components/about/AboutHero'
import Awards from '../components/about/Awards'
import Education from '../components/about/Education'
import Background from '../components/about/Background'
import Courses from '../components/about/Courses'

function AboutPage() {
  return (
    <Layout>
      <Seo title="Biography" />
      <AboutHero />
      <Background />
      <Education />
      <Awards />
      <Courses />
    </Layout>
  )
}

export default AboutPage