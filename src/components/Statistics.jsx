import React, { useEffect, useState } from 'react';
import { getStatistics } from '../services/api';

function Statistics({ month }) {
  const [statistics, setStatistics] = useState({ totalSaleAmount: 0, soldItemsCount: 0, notSoldItemsCount: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStatistics(month);
      setStatistics(data);
    };
    fetchData();
  }, [month]);

  return (
    <div className="mt-4 p-4 border rounded">
      <h2 className="text-xl font-semibold mb-2">Statistics</h2>
      <p>Total Sale Amount: ${statistics.totalSaleAmount}</p>
      <p>Sold Items Count: {statistics.soldItemsCount}</p>
      <p>Not Sold Items Count: {statistics.notSoldItemsCount}</p>
    </div>
  );
}

export default Statistics;
