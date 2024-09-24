import "./TransactionHistory.css";

const TransactionHistory = ({items}) => {

    return (

        <table className="transaction-tab">
  <thead>
    <tr className="tab-list">
      <th className="tab-item">Type</th>
      <th className="tab-item">Amount</th>
      <th className="tab-item">Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map((transaction, index) => (
    <tr key={transaction.id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#808080' }}>
      <td className="tab-body-item">{transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}</td>
      <td className="tab-body-item">{transaction.amount}</td>
      <td className="tab-body-item">{transaction.currency}</td>
    </tr>
  ))}
</tbody>
    </table>
  );
};

export default TransactionHistory;