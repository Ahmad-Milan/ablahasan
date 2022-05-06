import React from 'react'
import StructuredData from '../shared/StructuredData'

function AblaJsonLD() {
  return (
		<StructuredData>
      {
        {
          "@context": "http://www.schema.org",
          "@type": "Person",
          "@id": "https://ablahasan.com",
          "name": "Abla Hasan",
          "nationality": "Syrian",
          "birthPlace" : {
            "@type": "Place",
              "address": {
                "@type": "PostalAddress",
              "addressLocality": "Damascus",
              "addressCountry": "Syria"
            }
          },
          "alumniOf": [
            {
            "@type": "CollegeOrUniversity",
            "name": "University of Nebraska Lincoln",
            "sameAs": "https://modlang.unl.edu/dr-abla-hasan"
            }
          ],
          "gender": "Female",
          "Description": "Associate Prof of practice of Arabic language and culture",
          "jobTitle": "Associate Professor",
          "worksFor": [
            {
              "@type": "Organization",
              "name": "University of Nebraska Lincoln",
              "sameAs": [
                "https://www.facebook.com/UNLArabic/",
                "https://www.instagram.com/unlarabic/?hl=en",
              ]
            }
          ],
          "url": "https://ablahasan.com",
          "image": "https://ablahasan.com/static/118e45af1e4e6bf7883a0a58a9231376/abla-hasan-01.webp",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lincoln",
            "addressRegion": "NE",
            "addressCountry": "United State of America"
          },
          "sameAs": [
            "https://www.youtube.com/channel/UC5phB7T3bEO57WzffPKCBNw",
            "https://modlang.unl.edu/dr-abla-hasan",
            "https://www.instagram.com/unlarabic/?hl=en",
            "https://www.facebook.com/UNLArabic/"
            ]
          }
      }
		</StructuredData>
  );
}
export default AblaJsonLD;
