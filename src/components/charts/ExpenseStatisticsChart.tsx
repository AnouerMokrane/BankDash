import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "DBL Bank", value: 400 },
  { name: "BRC Bank", value: 300 },
  { name: "ABM Bank", value: 300 },
  { name: "MCP Bank", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB38", "#ff82ac"];

const ExpenseStatisticsChart = () => (
  <ResponsiveContainer width="99%" height={"100%"}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={true}
        outerRadius={80}
        innerRadius={30}
        fill="#8884d8"
        dataKey="value"
        strokeWidth={12}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]}>
            {" "}
          </Cell>
        ))}
      </Pie>
      <Legend
        iconSize={12}
        iconType="circle"
        layout="horizontal"
        verticalAlign="bottom"
        align="center"
        wrapperStyle={{ padding: 10, fontSize: 12 }}
      />
    </PieChart>
  </ResponsiveContainer>
);

export default ExpenseStatisticsChart;
