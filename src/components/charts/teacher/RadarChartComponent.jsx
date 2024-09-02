import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  // Legend,
  ResponsiveContainer,
} from 'recharts';

export default function RadarChartComponent({ data }) {
  return (
    <ResponsiveContainer width="100%" height={600}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Male" dataKey="male" stroke="#0274E8" fill="#0274E8" fillOpacity={0.6} />
        <Radar name="Female" dataKey="female" stroke="#3599FF" fill="#3599FF" fillOpacity={0.6} />
        {/* <Legend /> */}
      </RadarChart>
    </ResponsiveContainer>
  );
}

RadarChartComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      male: PropTypes.number.isRequired,
      female: PropTypes.number.isRequired,
    })
  ).isRequired,
};
