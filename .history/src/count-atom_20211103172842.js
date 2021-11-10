import { atom, useAtom } from "jotai";

export const countAtom = atom({ a: 0, b: 0 });
export const useSelectAtom = (prop) =>
  useAtom(selectAtom(countAtom, (s) => s[prop]));
