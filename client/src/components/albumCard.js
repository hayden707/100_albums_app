import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'

export default function AlbumCard({ albums }) {
  const deleteAlbum = async (e) => {
    const res = await axios.delete(`${BASE_URL}/albums/${e.target.value}`)
    window.location.reload()
    return res.data
  }
  return (
    <div className="albumCard">
      {albums.map((album) => (
        <div key={album._id} className="albumList">
          <a href={album.link}>
            <div className="alb-grid">
              <div className="alb-img-div">
                <img
                  className="albumCover"
                  src={album.image}
                  alt="Album Cover"
                />
              </div>
              <div className="alb-text-div">
                <h4>{album.artist}</h4>
                <h4 className="alb-title">{album.title}</h4>
                {/* <p className="cardTitles">Label: {album.label}</p> */}
                <p className="cardTitles">Genre: {album.genre}</p>
                {/* <a id="albumButton" className="cardTitles" href={album.link}>
                  Link to Album
                </a> */}
                {/* <button
                className="deleteButton"
                onClick={deleteAlbum}
                value={album._id}
                >
                remove album
              </button> */}
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}
