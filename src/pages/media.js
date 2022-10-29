import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/shared/seo"
import MediaHero from "../components/media/MediaHero"
import YouTubeChannel from "../components/media/YouTubeChannel"
import Articles from "../components/media/Articles"
import Podcasts from "../components/media/Podcasts"
import Playlist from "../components/media/Playlist"


const MediaPage = () => {
  return (
    <Layout>
      <MediaHero />
      <Playlist />
      <YouTubeChannel />
      <Articles />
      <Podcasts />
    </Layout>
  )
}

export const Head = ({ location }) => {
  return (
    <Seo location={location} title="Media" description="Dr. Abla Hasan YouTube channel, articles, podcasts, and featured videos." />
  )
}

export default MediaPage
