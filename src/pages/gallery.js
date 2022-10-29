import React from 'react'
import Gallery from '../components/gallery/Gallery'
import GalleryHero from '../components/gallery/GalleryHero'
import Layout from "../components/layout"
import Seo from "../components/shared/seo"

function GalleryPage() {
  return (
    <Layout>
      <GalleryHero />
      <Gallery />
    </Layout>
  )
}

export const Head = ({ location }) => {
  return (
    <Seo location={location} title="Gallery" description="Photo gallery | Events, activities, lectures, classrooms, students, conferences, UNL Arabic Program, and more..." />
  )
}

export default GalleryPage