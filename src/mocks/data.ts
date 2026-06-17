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
        position: { x: 50, y: 250 },
        data: {
          name: "Client",
          description: "Web & Mobile Clients",
          status: "healthy",
          load: 35,
        },
      },
      {
        id: "2",
        type: "service",
        position: { x: 300, y: 250 },
        data: {
          name: "API Gateway",
          description: "Ingress Layer",
          status: "healthy",
          load: 62,
        },
      },
      {
        id: "3",
        type: "service",
        position: { x: 550, y: 250 },
        data: {
          name: "Load Balancer",
          description: "Traffic Distribution",
          status: "healthy",
          load: 70,
        },
      },
      {
        id: "4",
        type: "service",
        position: { x: 850, y: 100 },
        data: {
          name: "Auth Service",
          description: "JWT Authentication",
          status: "healthy",
          load: 40,
        },
      },
      {
        id: "5",
        type: "service",
        position: { x: 850, y: 250 },
        data: {
          name: "Orders Service",
          description: "Order Management",
          status: "degraded",
          load: 78,
        },
      },
      {
        id: "6",
        type: "service",
        position: { x: 850, y: 400 },
        data: {
          name: "Payment Service",
          description: "Payment Processing",
          status: "healthy",
          load: 66,
        },
      },
      {
        id: "7",
        type: "service",
        position: { x: 1150, y: 100 },
        data: {
          name: "Redis Cache",
          description: "Session Storage",
          status: "healthy",
          load: 30,
        },
      },
      {
        id: "8",
        type: "service",
        position: { x: 1150, y: 250 },
        data: {
          name: "Kafka",
          description: "Event Streaming",
          status: "healthy",
          load: 82,
        },
      },
      {
        id: "9",
        type: "service",
        position: { x: 1150, y: 400 },
        data: {
          name: "Stripe",
          description: "External Payments",
          status: "healthy",
          load: 55,
        },
      },
      {
        id: "10",
        type: "service",
        position: { x: 1450, y: 100 },
        data: {
          name: "PostgreSQL",
          description: "Primary Database",
          status: "healthy",
          load: 45,
        },
      },
      {
        id: "11",
        type: "service",
        position: { x: 1450, y: 250 },
        data: {
          name: "Analytics",
          description: "Business Metrics",
          status: "degraded",
          load: 88,
        },
      },
    ],

    edges: [
      { id: "e1", source: "1", target: "2" },
      { id: "e2", source: "2", target: "3" },

      { id: "e3", source: "3", target: "4" },
      { id: "e4", source: "3", target: "5" },
      { id: "e5", source: "3", target: "6" },

      { id: "e6", source: "4", target: "7" },
      { id: "e7", source: "5", target: "8" },
      { id: "e8", source: "6", target: "9" },

      { id: "e9", source: "7", target: "10" },
      { id: "e10", source: "8", target: "11" },
    ],
  },
};
