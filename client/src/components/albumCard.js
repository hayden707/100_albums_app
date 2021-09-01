import React from 'react'

export default function AlbumCard({ albums }) {
  return (
    <div className="albumCard">
      {albums.map((album) => (
        <div key={album._id} className="albumList">
          <img className="albumCover" src={album.image} alt="Album Cover" />
          <h4>{album.artist}</h4>
          <h4>{album.title}</h4>
          <p>Label: {album.label}</p>
          <p>Genre: {album.genre}</p>
        </div>
      ))}
    </div>
  )
}
