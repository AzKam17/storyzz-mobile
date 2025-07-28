import { useIsSignedIn } from "@/hooks/auth/useIsSignedIn";

export function useIsSignedOut() {
	return !useIsSignedIn()
}
