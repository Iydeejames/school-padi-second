import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data
const data = [
  { name: '1', Nursery: 300, Primary: 400, Secondary: 200 },
  { name: '2', Nursery: 400, Primary: 200, Secondary: 800 },
  { name: '3', Nursery: 300, Primary: 300, Secondary: 600 },
  { name: '4', Nursery: 600,  Primary: 500, Secondary: 400 },
  { name: '5', Nursery: 700,  Primary: 600, Secondary: 300 },
  { name: '6', Nursery: 100, Primary: 400, Secondary: 200 },
  { name: '7', Nursery: 300, Primary: 300, Secondary: 500 },
  { name: '8', Nursery: 200, Primary: 200, Secondary: 700 },
  { name: '9', Nursery: 800,  Primary: 500, Secondary: 400 },
  { name: '10', Nursery: 900, Primary: 600, Secondary: 200 },
  { name: '11', Nursery: 400, Primary: 400, Secondary: 300 },
  { name: '12', Nursery: 500, Primary: 500, Secondary: 800 },
];

const SuperAdminLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend layout="horizontal" verticalAlign="top" align="center" />
      <Line type="monotone" dataKey="Nursery" stroke="#8884d8"  strokeWidth={2} dot={false} />
      <Line type="monotone" dataKey="Primary" stroke="#82ca9d" strokeWidth={2} dot={false} />
      <Line type="monotone" dataKey="Secondary" stroke="#ffc658" strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
  );
};

export default SuperAdminLineChart;
