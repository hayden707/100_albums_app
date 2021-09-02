const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Label = new Schema(
  {
    album: [{ type: Schema.Types.ObjectId, ref: 'albums' }],
    label: { type: String, required: true },
    location: { type: String, required: true },
    logo: { type: String, required: false },
    link: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('labels', Label)
