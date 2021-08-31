const { model } = require('mongoose')
const AlbumSchema = require('./albums')
const SongSchema = require('./songs')

const Album = model('albums', AlbumSchema)
const Song = model('songs', SongSchema)

module.exports = {
  Album,
  Song
}
