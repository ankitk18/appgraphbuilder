import type { AppItem, GraphResponse } from "../types/graph";

export const apps: AppItem[] = [
  {
    id: "payments",
    name: "Payments",
  },
  {
    id: "analytics",
    name: "Analytics",
  },
  {
    id: "orders",
    name: "Orders",
  },
];

export const graphs: Record<string, GraphResponse> = {
  payments: {
    nodes: [
      {
        id: "1",
        type: "service",
        position: {
          x: 100,
          y: 100,
        },
        data: {
          name: "Gateway",
          description: "Public API Gateway",
          status: "healthy",
          load: 50,
        },
      },
      {
        id: "2",
        type: "service",
        position: {
          x: 450,
          y: 100,
        },
        data: {
          name: "Orders",
          description: "Order Processor",
          status: "degraded",
          load: 72,
        },
      },
      {
        id: "3",
        type: "service",
        position: {
          x: 800,
          y: 100,
        },
        data: {
          name: "Database",
          description: "Primary DB",
          status: "healthy",
          load: 20,
        },
      },
    ],

    edges: [
      {
        id: "e1-2",
        source: "1",
        target: "2",
      },
      {
        id: "e2-3",
        source: "2",
        target: "3",
      },
    ],
  },
};
