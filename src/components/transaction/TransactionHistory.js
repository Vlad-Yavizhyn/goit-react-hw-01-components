import PropTypes from 'prop-types';

import {Table, Thead} from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
    <Table class="transaction-history">
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>
    
      <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
      </tbody>
    </Table>
)}
