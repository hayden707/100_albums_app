const db = require('../db')
const Album = require('../models/albums')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const albums = [
    {
      artist: 'Ash Brooks',
      title: 'Temple of the Roses',
      label: 'Flower Room',
      genre: 'psych',
      image: 'https://f4.bcbits.com/img/a2941146400_10.jpg'
    },
    {
      artist: 'Ryley Walker And Kikagaku Moyo',
      title: 'Deep Fried Grandeur',
      label: 'Husyky Pants Records',
      genre: 'acid rock',
      image: 'https://f4.bcbits.com/img/a0234631329_10.jpg'
    },
    {
      artist: 'Matt LaJoie',
      title: 'Creek Baptism',
      label: 'Flower Room',
      genre: 'Instrumental',
      image: 'https://f4.bcbits.com/img/a2562017049_10.jpg'
    }
  ]

  await Album.insertMany(albums)
  console.log('Created Some albums!')
}
const run = async () => {
  await main()
  db.close()
}

run()
