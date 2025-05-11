import React from 'react';

const visitedStocks = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    visitedOn: '2025-04-20 10:15 AM'
  },
  {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    visitedOn: '2025-04-20 11:45 AM'
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    visitedOn: '2025-04-19 4:30 PM'
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corp.',
    visitedOn: '2025-04-18 2:00 PM'
  }
];

const History = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">📜 Recently Visited Stocks</h2>

      {visitedStocks.length === 0 ? (
        <p className="text-gray-500">You haven’t visited any stocks yet.</p>
      ) : (
        <div className="grid gap-4">
          {visitedStocks.map((stock, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center hover:shadow-lg transition duration-300"
            >
              <div>
                <h3 className="text-lg font-semibold text-blue-700">{stock.symbol}</h3>
                <p className="text-gray-600">{stock.name}</p>
                <p className="text-sm text-gray-400">Visited on: {stock.visitedOn}</p>
              </div>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
                onClick={() => alert(`Revisiting ${stock.symbol}...`)}
              >
                View Again
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
