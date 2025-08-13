import { SessionType } from "#/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

const storage = createJSONStorage<SessionType | null>(() => AsyncStorage);

export const SessionState = atomWithStorage<SessionType | null>(
  "session.state",
  null,
  storage
);
