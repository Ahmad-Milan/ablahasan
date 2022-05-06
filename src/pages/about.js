import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/shared/seo"
import AboutHero from '../components/about/AboutHero'
import Awards from '../components/about/Awards'
import Education from '../components/about/Education'
import Background from '../components/about/Background'
import Courses from '../components/about/Courses'
import Papers from '../components/about/Papers'

function AboutPage() {
  return (
    <Layout>
      <Seo title="Biography" />
      <AboutHero />
      <Background />
      <Education />
      <Awards />
      <Courses />
      <Papers />
    </Layout>
  )
}

export default AboutPage