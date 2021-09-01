const Album = require('../models/albums')
const Song = require('../models/songs')

const createAlbum = async (req, res) => {
  try {
    const album = await new Album(req.body)
    await album.save()
    return res.status(201).json({ album })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find()
    return res.status(200).json({ albums })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAlbumById = async (req, res) => {
  try {
    const { id } = req.params
    const album = await Album.findById(id)
    if (album) {
      return res.status(200).json({ album })
    }
    return res.status(404).send('Album with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateAlbum = async (req, res) => {
  try {
    const { id } = req.params
    await Album.findByIdAndUpdate(id, req.body, { new: true }, (err, album) => {
      if (err) {
        res.status(500).send(err)
      }
      if (!album) {
        res.status(500).send('Album not found!')
      }
      return res.status(200).json(album)
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteAlbum = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Album.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Album deleted')
    }
    throw new Error('Album not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// Song Controllers

const createSong = async (req, res) => {
  try {
    const song = await new Song(req.body)
    await song.save()
    return res.status(201).json({
      song
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find()
    return res.status(200).json({ songs })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getSongById = async (req, res) => {
  try {
    const { id } = req.params
    const song = await Song.findById(id)
    if (song) {
      return res.status(200).json({ song })
    }
    return res.status(404).send('Song with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateSong = async (req, res) => {
  try {
    const { id } = req.params
    await Song.findByIdAndUpdate(id, req.body, { new: true }, (err, song) => {
      if (err) {
        res.status(500).send(err)
      }
      if (!song) {
        res.status(500).send('Song not found!')
      }
      return res.status(200).json(song)
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteSong = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Song.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Song deleted')
    }
    throw new Error('Song not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createAlbum,
  getAllAlbums,
  updateAlbum,
  deleteAlbum,
  getAlbumById,
  createSong,
  getAllSongs,
  getSongById,
  updateSong,
  deleteSong
}
