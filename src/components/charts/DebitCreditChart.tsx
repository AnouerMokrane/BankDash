import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sat",
    debit: 170,
    Credit: 280,
  },
  {
    name: "Sun",
    debit: 130,
    Credit: 220,
  },
  {
    name: "Mon",
    debit: 100,
    Credit: 180,
  },
  {
    name: "Tue",
    debit: 240,
    Credit: 160,
  },
  {
    name: "Wed",
    debit: 220,
    Credit: 130,
  },
  {
    name: "Thu",
    debit: 150,
    Credit: 80,
  },
  {
    name: "Fri",
    debit: 210,
    Credit: 170,
  },
];

const DebitCreditChart = () => {
  const [barSize, setBarSize] = useState<number>(10);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setBarSize(10);
      } else {
        setBarSize(24);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="bg-white py-4 lg:px-4 rounded-xl flex justify-center ">
      <ResponsiveContainer width="99%" height={250}>
        <BarChart data={data}>
          <CartesianGrid
            stroke="#ccc"
            strokeWidth={1}
            strokeDasharray="0"
            vertical={false}
            horizontal={false}
          />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />

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

          <Bar dataKey="debit" fill="#1814f3" barSize={barSize} radius={20} />
          <Bar dataKey="Credit" fill="#ff82ac" barSize={barSize} radius={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const renderLegendContent = (props: {
  payload: { value: string; color: string }[];
}) => {
  const { payload } = props;
  return (
    <ul className="flex justify-end gap-5 p-0 mb-4 mr-4">
      {payload.map((entry, index) => (
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
          <span className="text-xs text-wild-blue">{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default DebitCreditChart;
