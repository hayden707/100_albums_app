import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'
import cheerio from 'cheerio'
import './newAddAlbum.css'

export default function NewAddAlbum() {
  // const [newAlbum, setNewAlbum] = useState({
  //   artist: '',
  //   title: '',
  //   label: '',
  //   genre: '',
  //   image: '',
  //   link: ''
  // })

  const [url, setUrl] = useState('')
  const [notSubmitted, setSubmitted] = useState(true)
  const [image, setImage] = useState('')
  const [albumTitle, setAlbumTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [genre, setGenre] = useState([])
  const [label, setLabel] = useState('')
  // const [player, setPlayer] = useState('')

  async function addAlbum(newAlbum) {
    try {
      const res = await axios.post(`${BASE_URL}/albums`, {
        artist: artist,
        title: albumTitle,
        label: label,
        genre: genre[0],
        image: image,
        link: url
      })
      console.log(newAlbum)
      console.log(res)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    // setNewAlbum({ ...newAlbum, [e.target.name]: e.target.value })
    setUrl(e.target.value)
  }

  const scrape = (site) => {
    axios(`https://thingproxy.freeboard.io/fetch/` + site).then((res) => {
      const html = res.data
      const $ = cheerio.load(html)
      const genreList = []
      $('#tralbumArt', html).each(function () {
        const image = $(this).find('img').attr('src')
        setImage(image)
      })
      $('#name-section', html).each(function () {
        const title = $(this).find('.trackTitle').text()
        setAlbumTitle(title)
      })
      $('#name-section', html).each(function () {
        const artist = $(this).find('a').text()
        setArtist(artist)
      })
      $('.tag', html).each(function () {
        const genres = $(this).text()
        if (genres.length > 1) {
          genreList.push(genres)
        }
        setGenre(genreList)
      })
      // $('.player-container', html).each(function () {
      //   const frame = $(this).find('iframe').attr('src')
      //   setPlayer(frame)
      // })
      $('#band-name-location', html).each(function () {
        const label = $(this).find('.title').text()
        setLabel(label)
        console.log(label, label)
      })
    })
    // .then(
    //   setNewAlbum({
    //     artist: artist,
    //     title: albumTitle,
    //     label: label,
    //     genre: genre[0],
    //     image: image,
    //     link: url
    //   })
    // )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    scrape(url)
    setSubmitted((notSubmitted) => !notSubmitted)
    console.log(genre[0])
  }

  return (
    <div>
      <h3 className="heading">Add an Album</h3>
      {/* {notSubmitted ? (
        <img
          className="plant-img"
          alt="seedlings"
          src="https://i.imgur.com/i8vFVdE.jpg"
        />
      ) : (
        <div></div>
      )} */}
      <div className="album-form">
        <form className="searchform" onSubmit={handleSubmit}>
          <label className="label">Copy and Paste Album URL Here</label>
          <input
            className="input"
            type="text"
            name="artist"
            required
            onChange={handleChange}
          ></input>
          <div className="submit-button">
            <button className="addAlbumButton" type="submit">
              find album
            </button>
          </div>
        </form>
      </div>
      {notSubmitted ? (
        <div></div>
      ) : (
        <div className="album-info">
          <img className="album-img" src={image} alt={albumTitle} />
          <p>{albumTitle}</p>
          <p>By: {artist}</p>
          {/* <iframe src="https://bandcamp.com/EmbeddedPlayer/album=1363031993/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" /> */}
          {/* <div key={genre.indexOf()} className="genres">
        {genre.map((genre) => (
          <p>{genre}</p>
        ))}
      </div> */}

          <button className="saveAlbum" type="submit" onClick={addAlbum}>
            Add Album
          </button>
        </div>
      )}
    </div>
  )
}
