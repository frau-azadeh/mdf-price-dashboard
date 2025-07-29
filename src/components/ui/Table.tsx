import { FC } from "react";

type Product = {
  id: number;
  name: string;
  type: string;
  size: string;
  stock: number;
  price: number;
  lastUpdate: string;
};

type TableProps = {
  data: Product[];
};

const Table: FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow bg-white">
      <table className="w-full text-sm text-right rtl:text-right">
        <thead className="bg-gray-100 text-gray-700 font-bold">
          <tr>
            <th className="p-3">#</th>
            <th className="p-3">نام</th>
            <th className="p-3">نوع</th>
            <th className="p-3">سایز</th>
            <th className="p-3">موجودی</th>
            <th className="p-3">قیمت (تومان)</th>
            <th className="p-3">آخرین بروزرسانی</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{i + 1}</td>
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.type}</td>
              <td className="p-3">{item.size}</td>
              <td className="p-3">{item.stock}</td>
              <td className="p-3">{item.price.toLocaleString()}</td>
              <td className="p-3">{item.lastUpdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
