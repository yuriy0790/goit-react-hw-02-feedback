import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
