import PropTypes from 'prop-types';

const Button = ({ buttonText, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="text-md select-none rounded-full bg-orange-600 px-6 py-2 font-bold text-gray-200 hover:bg-orange-400 active:bg-orange-300"
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
