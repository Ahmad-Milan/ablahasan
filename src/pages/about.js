import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/shared/Seo"
import AboutHero from '../components/about/AboutHero'
import Awards from '../components/about/Awards'
import Education from '../components/about/Education'
import Background from '../components/about/Background'
import Courses from '../components/about/Courses'
import Papers from '../components/about/Papers'
import Talks from '../components/about/Talks'

function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <Background />
      <Education />
      <Awards />
      <Courses />
      <Papers />
      <Talks />
    </Layout>
  )
}

export const Head = ({ location }) => {
  return (
    <Seo location={location} title="Biography" description="A teacher, a researcher and a public speaker. PhD in Philosophy of Language from the University of Nebraska-Lincoln." />
  )
}

export default AboutPage