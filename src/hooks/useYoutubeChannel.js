import { useState, useEffect } from 'react';

const YOUTUBE_SEARCH_API = 'https://www.googleapis.com/youtube/v3/search'
const CHANNEL_ID = 'UC5phB7T3bEO57WzffPKCBNw'
const MAX_RESULTS = 50

export function useYoutubeChannel() {
	const [videos, setVideos] = useState([])

  useEffect(() => {
		const getYoutubeVideos = async () => {
			try {
        const res = await fetch(`${YOUTUBE_SEARCH_API}?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=date&key=${process.env.GATSBY_YOUTUBE_API_KEY}`);
        const data = await res.json()
				setVideos(data.items)
			} catch (error) {
				console.log(error)
			}
		}
		// setStates()
		getYoutubeVideos()
  }, [])
  return videos
}
export default useYoutubeChannel;
