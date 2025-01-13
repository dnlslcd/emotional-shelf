const Book = require('../models/book.model');

// Iteración 1
exports.getBooks = async (req, res) => {
    const books = await Book.find().limit(10);
    return res.status(200).json({
        message: 'Books retrieved successfully',
        results: books
    });
};

// Iteración 2
exports.getRecommendationsByEmotion = async (req, res) => {
    // 2.1. recuperar el valor de la ruta dinámica
    const { emotion } = req.params;

    // 2.1.1. capitalizar las peticiones 
    
    // 2.1.2. implementar las validaciones del ejercicio
    const allowedEmotions = ['Inspiration', 'Curiosity', 'Escapism', 'Nostalgia', 'Happiness', 'Sadness'];

    // Si esta emoción NO está en el array de las permitias: error
    if (!allowedEmotions.includes(emotion)) {
        return res.status(400).json({
            message: `Emotion ${emotion} is not a valid value`
        });
    }

    // 2.2. usar el :emotion para hacer una búsqueda en el modelo de los 20 primeros libros que incluyan dicha emotion
    const booksByEmotion = await Book.find({emotions: {$in: [emotion]}}).limit(20);

    // 2.3. responder al cliente con un JSON similar al controlador getBooks
    res.status(200).json({
        message: 'Books retrieved successfully for emotion ' + emotion,
        results: booksByEmotion
    });

};