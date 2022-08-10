import PropTypes from 'prop-types';

import {Friends, FriendItem, Name} from './friendList.styled';

export const FriendList = ({friends}) => {
  return(
<Friends>
{friends.map(({ avatar, name, isOnline, id })=> (
    <FriendItem key={id}>
      <span>{isOnline ? "✔️" : "❌"}</span>
      <img src={avatar} alt={name} width="70" />
      <Name class="name">{name}</Name>
    </FriendItem>))}
</Friends>
)}

FriendList.propTypes={
  name:PropTypes.string,
  avatar:PropTypes.elementType,
  isOnline:PropTypes.bool,
  id:PropTypes.number
}