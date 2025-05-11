const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const app = express();

dotenv.config();
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err);
    return;
  }
  console.log('Connected to MySQL');

  // Create table if not exists
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS watchlist_stocks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      symbol VARCHAR(10),
      price DECIMAL(10, 2),
      date DATE
    );
  `;
  db.query(createTableQuery, (err) => {
    if (err) throw err;
    console.log('watchlist_stocks table is ready');
  });
});

// API: Fetch and store stock data
app.post('/api/watchlist', async (req, res) => {
  const symbols = req.body.symbols;
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
  const baseUrl = 'https://www.alphavantage.co/query';

  try {
    const results = await Promise.all(symbols.map(async (symbol) => {
      const url = `${baseUrl}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      const quote = data['Global Quote'];

      const stock = {
        symbol: quote['01. symbol'],
        price: parseFloat(quote['05. price']),
        date: quote['07. latest trading day']
      };

      // Insert into DB
      const insertQuery = `
        INSERT INTO watchlist_stocks (symbol, price, date)
        VALUES (?, ?, ?)
      `;
      db.query(insertQuery, [stock.symbol, stock.price, stock.date], (err) => {
        if (err) console.error(`Insert error for ${stock.symbol}:`, err);
      });

      return stock;
    }));

    res.json(results);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
