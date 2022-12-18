import defaultImg from './defaultImg.jpg';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile({
  username,
  tag,
  location,
  avatar = defaultImg,
  stats,
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.avatar}
          width="160px"
        />
        <p className={styles.userName}>{username}</p>
        <p className={styles.userInfo}>@{tag}</p>
        <p className={styles.userInfo}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.statsLabel}>Followers</span>
          <span className={styles.statsQuantity}> {stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.statsLabel}>Views</span>
          <span className={styles.statsQuantity}> {stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.statsLabel}>Likes</span>
          <span className={styles.statsQuantity}> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};
