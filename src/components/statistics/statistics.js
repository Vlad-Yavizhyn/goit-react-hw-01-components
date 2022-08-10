import PropTypes from 'prop-types';

import {StatisticsWrap, Title, StatList, Item,} from './statistics.styled';


export const Statistics = ({statistics: props, title}) => {
  return (
  <StatisticsWrap>
    {title && <Title>{title}</Title>}
    <StatList>
    {props.map(({id,label,percentage})=>
        <Item key={id} style={{ backgroundColor: randomColor() }}>
          <span>{label}</span>
          <span >{percentage}</span>
        </Item>
    )}
    </StatList>
    </StatisticsWrap>)
}

const randomColor = () =>
'#' + Math.floor(Math.random() * 16777215).toString(16);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
}