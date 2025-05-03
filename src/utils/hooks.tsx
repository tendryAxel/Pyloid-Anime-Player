import { ChangeEvent, useState } from "react";

export const useInput = (init?: string) => {
  const [stat, setStat] = useState(init ?? "");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStat(e.target.value);
  };

  return {
    stat,
    setStat,
    onChange,
  };
};
