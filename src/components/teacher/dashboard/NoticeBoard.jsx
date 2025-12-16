import PropTypes from 'prop-types';

const NoticeItem = ({ title, description, date }) => {
  return (
    <div className="flex justify-between items-start p-4 border-b border-gray-200">
      <div>
        <h3 className="text-blue-500 font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <div className="text-blue-500 text-sm font-semibold">{date}</div>
    </div>
  );
};

NoticeItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export const NoticeBoard = ({ notices }) => {
  return (
    <div className="bg-white border shadow-lg rounded-lg">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-gray-400 font-semibold">Notice Board</h2>
      </div>
      {notices.map((notice, index) => (
        <NoticeItem
          key={index}
          title={notice.title}
          description={notice.description}
          date={notice.date}
        />
      ))}
    </div>
  );
};

NoticeBoard.propTypes = {
  notices: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};
