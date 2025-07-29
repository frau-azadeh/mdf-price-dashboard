interface ForecastItem {
    date: string;
    type: string;
    size: number | string;
    predictedPrice: number;
  }
  
  interface ForecastTableProps {
    data: ForecastItem[];
    title?: string; 
  }
  
  const ForecastTable = ({ data, title }: ForecastTableProps) => {
    return (
      <div className="overflow-x-auto">
        {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
        <table className="w-full text-sm text-right border rounded shadow">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-2">تاریخ</th>
              <th className="p-2">نوع</th>
              <th className="p-2">سایز</th>
              <th className="p-2">قیمت پیش‌بینی‌شده (تومان)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{item.date}</td>
                <td className="p-2">{item.type}</td>
                <td className="p-2">{item.size}</td>
                <td className="p-2">{item.predictedPrice.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ForecastTable;
  