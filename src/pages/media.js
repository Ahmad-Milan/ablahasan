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
      <Seo title="Media" description="Dr. Abla Hasan YouTube channel, articles, podcasts, and featured videos." />
      <MediaHero />
      <Playlist />
      <YouTubeChannel />
      <Articles />
      <Podcasts />
    </Layout>
  )
}

export default MediaPage
