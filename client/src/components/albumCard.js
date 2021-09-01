import React from 'react'

export default function albumCard(props) {
  return (
    <div>
      {props.albums.map((album) => (
        <div key={album.id} className="albumCard">
          <img src={album.image} />
          <h2>{album.artist}</h2>
          <h2>{album.title}</h2>
          <p>{album.label}</p>
          <p>{album.genre}</p>
        </div>
      ))}
    </div>
  )
}
