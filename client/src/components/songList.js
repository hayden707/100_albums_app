import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../global'

export default function SongList() {
  const [songs, setSongs] = useState([])
  // const [song, setSong] = useState([])

  useEffect(() => {
    async function getSongs() {
      const res = await axios.get(`${BASE_URL}/songs`)
      setSongs(res.data.songs)
    }
    getSongs()
  }, [])
  console.log(songs)

  // useEffect(() => {
  //   async function getSongById() {
  //     const res = await axios.get(`${BASE_URL}/songs/${songs._id}`)
  //     setSong(res.data.songs)
  //   }
  //   getSongById()
  // })

  return (
    <div className="songPage">
      <div classname="songList">
        {songs.map((song) => (
          <div key={song._id} className="albumList">
            <p>{song.song}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
