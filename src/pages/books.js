import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/shared/seo"
import BooksHero from '../components/books/BooksHero'
import Books from '../components/books/Books'

function BooksPage() {
  return (
    <Layout>
      <Seo title="Books" description="Abla Hasan is an author of 'On Pain and Suffering, A Qur’anic Perspective', and 'Decoding the Egalitarianism of the Qur'an'." />
      <BooksHero />
      <Books />
    </Layout>
  )
}

export default BooksPage