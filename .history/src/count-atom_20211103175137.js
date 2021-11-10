import { atom, useAtom } from "jotai";
import { selectAtom } from "jotai/utils";
import { focusAtom } from "jotai/optics";
export const countAtom = atom({ a: 0, b: 0 });
export const useSelectAtom = (prop) =>
  useAtom(selectAtom(countAtom, (s) => s[prop]));

export const useFocusAtom = (prop) =>
  useAtom(focusAtom(countAtom, (optic) => optic.prop(prop)));

export const totalCount = atom((get) => get(countAtom).a + get(countAtom).b));
