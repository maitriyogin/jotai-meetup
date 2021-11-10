import { atom, useAtom } from "jotai";
import { selectAtom } from "jotai/utils";
import { focusAtom } from "jotai/optics";
export const countAtom = atom({ a: 0, b: 0 });
export const useSelectAtom = (prop) =>
  useAtom(selectAtom(countAtom, (s) => s[prop]));

export const useFocusAtom = (prop) =>
  useAtom(focusAtom(countAtom, (optim) => optic.prop(prop)));
