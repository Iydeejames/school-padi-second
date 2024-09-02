import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function ClassAttendanceBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
        <XAxis dataKey="class" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="present" fill="#0274E8" />
        <Bar dataKey="absent" fill="#3599FF" />
      </BarChart>
    </ResponsiveContainer>
  );
}

ClassAttendanceBarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      class: PropTypes.string.isRequired,
      present: PropTypes.number.isRequired,
      absent: PropTypes.number.isRequired,
    })
  ).isRequired,
};
