const Book = require('../models/book.model');

const getBooks = async (req, res) => {
    const books = await Book.find().limit(10);
    return res.status(200).json({
        message: 'Books retrieved successfully',
        results: books
    });
};

module.exports = {
    getBooks
};