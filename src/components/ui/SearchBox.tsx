import { FC } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBox: FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="جستجو بر اساس نام یا نوع..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-72 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
    />
  );
};

export default SearchBox;
