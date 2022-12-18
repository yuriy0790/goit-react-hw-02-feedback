import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <>
      <table className={styles.transactionHistory}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Amount</th>
            <th className={styles.th}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transact => (
            <tr className={styles.tr} key={transact.id}>
              <td className={styles.td}>{transact.type}</td>
              <td className={styles.td}>{transact.amount}</td>
              <td className={styles.td}>{transact.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
