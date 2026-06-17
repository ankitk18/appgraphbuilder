import type { Edge, Node } from "@xyflow/react";

export type NodeStatus = "healthy" | "degraded" | "down";

export interface ServiceNodeData extends Record<string, unknown> {
  name: string;
  description: string;
  status: NodeStatus;
  load: number;
}

export type ServiceNodeType = Node<ServiceNodeData>;

export interface GraphResponse {
  nodes: ServiceNodeType[];
  edges: Edge[];
}

export interface AppItem {
  id: string;
  name: string;
}
