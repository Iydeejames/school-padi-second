import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

// Sample data
const data = [
  { name: '1', Legend1: 400, Legend2: 300, Legend3: 200 },
  { name: '2', Legend1: 200, Legend2: 500, Legend3: 800 },
  { name: '3', Legend1: 300, Legend2: 400, Legend3: 600 },
  { name: '4', Legend1: 500, Legend2: 200, Legend3: 400 },
  { name: '5', Legend1: 600, Legend2: 300, Legend3: 300 },
  { name: '6', Legend1: 400, Legend2: 400, Legend3: 200 },
  { name: '7', Legend1: 300, Legend2: 300, Legend3: 500 },
  { name: '8', Legend1: 200, Legend2: 600, Legend3: 700 },
  { name: '9', Legend1: 500, Legend2: 300, Legend3: 400 },
  { name: '10', Legend1: 600, Legend2: 500, Legend3: 200 },
  { name: '11', Legend1: 400, Legend2: 400, Legend3: 300 },
  { name: '12', Legend1: 500, Legend2: 300, Legend3: 800 },
];

const PortalTraffic = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* <Legend layout="horizontal" verticalAlign="top" align="center" /> */}
      <Line type="monotone" dataKey="Legend1" stroke="#8884d8" dot={{ r: 3 }} />
      <Line type="monotone" dataKey="Legend2" stroke="#82ca9d" dot={{ r: 3 }} />
      <Line type="monotone" dataKey="Legend3" stroke="#ffc658" dot={{ r: 3 }} />
    </LineChart>
  </ResponsiveContainer>
  );
};

export default PortalTraffic;
