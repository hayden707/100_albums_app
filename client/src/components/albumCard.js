import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'

export default function AlbumCard({ albums }) {
  const deleteAlbum = async (e) => {
    const res = await axios.delete(`${BASE_URL}/albums/${e.target.value}`)
    // return res.data
    window.location.reload()
  }
  return (
    <div className="albumCard">
      {albums.map((album) => (
        <div key={album._id} className="albumList">
          <img className="albumCover" src={album.image} alt="Album Cover" />
          <h4>Artist: {album.artist}</h4>
          <h4>Album: {album.title}</h4>
          <p className="cardTitles">Label: {album.label}</p>
          <p className="cardTitles">Genre: {album.genre}</p>
          <a id="albumButton" className="cardTitles" href={album.link}>
            Link to Album
          </a>
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
