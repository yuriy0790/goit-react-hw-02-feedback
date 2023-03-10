import PropTypes from 'prop-types';

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

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
