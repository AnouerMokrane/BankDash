import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jul", value: 50 },
  { name: "Aug", value: 80 },
  { name: "Sep", value: 120 },
  { name: "Sep", value: 180 },
  { name: "Oct", value: 100 },
  { name: "Nov", value: 140 },
  { name: "Dec", value: 170 },
  { name: "Jan", value: 200 },
];

const MyLineChart = () => (
  <ResponsiveContainer width="95%" height={"100%"}>
    <LineChart data={data}>
      <CartesianGrid stroke="#ccc" strokeDasharray={2} />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default MyLineChart;
