import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
//   Label,
} from 'recharts';

// Sample data
const data = [
  { name: 'Active', value: 400 },
  { name: 'Expired', value: 300 },
  { name: 'On Trial', value: 300 },
];

// const getContrastingColor = (hex) => {
//     // Remove the hash at the start if it's there
//     hex = hex.replace(/^#/, '');
  
//     // Parse the r, g, b values
//     const r = parseInt(hex.substring(0, 2), 16);
//     const g = parseInt(hex.substring(2, 4), 16);
//     const b = parseInt(hex.substring(4, 6), 16);
  
//     // Get the inverted color
//     const invertedColor = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
  
//     return invertedColor;
//   };
const COLORS = ['#E6F2FF', '#0274E8', '#027FFF'];

const RADIAN = Math.PI / 180;

// Custom label for pie slices
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
//   index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
//   const fillColor = getContrastingColor(COLORS[index % COLORS.length]);

  return (
    <text
      x={x}
      y={y}
      fill={COLORS.reverse()}
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="vertical" verticalAlign="center" align="right" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
