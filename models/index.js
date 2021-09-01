const { model } = require('mongoose')
const AlbumSchema = require('./albums')
const SongSchema = require('./songs')
const LabelsSchema = require('./labels')

const Album = model('albums', AlbumSchema)
const Song = model('songs', SongSchema)
const Labels = model('labels', LabelsSchema)

module.exports = {
  Album,
  Song,
  Labels
}
