import css from "./TransactionHistory.module.css"
const {
  transactionHistory,
  head,
  title,
  stroke,
  colmn
} = css;

const TransactionHistory = ({ items }) => {
    return (
    <table className={transactionHistory}>
    <thead className={head}>
      <tr>
        <th className={title}>Type</th>
        <th className={title}>Amount</th>
        <th className={title}>Currency</th>
      </tr>
    </thead>
    <tbody>
  {items.map((item) => {
    const { id, type, amount, currency } = item;
    return (
      <tr className={stroke} key={id}>
        <td className={colmn}>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  })}
</tbody>
  </table>)
}

export default TransactionHistory;