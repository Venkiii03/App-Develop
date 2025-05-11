// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import RecommendationCard from "../components/RecommendationCard";

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);

  // Example stock data to render
  useEffect(() => {
    // Replace this with your actual API call to fetch stock data
    const stockData = [
      { name: "Apple", price: 145.09, symbol: "AAPL" },
      { name: "Tesla", price: 720.50, symbol: "TSLA" },
      { name: "Amazon", price: 3350.25, symbol: "AMZN" },
      { name: "Google", price: 2750.30, symbol: "GOOG" },
    ];

    setStocks(stockData);
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">Stock Recommendations</h1>
      
      {/* Displaying each stock in the recommendation cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stocks.map((stock, index) => (
          <RecommendationCard key={index} stock={stock} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
