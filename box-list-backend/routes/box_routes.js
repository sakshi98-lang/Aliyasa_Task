const express = require('express')
const router = express.Router();
const box_controller = require('../controllers/box_controller')

router.post('/insert_square',box_controller.insertSquare)

router.get('/get_all_squares',box_controller.getAllSquares)

router.get('/get_single_square/:id',box_controller.getSingleSquare)

router.get('/delete_square/:id',box_controller.deleteSquare)




module.exports = router;