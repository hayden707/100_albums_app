const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

// router.get('/api', (req, res) => res.send('This is api!'))

router.post('/api/albums', controllers.createAlbum)
router.get('/api/albums', controllers.getAllAlbums)
router.get('/api/albums/:id', controllers.getAlbumById)
router.put('/api/albums/:id', controllers.updateAlbum)
router.delete('/api/albums/:id', controllers.deleteAlbum)

router.post('/api/songs', controllers.createSong)
router.get('/api/songs', controllers.getAllSongs)
router.get('/api/songs/:id', controllers.getSongById)
router.put('/api/songs/:id', controllers.updateSong)
router.delete('/api/songs/:id', controllers.deleteSong)

router.post('/api/labels', controllers.createLabel)
router.get('/api/labels', controllers.getAllLabels)
router.get('/api/labels/:id', controllers.getLabelById)
router.put('/api/labels/:id', controllers.updateLabel)
router.delete('/api/labels/:id', controllers.deleteLabel)

module.exports = router
