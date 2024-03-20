import PropTypes from 'prop-types';

const LengthSlider = ({ label, length, handleClick }) => {
  return (
    <div className="flex w-full items-center justify-center gap-2">
      <input
        id="pass-length"
        type="range"
        min={6}
        max={20}
        value={length}
        onChange={(e) => handleClick(parseInt(e.target.value))}
        className="h-2 w-1/2 cursor-pointer appearance-none rounded-lg bg-gray-200"
      />
      <label htmlFor="pass-length" className="text-sm font-medium text-gray-200">
        {label}
      </label>
    </div>
  );
};

LengthSlider.propTypes = {
  label: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default LengthSlider;
