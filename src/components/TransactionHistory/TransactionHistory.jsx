import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactiontab}>
      <thead>
        <tr className={styles.tablist}>
          <th className={styles.tabitem}>Type</th>
          <th className={styles.tabitem}>Amount</th>
          <th className={styles.tabitem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction, index) => (
          <tr
            key={transaction.id}
            style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#808080' }}
          >
            <td className={styles.tabbodyitem}>
              {transaction.type.charAt(0).toUpperCase() +
                transaction.type.slice(1)}
            </td>
            <td className={styles.tabbodyitem}>{transaction.amount}</td>
            <td className={styles.tabbodyitem}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
