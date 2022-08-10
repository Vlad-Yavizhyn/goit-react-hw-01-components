import PropTypes from 'prop-types';

import {TableWrap, TitleHead, Tbody, TableRow, Cell, Th} from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
    <TableWrap>
      <TitleHead>
        <TableRow>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </TableRow>
      </TitleHead>
    
      <Tbody>
      {items.map(({ id, type, amount, currency }) => (
        <TableRow key={id}>
          <Cell>{type}</Cell>
          <Cell>{amount}</Cell>
          <Cell>{currency}</Cell>
        </TableRow>
      ))}
      </Tbody>
    </TableWrap>
)}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
      }),
  ),
};