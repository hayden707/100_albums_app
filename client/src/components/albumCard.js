import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'

export default function AlbumCard({ albums }) {
  const deleteAlbum = async (e) => {
    const res = await axios.delete(`${BASE_URL}/albums/${e.target.value}`)
    return res.data
  }
  return (
    <div className="albumCard">
      {albums.map((album) => (
        <div key={album._id} className="albumList">
          <img className="albumCover" src={album.image} alt="Album Cover" />
          <h4>{album.artist}</h4>
          <h4>{album.title}</h4>
          <p>Label: {album.label}</p>
          <p>Genre: {album.genre}</p>
          <a href={album.link}>page</a>
          <button
            className="deleteButton"
            onClick={deleteAlbum}
            value={album._id}
          >
            remove album
          </button>
        </div>
      ))}
    </div>
  )
}
