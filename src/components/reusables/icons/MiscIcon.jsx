import PropTypes from "prop-types"

export default function MiscIcon({color="#F3A218"}) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.33268 0.332031C7.01503 0.332031 6.7013 0.402162 6.41388 0.537418L2.19722 2.52173C1.26258 2.96156 0.666016 3.90161 0.666016 4.93458V9.66537C0.666016 10.3305 1.05017 10.9359 1.65203 11.2191L6.41388 13.46C6.7013 13.5952 7.01503 13.6654 7.33268 13.6654C7.65033 13.6654 7.96407 13.5952 8.25149 13.46L13.0133 11.2191C13.6152 10.9359 13.9993 10.3305 13.9993 9.66537V4.93458C13.9993 3.90161 13.4028 2.96156 12.4681 2.52173L8.25149 0.537418C7.96407 0.402163 7.65033 0.332031 7.33268 0.332031ZM12.666 8.58668L7.99935 6.25334V1.89236L11.9004 3.72815C12.3677 3.94807 12.666 4.41809 12.666 4.93458V8.58668ZM7.33268 7.41072L12.4889 9.98882C12.4751 9.99762 12.4607 10.0056 12.4456 10.0127L7.68376 12.2536C7.57394 12.3052 7.45406 12.332 7.33268 12.332C7.21131 12.332 7.09143 12.3052 6.98161 12.2536L2.21976 10.0127C2.20471 10.0056 2.19027 9.99762 2.17649 9.98882L7.33268 7.41072ZM6.66602 6.25334L1.99935 8.58668V4.93458C1.99935 4.41809 2.29763 3.94807 2.76495 3.72815L6.66602 1.89236V6.25334Z"
        fill={color}
      />
    </svg>
  );
}
MiscIcon.propTypes = {
    color: PropTypes.string,
};