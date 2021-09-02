const { model } = require('mongoose')
const AlbumSchema = require('./albums')
const SongSchema = require('./songs')
const LabelSchema = require('./labels')

const Album = model('albums', AlbumSchema)
const Song = model('songs', SongSchema)
const Label = model('labels', LabelSchema)

module.exports = {
  Album,
  Song,
  Label
}
