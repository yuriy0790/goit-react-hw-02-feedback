// import PropTypes from 'prop-types';
// import styles from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <p
      style={{
        color: '#e73c7e',
        fontSize: 20,
        fontWeight: 700,
        backgroundColor: '#ffffff',
        display: 'inline-block',
        padding: 5,
      }}
    >
      {message}
    </p>
  );
};
export default Notification;
