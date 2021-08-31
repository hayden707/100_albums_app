const Album = require('../models/albums')

const createAlbum = async (req, res) => {
  try {
    const album = await new Album(req.body)
    await album.save()
    return res.status(201).json({
      album
    })
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

module.exports = {
  createAlbum,
  getAllAlbums,
  updateAlbum,
  deleteAlbum,
  getAlbumById,
  createSong
}
