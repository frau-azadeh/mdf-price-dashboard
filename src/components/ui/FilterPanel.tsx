import { FC } from "react";

type Props = {
  type: string;
  size: string;
  onTypeChange: (value: string) => void;
  onSizeChange: (value: string) => void;
};

const FilterPanel: FC<Props> = ({ type, size, onTypeChange, onSizeChange }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex flex-col gap-1 w-full md:w-1/3">
        <label className="text-sm">نوع میلگرد</label>
        <select
          value={type}
          onChange={(e) => onTypeChange(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="">همه</option>
          <option value="آجدار">آجدار</option>
          <option value="ساده">ساده</option>
        </select>
      </div>

      <div className="flex flex-col gap-1 w-full md:w-1/3">
        <label className="text-sm">سایز</label>
        <select
          value={size}
          onChange={(e) => onSizeChange(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="">همه</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
