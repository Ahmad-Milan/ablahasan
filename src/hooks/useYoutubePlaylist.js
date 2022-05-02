import { useState, useEffect } from 'react';

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems'
const PLAYLIST_ID = 'PLszC_yqXETVjs7MhaBluh8hfSOKs_NSK9'

export function useYoutubePlaylist() {
	const [playlistItems, setPlaylistItems] = useState([])

  useEffect(() => {
		const getYoutubeList = async () => {
			try {
        const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&key=${process.env.GATSBY_YOUTUBE_API_KEY}`);
        const data = await res.json()
				setPlaylistItems(data.items)
			} catch (error) {
				console.log(error)
			}
		}
		// setStates()
		getYoutubeList()
  }, [])
  return playlistItems
}
export default useYoutubePlaylist;
