import PropTypes from 'prop-types';
import {Friends} from './friendList.styled';
import {FriendListItem} from '../FriendListItem/FriendListItem';


export const FriendList = ({friends}) => {
  return(
<Friends>
{friends.map(({ avatar, name, isOnline, id })=> { 
  return(
    <FriendListItem
      key={id}
      isOnline={isOnline}
      avatar={avatar}
      name={name}
    />
    );
  })}
</Friends>
)}

FriendList.propTypes={
  name:PropTypes.string,
  avatar:PropTypes.elementType,
  isOnline:PropTypes.bool,
  id:PropTypes.number
}
