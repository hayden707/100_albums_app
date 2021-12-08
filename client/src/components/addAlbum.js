import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'

export default function AddAlbum() {
  const [newAlbum, setNewAlbum] = useState({
    artist: '',
    title: '',
    label: '',
    genre: '',
    image: '',
    link: ''
  })

  async function addAlbum(formdata) {
    try {
      const res = await axios.post(`${BASE_URL}/albums`, {
        artist: newAlbum.artist,
        title: newAlbum.title,
        label: newAlbum.label,
        genre: newAlbum.genre,
        image: newAlbum.image,
        link: newAlbum.link
      })
      console.log(formdata)
      console.log(res)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setNewAlbum({ ...newAlbum, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newAlbum)
    addAlbum()
  }

  return (
    <div>
      <h3>add an album</h3>
      <form className="searchform" onSubmit={handleSubmit}>
        <label className="label">artist</label>
        <input
          className="input"
          type="text"
          name="artist"
          required
          onChange={handleChange}
        ></input>
        <label className="label">title</label>
        <input
          className="input"
          type="text" 
          name="title"
          required
          onChange={handleChange}
        ></input>
        <label className="label">label</label>
        <input
          className="input"
          type="text"
          name="label"
          required
          onChange={handleChange}
        ></input>
        <label className="label">genre</label>
        <input
          className="input"
          type="text"
          name="genre"
          required
          onChange={handleChange}
        ></input>
        <label className="label">image link</label>
        <input
          className="input"
          type="text"
          name="image"
          required
          onChange={handleChange}
        ></input>
        <label className="label">page link</label>
        <input
          className="input"
          type="text"
          name="link"
          required
          onChange={handleChange}
        ></input>
        <button className="addAlbumButton" type="submit">
          add album
        </button>
      </form>
    </div>
  )
}
