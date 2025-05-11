import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const PriceChart = ({ symbol, data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="bg-white rounded-lg p-6 shadow-md text-black">
      <h3 className="text-xl font-bold mb-4">📊 Price Chart for {symbol}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#2563EB" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
