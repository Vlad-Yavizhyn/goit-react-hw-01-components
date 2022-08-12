import PropTypes from 'prop-types';
import { FriendItem, Name } from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
      <FriendItem>
        <span>{isOnline ? "✔️" : "❌"}</span>
        <img src={avatar} alt={name} width="70" />
        <Name>{name}</Name>
      </FriendItem>
    );
  };
  
  FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };