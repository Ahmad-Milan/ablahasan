import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ABLA_HASAN from '../../images/personal/abla-hasan-02.jpg'

function Seo({ origin, location, title, description, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  return (
    <>
      <title>{title} | {defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={`${origin}${location.pathname}`} />
      <meta name="msapplication-TileColor" content="#F2FAFD" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={`${origin}${location.pathname}`} />
      <meta property="og:image" content={ABLA_HASAN} />
      <meta property="og:description" content={metaDescription} />
      <meta name="twitter:image" content={ABLA_HASAN} />
      <meta name="twitter:card" content="summary_large_image" />
      {children}
    </>
  )
}

export default Seo