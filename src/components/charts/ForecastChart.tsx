import moment from "moment-jalaali";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ForecastChartProps {
  data: { date: string; predictedPrice: number }[];
}

const ForecastChart = ({ data }: ForecastChartProps) => {
  // تبدیل تاریخ به timestamp
  const formattedData = data.map((item) => ({
    ...item,
    timestamp: moment(item.date, ["jYYYY/MM/DD", "YYYY/MM/DD"])
      .toDate()
      .getTime(),
  }));

  // تولید لیست تیک‌های یکتا
  const uniqueTicks = formattedData.map((item) => item.timestamp);

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="6 6" />
          <XAxis
            dataKey="timestamp"
            type="number"
            domain={["dataMin", "dataMax"]}
            ticks={uniqueTicks}
            allowDuplicatedCategory={false}
            tickFormatter={(time) => moment(time).format("jYYYY/MM/DD")}
            angle={-30}
            textAnchor="end"
          />
          <YAxis tickFormatter={(value) => value.toLocaleString()} />
          <Tooltip
            labelFormatter={(time) => moment(time).format("jYYYY/MM/DD")}
            formatter={(value: number) => `${value.toLocaleString()} تومان`}
          />
          <Line
            type="monotone"
            dataKey="predictedPrice"
            stroke="#10b981"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastChart;
