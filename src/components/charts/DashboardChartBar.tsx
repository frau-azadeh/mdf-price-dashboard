import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    { name: "میلگرد A3", quantity: 100 },
    { name: "میلگرد A2", quantity: 80 },
    { name: "میلگرد A4", quantity: 120 },
    { name: "میلگرد ساده", quantity: 110 },
  ];
  
  const DashboardChartBar = () => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="quantity" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  
  export default DashboardChartBar;