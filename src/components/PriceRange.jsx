import React, { useEffect, useState } from 'react';
import { getPriceRangeData } from '../services/api';

function PriceRange({ month }) {
  const [priceRangeData, setPriceRangeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPriceRangeData(month);
      setPriceRangeData(data);
    };
    fetchData();
  }, [month]);

  return (
    <div className="mt-4 p-4 border rounded">
      <h2 className="text-xl font-semibold mb-2">Price Range</h2>
      <ul>
        {priceRangeData.map((range, index) => (
          <li key={index}>
            ${range._id} - {range.count} items
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PriceRange;
