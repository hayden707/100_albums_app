const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Song = new Schema(
  {
    album: [{ type: Schema.Types.ObjectId, ref: 'albums' }],
    song: { type: String, required: true },
    link: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('songs', Song)
