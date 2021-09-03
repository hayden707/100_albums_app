const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/albums', controllers.createAlbum)
router.get('/albums', controllers.getAllAlbums)
router.get('/albums/:id', controllers.getAlbumById)
router.put('/albums/:id', controllers.updateAlbum)
router.delete('/albums/:id', controllers.deleteAlbum)

router.post('/api/songs', controllers.createSong)
router.get('/api/songs', controllers.getAllSongs)
router.get('/api/songs/:id', controllers.getSongById)
router.put('/api/songs/:id', controllers.updateSong)
router.delete('/api/songs/:id', controllers.deleteSong)

router.post('/labels', controllers.createLabel)
router.get('/labels', controllers.getAllLabels)
router.get('/labels/:id', controllers.getLabelById)
router.put('/labels/:id', controllers.updateLabel)
router.delete('/labels/:id', controllers.deleteLabel)

module.exports = router
