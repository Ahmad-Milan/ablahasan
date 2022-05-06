import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/shared/seo"
import BooksHero from '../components/books/BooksHero'
import Books from '../components/books/Books'

function BooksPage() {
  return (
    <Layout>
      <Seo title="Books" />
      <BooksHero />
      <Books />
    </Layout>
  )
}

export default BooksPage