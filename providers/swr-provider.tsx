"use client";
import { fetcher } from "@/services/fetcher";
import { SWRConfig } from "swr";
export function SwrProvider({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig value={{ fetcher: fetcher}}>
      {children}
    </SWRConfig>
  );
}
