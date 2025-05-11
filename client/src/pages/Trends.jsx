import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data for the charts
const gainers = [
  { symbol: 'NVDA', change: 5.2 },
  { symbol: 'TSLA', change: 3.8 },
  { symbol: 'AAPL', change: 2.9 },
  { symbol: 'AMZN', change: 4.1 },
  { symbol: 'MSFT', change: 6.0 },
  { symbol: 'GOOGL', change: 3.3 },
  { symbol: 'META', change: 2.4 },
  { symbol: 'NFLX', change: 3.0 }
];

const losers = [
  { symbol: 'PYPL', change: -4.1 },
  { symbol: 'INTC', change: -3.2 },
  { symbol: 'DIS', change: -2.5 },
  { symbol: 'BA', change: -3.5 },
  { symbol: 'GS', change: -2.8 },
  { symbol: 'MCD', change: -1.9 },
  { symbol: 'V', change: -2.2 },
  { symbol: 'WMT', change: -3.0 }
];

// Chart component
const StockChart = ({ data, title, color }) => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="symbol" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="change" fill={color} />
    </BarChart>
  </ResponsiveContainer>
);

const MarketTrends = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Top Gainers */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold text-green-700 mb-4">🔼 Top Gainers</h2>
        <ul>
          {gainers.map((stock, i) => (
            <li key={i} className="flex justify-between text-green-600 mb-2">
              <span>{stock.symbol}</span>
              <span>{stock.change}%</span>
            </li>
          ))}
        </ul>
        <StockChart data={gainers} title="Top Gainers Chart" color="green" />
      </div>

      {/* Top Losers */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold text-red-700 mb-4">🔽 Top Losers</h2>
        <ul>
          {losers.map((stock, i) => (
            <li key={i} className="flex justify-between text-red-600 mb-2">
              <span>{stock.symbol}</span>
              <span>{stock.change}%</span>
            </li>
          ))}
        </ul>
        <StockChart data={losers} title="Top Losers Chart" color="red" />
      </div>
    </div>
  );
};

export default MarketTrends;
