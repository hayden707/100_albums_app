const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Labels = new Schema(
  {
    album: [{ type: Schema.Types.ObjectId, ref: 'albums' }],
    label: { type: String, required: true },
    location: { type: String, required: true },
    logo: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('songs', Song)
