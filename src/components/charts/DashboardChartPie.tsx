import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    { name: "آجدار", value: 220 },
    { name: "ساده", value: 150 },
    { name: "A3", value: 130 },
    { name: "A4", value: 90 },
  ];
  
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#f87171"];
  
  const DashboardChartPie = () => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={90}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  };
  
  export default DashboardChartPie;
  