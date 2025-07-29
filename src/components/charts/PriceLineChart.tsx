import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { date: "1403/05/01", price: 27000 },
  { date: "1403/05/02", price: 27300 },
  { date: "1403/05/03", price: 27500 },
  { date: "1403/05/04", price: 26800 },
  { date: "1403/05/05", price: 27100 },
];

const PriceLineChart = () => {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis tickFormatter={(value) => `${value.toLocaleString()} تومان`} />
          <Tooltip formatter={(value: number) => `${value.toLocaleString()} تومان`} />
          <Line type="monotone" dataKey="price" stroke="#ef4444" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceLineChart;
