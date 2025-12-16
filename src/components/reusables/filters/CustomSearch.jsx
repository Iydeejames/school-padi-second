import PropTypes from 'prop-types';
import { CiSearch } from "react-icons/ci";

const CustomSearch = ({ value, onChange, placeholder = "Search" }) => {
  return (
    <div className="flex items-center bg-gray-100 text-[#015AB5] rounded-2xl px-4 py-2 w-full max-w-md">
      <CiSearch className='text-2xl' />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-gray-100 text-[#015AB5]  outline-none flex-grow"
      />
    </div>
  );
};

CustomSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};



export default CustomSearch;
