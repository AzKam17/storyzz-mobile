import { observable } from "@legendapp/state";

interface User {
  id: string;
}

export const session$ = observable<User | null>(null);
