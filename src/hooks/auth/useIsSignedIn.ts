import { SessionState } from "@/states/auth";
import { useAtomValue } from "jotai";

export function useIsSignedIn() {
  const e = useAtomValue(SessionState);
  return !!e;
}
