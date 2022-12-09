import PropTypes from 'prop-types'
import './styles/Button.scss';

const Button = ({ icon, severity, type = 'button' }) => {
  return (
    <div className="cont-button">
      <button type={type} className={`btn-bubble ${severity}`} >
        {icon}
      </button>
    </div >
  );
};

Button.propTypes = {
  icon: PropTypes.node,
  severity: PropTypes.string,
  type: PropTypes.string
}

export default Button;
