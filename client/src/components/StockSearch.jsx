import React, { useState } from 'react';
import axios from 'axios';

const StockSearch = () => {
  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState(null);

  const handleSearch = async () => {
    const response = await axios.get(`http://localhost:5000/api/stock/${symbol}`);
    setPrice(response.data.price);
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="px-4 py-2 rounded text-black"
        placeholder="Enter stock symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
        Search
      </button>
      {price && <span className="text-green-400 text-xl ml-4">💲 {price}</span>}
    </div>
  );
};

export default StockSearch;
