import { http, HttpResponse } from "msw";

import { apps, graphs } from "./data";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const handlers = [
  http.get("/api/apps", async () => {
    await sleep(800);

    return HttpResponse.json(apps);
  }),

  http.get("/api/apps/:appId/graph", async ({ params }) => {
    await sleep(1000);

    const graph = graphs[params.appId as string];

    if (!graph) {
      return HttpResponse.json(
        {
          message: "Graph not found",
        },
        {
          status: 404,
        },
      );
    }

    return HttpResponse.json(graph);
  }),
];
