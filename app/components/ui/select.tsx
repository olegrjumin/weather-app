import { useId } from "react";

export const Select = ({
  value,
  label,
  onChange,
  options,
}: {
  value: string;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) => {
  const uniqueId = useId();
  return (
    <div>
      {label && (
        <label
          htmlFor={uniqueId}
          className="block text-xs font-medium text-white mb-1"
        >
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        id={uniqueId}
        className="appearance-none border bg-no-repeat bg-small-panel text-white border-gray-600 text-sm rounded-lg block w-full p-2.5 outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
