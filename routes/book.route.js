const express = require('express');
const { getBooks, getRecommendationsByEmotion } = require('../controllers/book.controller');

const router = express.Router();

// Iteración 1
router.get('/books', getBooks);

// Iteración 2
// 2.1. añadir la ruta que ejecute el controlador
router.get('/books/recommendations/:emotion', getRecommendationsByEmotion);


module.exports = router;