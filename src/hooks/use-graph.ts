import { useQuery } from "@tanstack/react-query";

import type { GraphResponse } from "../types/graph";

export function useGraph(appId: string | null) {
  return useQuery<GraphResponse>({
    queryKey: ["graph", appId],

    enabled: !!appId,

    queryFn: async () => {
      const response = await fetch(`/api/apps/${appId}/graph`);

      if (!response.ok) {
        throw new Error("Failed to fetch graph");
      }

      return response.json();
    },
  });
}
