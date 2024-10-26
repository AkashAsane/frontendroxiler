import React, { useEffect, useState } from 'react';
import { getCategoryData } from '../services/api';

function CategoryData({ month }) {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategoryData(month);
      setCategoryData(data);
    };
    fetchData();
  }, [month]);

  return (
    <div className="mt-4 p-4 border rounded">
      <h2 className="text-xl font-semibold mb-2">Category Data</h2>
      <ul>
        {categoryData.map((category, index) => (
          <li key={index}>
            {category._id} - {category.count} items
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryData;
