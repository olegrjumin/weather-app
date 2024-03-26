"use client";

import { usePathname, useRouter } from "next/navigation";
import { UnitParamerter } from "../lib/unit-parameter";

import { Select } from "./ui/select";

export const HeaderPanel = ({
  queryUnit = "m",
}: {
  queryUnit?: UnitParamerter;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const setQueryString = (key: string, value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set(key, value);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setQueryString("unit", value);
  };

  return (
    <div className="container mx-auto max-w-4xl flex justify-end my-4">
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
