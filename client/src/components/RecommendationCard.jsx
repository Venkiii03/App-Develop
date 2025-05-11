// src/components/RecommendationCard.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowUp, FaArrowDown, FaEquals } from 'react-icons/fa';

const RecommendationCard = ({ stock }) => {
  const [predictionMessage, setPredictionMessage] = useState('');
  const [recommendationType, setRecommendationType] = useState('');

  const handlePrediction = () => {
    const { price, predictedPrice } = stock;

    if (price === undefined || predictedPrice === undefined) {
      setPredictionMessage('Invalid data');
      setRecommendationType('error');
      return;
    }

    const changePercent = ((predictedPrice - price) / price) * 100;

    if (predictedPrice > price) {
      setPredictionMessage(`Profit Expected (+${changePercent.toFixed(2)}%)`);
      setRecommendationType('buy');
    } else if (predictedPrice < price) {
      setPredictionMessage(`Loss Expected (${changePercent.toFixed(2)}%)`);
      setRecommendationType('sell');
    } else {
      setPredictionMessage('No Change');
      setRecommendationType('hold');
    }
  };

  const getColor = () => {
    switch (recommendationType) {
      case 'buy':
        return 'text-green-400';
      case 'sell':
        return 'text-red-400';
      case 'hold':
        return 'text-yellow-300';
      case 'error':
        return 'text-gray-400';
      default:
        return 'text-white';
    }
  };

  const getIcon = () => {
    switch (recommendationType) {
      case 'buy':
        return <FaArrowUp className="inline mr-1" />;
      case 'sell':
        return <FaArrowDown className="inline mr-1" />;
      case 'hold':
        return <FaEquals className="inline mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-700 transition-all duration-300">
      <h3 className="text-xl font-semibold text-white mb-1">{stock.name}</h3>
      <p className="text-gray-400 mb-1">({stock.symbol})</p>
      <p className="text-green-400 text-lg">Current: ${stock.price}</p>
      <p className="text-blue-300 mb-4">Predicted: ${stock.predictedPrice}</p>

      <button
        onClick={handlePrediction}
        className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded"
      >
        Predict Outcome
      </button>

      {predictionMessage && (
        <div className={`mt-4 font-medium ${getColor()}`}>
          {getIcon()} {predictionMessage}
        </div>
      )}
    </div>
  );
};

RecommendationCard.propTypes = {
  stock: PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    predictedPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default RecommendationCard;
