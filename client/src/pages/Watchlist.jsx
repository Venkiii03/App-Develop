// src/pages/Watchlist.jsx
import React, { useState } from 'react';
import RecommendationCard from '../components/RecommendationCard';

const Watchlist = () => {
  const [stocks, setStocks] = useState([
    { name: "Apple", price: 145.09, symbol: "AAPL", predictedPrice: 140.00 },
    { name: "Tesla", price: 720.50, symbol: "TSLA", predictedPrice: 700.00 },
    { name: "Amazon", price: 3350.25, symbol: "AMZN", predictedPrice: 3400.00 },
    { name: "Google", price: 2750.30, symbol: "GOOG", predictedPrice: 2800.00 },
    { name: "Microsoft", price: 299.12, symbol: "MSFT", predictedPrice: 310.00 },
    { name: "Facebook", price: 355.15, symbol: "META", predictedPrice: 360.00 },
    { name: "Netflix", price: 510.45, symbol: "NFLX", predictedPrice: 505.00 },
    { name: "NVIDIA", price: 765.88, symbol: "NVDA", predictedPrice: 770.00 },
    { name: "AMD", price: 120.65, symbol: "AMD", predictedPrice: 125.00 },
    { name: "Intel", price: 49.80, symbol: "INTC", predictedPrice: 50.00 },
    { name: "Visa", price: 230.50, symbol: "V", predictedPrice: 240.00 },
    { name: "Coca Cola", price: 54.25, symbol: "KO", predictedPrice: 55.00 },
    { name: "Pepsi", price: 153.80, symbol: "PEP", predictedPrice: 160.00 },
    { name: "Nike", price: 142.45, symbol: "NKE", predictedPrice: 145.00 },
    { name: "Walmart", price: 136.50, symbol: "WMT", predictedPrice: 1140.00 },
    { name: "ExxonMobil", price: 63.25, symbol: "XOM", predictedPrice: 65.00 },
    { name: "Chevron", price: 164.00, symbol: "CVX", predictedPrice: 162.00 },
    { name: "Johnson & Johnson", price: 162.25, symbol: "JNJ", predictedPrice: 165.00 },
    { name: "Procter & Gamble", price: 144.75, symbol: "PG", predictedPrice: 1520.00 },
    { name: "Pfizer", price: 42.50, symbol: "PFE", predictedPrice: 1143.00 },
    { name: "AbbVie", price: 138.10, symbol: "ABBV", predictedPrice: 1240.00 },
    // Add more stocks here (for simplicity, only a few stocks are added)
  ]);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">Stock Watchlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stocks.map((stock, index) => (
          <RecommendationCard key={index} stock={stock} />
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
