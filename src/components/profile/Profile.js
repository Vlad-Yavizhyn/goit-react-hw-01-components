import PropTypes from 'prop-types';
import {
  Avatar, 
  ProfileWrap, 
  Name, 
  Description, 
  Tag, 
  Location, 
  Stats, 
  Lable, 
  Quantity,
  Item,
} from './styled/profile.styled'



export const Profile = ({ user: {    
    username,
    tag,
    location,
    avatar,
    stats
}}) => {
    return <ProfileWrap>
    <Description>
      <Avatar
        src={avatar}
        alt={username}
      />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>
  
    <Stats>
      <Item>
        <Lable>Followers</Lable>
        <Quantity>{stats.followers}</Quantity>
      </Item>
      <Item>
        <Lable>Views</Lable>
        <Quantity>{stats.views}</Quantity>
      </Item>
      <Item>
        <Lable>Likes</Lable>
        <Quantity>{stats.likes}</Quantity>
      </Item>
    </Stats>
  </ProfileWrap>
};

Profile.propTypes = {
    
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number,
            views: PropTypes.number,
            likes: PropTypes.number,
        }),
        
    
}