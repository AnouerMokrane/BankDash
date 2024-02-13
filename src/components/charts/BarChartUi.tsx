import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sat",
    Deposit: 370,
    Withdraw: 280,
  },
  {
    name: "Sun",
    Deposit: 300,
    Withdraw: 200,
  },
  {
    name: "Mon",
    Deposit: 250,
    Withdraw: 350,
  },
  {
    name: "Tue",
    Deposit: 150,
    Withdraw: 250,
  },
  {
    name: "Wed",
    Deposit: 300,
    Withdraw: 340,
  },
  {
    name: "Thu",
    Deposit: 200,
    Withdraw: 100,
  },
  {
    name: "Fri",
    Deposit: 80,
    Withdraw: 150,
  },
];

const BarChartUi = () => {
  const [barSize, setBarSize] = useState<number>(7);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setBarSize(7);
      } else {
        setBarSize(10);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="lg:bg-white py-4 lg:px-4 rounded-xl">
      <ResponsiveContainer width="99%" height={300}>
        <BarChart width={500} height={300} data={data} margin={{ left: -15 }}>
          <CartesianGrid
            stroke="#ccc"
            strokeWidth={1}
            strokeDasharray="0"
            vertical={false}
          />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{ borderRadius: "5px" }}
            labelStyle={{ display: "none" }}
            cursor={{ fill: "none" }}
          />

          <Legend
            verticalAlign="top"
            align="right"
            iconSize={15}
            iconType="circle"
            content={renderLegendContent}
          />
          <Bar dataKey="Deposit" fill="#1814f3" barSize={barSize} radius={20} />
          <Bar
            dataKey="Withdraw"
            fill="#16dbcc"
            barSize={barSize}
            radius={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const renderLegendContent = (props: any) => {
  const { payload } = props;
  return (
    <ul className="flex justify-end gap-5 p-0 mb-4">
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className="flex text-center">
          <span
            style={{
              width: 12,
              height: 12,
              backgroundColor: entry.color,
              marginRight: 5,
              borderRadius: 50,
            }}
          />
          <span className="text-xs">{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default BarChartUi;
