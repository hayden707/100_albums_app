import axios from 'axios'
// import { ConnectionStates } from 'mongoose'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../global'

export default function Home() {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    async function getAlbums() {
      const res = await axios.get(`${BASE_URL}/albums`)
      setAlbums(res.data)
    }
    getAlbums()
  }, [])
  console.log(albums, 'albums')

  return (
    <div>
      <h1>Home Page</h1>
      <h3>Friday, September 3</h3>
      <div className="albums"></div>
    </div>
  )
}
