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
  { name: "2016", value: 11000 },
  { name: "2017", value: 22000 },
  { name: "2018", value: 33000 },
  { name: "2019", value: 18000 },
  { name: "2020", value: 29000 },
  { name: "2021", value: 36000 },
];
const formatYAxisLabel = (value: number) => `$${value.toLocaleString()}`;

const MonthlyRevenueChart = () => (
  <ResponsiveContainer width="99%" height={190}>
    <LineChart data={data}>
      <CartesianGrid stroke="#ccc" strokeDasharray={4} vertical={false} />
      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        tickMargin={10}
        fontSize={12}
      />
      <YAxis
        tickFormatter={formatYAxisLabel}
        axisLine={false}
        tickLine={false}
        tickMargin={10}
        fontSize={12}
        domain={[0, 4000]}
        ticks={[10000, 20000, 30000, 40000]}
      />
      <Tooltip />
      <Line
        type="bumpX"
        dataKey="value"
        stroke="#16dbcc"
        activeDot={{ r: 8 }}
        strokeWidth={3}
        strokeLinecap="butt"
      />
    </LineChart>
  </ResponsiveContainer>
);

export default MonthlyRevenueChart;
