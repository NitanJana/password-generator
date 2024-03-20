import PropTypes from 'prop-types';

const Checkbox = ({ label, value, handleClick }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        id={`${label}-checkbox`}
        type="checkbox"
        checked={value}
        onChange={() => handleClick(!value)}
        className="h-4 w-4 rounded border-gray-300 bg-gray-200 text-blue-600 focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor={`${label}-checkbox`} className="text-sm font-medium text-gray-200">
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Checkbox;
