import { User } from "@/types";
import useSWR from "swr";

export function useUser() {
  return useSWR<User>("/api/users");
}
