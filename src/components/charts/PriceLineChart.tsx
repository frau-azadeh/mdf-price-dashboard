import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

interface PriceLineChartProps {
  analysisData: {
    latest_date: string;
    summary: {
      average_price: number;
      max_price: number;
      min_price: number;
    };
  };
}

const PriceLineChart = ({ analysisData }: PriceLineChartProps) => {
  const data = [
    { name: "حداقل", price: analysisData.summary.min_price },
    { name: "میانگین", price: analysisData.summary.average_price },
    { name: "حداکثر", price: analysisData.summary.max_price },
  ];

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `${value.toLocaleString()} تومان`} />
          <Tooltip formatter={(value: number) => `${value.toLocaleString()} تومان`} />
          <Line type="monotone" dataKey="price" stroke="#ef4444" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceLineChart;
