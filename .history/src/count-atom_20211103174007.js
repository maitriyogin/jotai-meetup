import { atom, useAtom } from "jotai";
import { selectAtom } from "jotai/utils";

export const countAtom = atom({ a: 0, b: 0 });
export const useSelectAtom = (prop) => {
  return useAtom(
    selectAtom(countAtom, (s) => {
      const a = s[prop];
      console.log(a);
      return a;
    })
  );
};
