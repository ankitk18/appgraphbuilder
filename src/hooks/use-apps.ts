import { useQuery } from "@tanstack/react-query";

import type { AppItem } from "../types/graph";

export function useApps() {
  return useQuery<AppItem[]>({
    queryKey: ["apps"],

    queryFn: async () => {
      const response = await fetch("/api/apps");

      if (!response.ok) {
        throw new Error("Failed to fetch apps");
      }

      return response.json();
    },
  });
}
