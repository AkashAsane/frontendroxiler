import React, { useEffect, useState } from 'react';
import { getTransactions } from '../services/api';

function TransactionsList({ month }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTransactions(month);
      setTransactions(data);
    };
    fetchData();
  }, [month]);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id} className="p-2 border-b">
            <p><strong>{transaction.title}</strong> - ${transaction.price}</p>
            <p>{transaction.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionsList;
