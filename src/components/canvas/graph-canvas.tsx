import { useCallback, useEffect } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  addEdge,
  type Edge,
  type Connection,
} from "@xyflow/react";

import { useGraph } from "../../hooks/use-graph";
import { useAppStore } from "../../store/app-store";

import type { ServiceNodeType, ServiceNodeData } from "../../types/graph";

import { ServiceNode } from "./service-node";
import { NodeInspector } from "../inspector/node-inspector";

const nodeTypes = {
  service: ServiceNode,
};

export function GraphCanvas() {
  const selectedAppId = useAppStore((state) => state.selectedAppId);

  const selectedNodeId = useAppStore((state) => state.selectedNodeId);

  const setSelectedNodeId = useAppStore((state) => state.setSelectedNodeId);

  const addNodeTrigger = useAppStore((state) => state.addNodeTrigger);

  const graph = useGraph(selectedAppId);

  const [nodes, setNodes, onNodesChange] = useNodesState<ServiceNodeType>([]);

  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  useEffect(() => {
    if (!graph.data) return;

    setNodes(graph.data.nodes);
    setEdges(graph.data.edges);
  }, [graph.data, setNodes, setEdges]);

  useEffect(() => {
    if (addNodeTrigger === 0) return;

    const newNode: ServiceNodeType = {
      id: crypto.randomUUID(),

      type: "service",

      position: {
        x: 200 + Math.random() * 300,
        y: 150 + Math.random() * 200,
      },

      data: {
        name: "New Service",
        description: "New service node",
        status: "healthy",
        load: 0,
      },
    };

    setNodes((current) => [...current, newNode]);

    setSelectedNodeId(newNode.id);
  }, [addNodeTrigger, setNodes, setSelectedNodeId]);

  const selectedNode = nodes.find((node) => node.id === selectedNodeId) ?? null;

  const updateNodeData = (
    nodeId: string,
    updates: Partial<ServiceNodeData>,
  ) => {
    setNodes((currentNodes) =>
      currentNodes.map((node) =>
        node.id === nodeId
          ? {
              ...node,
              data: {
                ...node.data,
                ...updates,
              },
            }
          : node,
      ),
    );
  };

  const handleDeleteNode = useCallback((nodeId: string) => {
    setNodes((currentNodes) =>
      currentNodes.filter((node) => node.id !== nodeId),
    );

    setEdges((currentEdges) =>
      currentEdges.filter(
        (edge) => edge.source !== nodeId && edge.target !== nodeId,
      ),
    );

    setSelectedNodeId(null);
  }, [setNodes, setEdges, setSelectedNodeId]);

  useEffect(() => {
    const handleDelete = (event: KeyboardEvent) => {
      if (event.key !== "Delete") {
        return;
      }

      if (!selectedNodeId) return;

      handleDeleteNode(selectedNodeId);
    };

    window.addEventListener("keydown", handleDelete);

    return () => window.removeEventListener("keydown", handleDelete);
  }, [selectedNodeId, handleDeleteNode]);

  const onConnect = (connection: Connection) => {
    setEdges((currentEdges) => addEdge(connection, currentEdges));
  };

  if (graph.isLoading) {
    return (
      <div className="flex h-full items-center justify-center bg-[#222831] text-[#EEEEEE]">
        Loading graph...
      </div>
    );
  }

  if (graph.isError) {
    return (
      <div className="flex h-full items-center justify-center bg-[#222831] text-red-400">
        Failed to load graph
      </div>
    );
  }

  return (
    <div className="flex h-full bg-[#222831]">
      <div className="flex-1">
        <ReactFlow
          className="bg-[#222831]"
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={(_, node) => setSelectedNodeId(node.id)}
          fitView
        >
          <Controls />

          <Background
            variant={BackgroundVariant.Dots}
            gap={20}
            size={1}
            color="#4A4F57"
          />
        </ReactFlow>
      </div>

      <div className="w-80 border-l border-[#4A4F57] bg-[#222831]">
        <NodeInspector
          node={selectedNode}
          onUpdate={updateNodeData}
          onDelete={handleDeleteNode}
        />
      </div>
    </div>
  );
}
