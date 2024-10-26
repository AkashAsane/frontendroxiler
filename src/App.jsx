import React, { useState, useEffect } from 'react';
import TransactionsList from './components/TransactionsList';
import Statistics from './components/Statistics';
import PriceRange from './components/PriceRange';
import CategoryData from './components/CategoryData';

function App() {
  const [month, setMonth] = useState('02'); // Set a default month

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Transaction Dashboard</h1>

      <label className="block mb-2">
        Select Month:
        <select value={month} onChange={(e) => setMonth(e.target.value)} className="ml-2 p-2 border rounded">
          <option value="01">January</option>
          <option value="02">February</option>
          {/* Add other months as needed */}
        </select>
      </label>

      <Statistics month={month} />
      <PriceRange month={month} />
      <CategoryData month={month} />
      <TransactionsList month={month} />
    </div>
  );
}

export default App;
