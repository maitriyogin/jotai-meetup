import { atom, useAtom } from "jotai";
import { selectAtom } from "jotai/utils";

export const countAtom = atom({ a: 0, b: 0 });
export const useSelectAtom = (prop) => {
  useAtom(
    selectAtom(countAtom, (s) => {
      console.log(s);
      return s[prop];
    })
  );
};
