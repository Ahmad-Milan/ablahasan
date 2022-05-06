import React from 'react'
import Gallery from '../components/gallery/Gallery'
import GalleryHero from '../components/gallery/GalleryHero'
import Layout from "../components/layout"
import Seo from "../components/shared/seo"

function GalleryPage() {
  return (
    <Layout>
      <Seo title="Gallery" description="Photo gallery | Events, activities, lectures, classrooms, students, conferences, UNL Arabic Program, and more..." />
      <GalleryHero />
      <Gallery />
    </Layout>
  )
}

export default GalleryPage