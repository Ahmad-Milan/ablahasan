import * as React from "react"
import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/Form'
import Layout from "../components/layout"
import Seo from "../components/shared/Seo"

const ContactPage = () => (
  <Layout>
    <ContactHero />
    <ContactForm />
  </Layout>
)

export const Head = ({ location }) => {
  return (
    <Seo location={location} title="Contact" description="Dr. Abla Hasan | Fill out the form bellow and send your question." />
  )
}

export default ContactPage
