import { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Aug",
    expense: 1200,
  },
  {
    name: "Sep",
    expense: 3000,
  },
  {
    name: "Oct",
    expense: 2300,
  },
  {
    name: "Nov",
    expense: 800,
  },

  {
    name: "Dec",
    expense: 2700,
  },
  {
    name: "Jan",
    expense: 1500,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload) {
    return (
      <div className="custom-tooltip border bg-white p-2 rounded-lg">
        <p>{`${label} : $${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const ExpenseBarChart = () => {
  const [barSize, setBarSize] = useState<number>(35);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 920 && window.innerWidth < 1200) {
        setBarSize(22);
      } else {
        setBarSize(35);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <ResponsiveContainer width="99%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <Tooltip
            cursor={{ fill: "transparent" }}
            content={<CustomTooltip />}
          />
          <Bar dataKey="expense" fill={"#ccc"} barSize={barSize} radius={10} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default ExpenseBarChart;
