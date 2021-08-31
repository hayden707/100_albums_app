const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Album = new Schema(
  {
    artist: { type: String, required: true },
    title: { type: String, required: true },
    label: { type: String, required: true },
    genre: { type: String, required: true },
    image: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('albums', Album)
