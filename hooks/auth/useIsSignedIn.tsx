import { SessionState } from "@/states/auth";
import { useRecoilValue } from "recoil";

export const useIsSignedIn = function () {
  const session = useRecoilValue(SessionState);
  return {signedIn: !!session.user};
};
