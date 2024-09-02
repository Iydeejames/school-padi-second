import PropTypes from 'prop-types';

const SelectComponent = ({ options, value, onChange }) => {
  return (
    <div className="relative inline-block w-full h-16 border-gray-300 border rounded-lg max-w-xs">
      <select
        value={value}
        onChange={onChange}
        className="appearance-none w-full h-full  text-gray-500 py-2 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.293 7.293L10 12l4.707-4.707-1.414-1.414L10 9.172 6.707 5.879l-1.414 1.414z"/>
        </svg>
      </div>
    </div>
  );
};

SelectComponent.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectComponent;
