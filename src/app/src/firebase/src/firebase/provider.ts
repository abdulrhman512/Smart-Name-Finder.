import { useMemo } from "react";
import { firestore, auth } from "./index";

export function useMemoFirebase(cb: () => any, deps: any[]) {
  return useMemo(cb, deps);
}
