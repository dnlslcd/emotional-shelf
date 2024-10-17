const express = require('express');
const app = express();

const dotenv = require('dotenv');

const connectDB = require('./config/db');

dotenv.config();

const bookRoutes = require('./routes/book.route');
app.use('/api', bookRoutes);

const PORT = process.env.PORT || 3006;

app.listen(PORT, async () => {
    // Nos conectamos a la base de datos de MongoDB
    await connectDB();
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})