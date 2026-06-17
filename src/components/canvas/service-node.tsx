import { Handle, Position, type NodeProps } from "@xyflow/react";

import type { ServiceNodeData } from "../../types/graph";

export function ServiceNode({ data }: NodeProps) {
  const nodeData = data as ServiceNodeData;

  const statusClasses = {
    healthy: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    degraded: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    down: "bg-red-500/20 text-red-400 border border-red-500/30",
  };

  return (
    <div className="min-w-55 rounded-xl border border-[#4A4F57] bg-[#393E46] p-4 shadow-lg transition-all hover:border-[#00ADB5] hover:shadow-cyan-500/10">
      <Handle
        type="target"
        position={Position.Left}
        className="h-3! w-3! border-2! border-[#00ADB5]! bg-[#222831]!"
      />

      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-[#EEEEEE]">
            {nodeData.name}
          </h3>

          <p className="mt-1 text-xs text-[#EEEEEE]/60">
            {nodeData.description}
          </p>
        </div>
      </div>

      <div className="mt-3">
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
            statusClasses[nodeData.status]
          }`}
        >
          {nodeData.status}
        </span>
      </div>

      <div className="mt-4">
        <div className="mb-1 flex items-center justify-between text-xs">
          <span className="text-[#EEEEEE]/60">Load</span>

          <span className="font-medium text-[#EEEEEE]">{nodeData.load}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-[#222831]">
          <div
            className="h-full rounded-full bg-[#00ADB5]"
            style={{
              width: `${nodeData.load}%`,
            }}
          />
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="h-3! w-3! border-2! border-[#00ADB5]! bg-[#222831]!"
      />
    </div>
  );
}
