import React from 'react'
import Helmet from 'react-helmet'

function StructuredData({ children }) {
	return (
		<Helmet>
			<script type="application/ld+json">{JSON.stringify(children)}</script>
		</Helmet>
	)
}

export default StructuredData