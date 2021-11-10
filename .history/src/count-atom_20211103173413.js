import { atom, useAtom, selectAtom } from "jotai";

export const countAtom = atom({ a: 0, b: 0 });
export const useSelectAtom = (prop) => {
  useAtom(
    selectAtom(countAtom, (s) => {
      console.log(s);
      return s[prop];
    })
  );
};
