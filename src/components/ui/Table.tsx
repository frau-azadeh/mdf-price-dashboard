import moment from "moment-jalaali";
import { FC } from "react";
import { Product } from "../../type/types";

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
            <th className="p-3">فرم</th>
            <th className="p-3">استاندارد</th>
            <th className="p-3">انبار</th>
            <th className="p-3">واحد</th>
            <th className="p-3">قیمت (تومان)</th>
            <th className="p-3">آخرین بروزرسانی</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            let formattedDate = "-";
            if (item.lastPriceDate) {
              formattedDate = moment(
                item.lastPriceDate,
                "jYYYY-jMM-jDDTHH:mm:ss"
              ).format("jYYYY/jMM/jDD");
            }

            return (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{i + 1}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.type}</td>
                <td className="p-3">{item.size}</td>
                <td className="p-3">{item.form || "-"}</td>
                <td className="p-3">{item.standard || "-"}</td>
                <td className="p-3">{item.warehouse || "-"}</td>
                <td className="p-3">{item.unit || "-"}</td>
                <td className="p-3">{item.price.toLocaleString()}</td>
                <td className="p-3">{formattedDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
