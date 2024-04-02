"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { UnitParamerter } from "../lib/unit-parameter";

import { Select } from "./ui/select";

export const HeaderPanel = ({
  queryUnit = "m",
}: {
  queryUnit?: UnitParamerter;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const setQueryString = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setQueryString("unit", value);
  };

  return (
    <div className="flex justify-end w-full mb-4">
      <div className="max-w-[100px]">
        <Select
          value={queryUnit}
          label="Select unit"
          onChange={onChange}
          options={["m", "f", "s"]}
        />
      </div>
    </div>
  );
};
