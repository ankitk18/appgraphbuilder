import type { Node } from "@xyflow/react";

import type { ServiceNodeData } from "../../types/graph";

interface Props {
  node: Node<ServiceNodeData>;
}

export function RuntimeTab({ node }: Props) {
  const statusColors = {
    healthy: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",

    degraded: "bg-amber-500/20 text-amber-400 border border-amber-500/30",

    down: "bg-red-500/20 text-red-400 border border-red-500/30",
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-[#4A4F57] bg-[#393E46] p-4">
        <div className="text-xs uppercase tracking-wide text-[#EEEEEE]/50">
          Node ID
        </div>

        <div className="mt-1 font-mono text-sm text-[#EEEEEE]">{node.id}</div>
      </div>

      <div className="rounded-lg border border-[#4A4F57] bg-[#393E46] p-4">
        <div className="text-xs uppercase tracking-wide text-[#EEEEEE]/50">
          Status
        </div>

        <div className="mt-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${
              statusColors[node.data.status]
            }`}
          >
            {node.data.status}
          </span>
        </div>
      </div>

      <div className="rounded-lg border border-[#4A4F57] bg-[#393E46] p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wide text-[#EEEEEE]/50">
            Load
          </span>

          <span className="text-sm font-medium text-[#EEEEEE]">
            {node.data.load}%
          </span>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#222831]">
          <div
            className="h-full rounded-full bg-[#00ADB5]"
            style={{
              width: `${node.data.load}%`,
            }}
          />
        </div>
      </div>

      <div className="rounded-lg border border-[#4A4F57] bg-[#393E46] p-4">
        <div className="text-xs uppercase tracking-wide text-[#EEEEEE]/50">
          Description
        </div>

        <div className="mt-2 text-sm text-[#EEEEEE]/80">
          {node.data.description || "No description available"}
        </div>
      </div>
    </div>
  );
}
