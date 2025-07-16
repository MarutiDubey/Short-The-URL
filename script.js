import express from 'express';
import mongoose, { get } from 'mongoose';
import { handleShortUrl } from './controllers/url.js';
import { getorignal } from './controllers/url.js';
const app = express();

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Set view engine (if not already set elsewhere)
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb+srv://manthandubey456:8Dputzo53amZA3qh@cluster0.kcedm4b.mongodb.net/', {
    dbName: 'p2'
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Render the homepage
app.get('/', (req, res) => {
    res.render('index.ejs', { shorturl: null });  
});

// Handle POST for shortening URL
app.post('/short', handleShortUrl);

app.get('/:shortcode', getorignal);

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
