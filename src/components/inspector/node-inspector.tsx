import { useAppStore } from "../../store/app-store";

import type { ServiceNodeType, ServiceNodeData } from "../../types/graph";

import { RuntimeTab } from "./runtime-tab";

interface Props {
  node: ServiceNodeType | null;

  onUpdate: (nodeId: string, data: Partial<ServiceNodeData>) => void;

  onDelete: (nodeId: string) => void;
}

export function NodeInspector({ node, onUpdate, onDelete }: Props) {
  const activeInspectorTab = useAppStore((state) => state.activeInspectorTab);

  const setActiveInspectorTab = useAppStore(
    (state) => state.setActiveInspectorTab,
  );

  if (!node) {
    return (
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#EEEEEE]">
          No node selected
        </h3>

        <p className="mt-2 text-sm text-[#EEEEEE]/60">
          Select a service node from the canvas.
        </p>
      </div>
    );
  }

  const statusClasses = {
    healthy: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",

    degraded: "bg-amber-500/20 text-amber-400 border border-amber-500/30",

    down: "bg-red-500/20 text-red-400 border border-red-500/30",
  };

  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#EEEEEE]">Service Node</h2>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${
            statusClasses[node.data.status]
          }`}
        >
          {node.data.status}
        </span>
      </div>

      <div className="mt-5 flex gap-2">
        <button
          onClick={() => setActiveInspectorTab("config")}
          className={`rounded-md px-3 py-2 text-sm transition-colors ${
            activeInspectorTab === "config"
              ? "bg-[#00ADB5] text-white"
              : "bg-[#393E46] text-[#EEEEEE]"
          }`}
        >
          Config
        </button>

        <button
          onClick={() => setActiveInspectorTab("runtime")}
          className={`rounded-md px-3 py-2 text-sm transition-colors ${
            activeInspectorTab === "runtime"
              ? "bg-[#00ADB5] text-white"
              : "bg-[#393E46] text-[#EEEEEE]"
          }`}
        >
          Runtime
        </button>
      </div>

      {activeInspectorTab === "config" && (
        <div className="mt-5 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#EEEEEE]">
              Node Name
            </label>

            <input
              value={node.data.name}
              onChange={(e) =>
                onUpdate(node.id, {
                  name: e.target.value,
                })
              }
              className="w-full rounded-lg border border-[#4A4F57] bg-[#393E46] px-3 py-2 text-[#EEEEEE] outline-none focus:border-[#00ADB5]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#EEEEEE]">
              Description
            </label>

            <textarea
              value={node.data.description ?? ""}
              onChange={(e) =>
                onUpdate(node.id, {
                  description: e.target.value,
                })
              }
              rows={4}
              className="w-full rounded-lg border border-[#4A4F57] bg-[#393E46] px-3 py-2 text-[#EEEEEE] outline-none focus:border-[#00ADB5]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#EEEEEE]">
              Load Percentage
            </label>

            <input
              type="range"
              min={0}
              max={100}
              value={node.data.load}
              onChange={(e) =>
                onUpdate(node.id, {
                  load: Number(e.target.value),
                })
              }
              className="w-full accent-[#00ADB5]"
            />

            <input
              type="number"
              min={0}
              max={100}
              value={node.data.load}
              onChange={(e) =>
                onUpdate(node.id, {
                  load: Number(e.target.value),
                })
              }
              className="mt-3 w-full rounded-lg border border-[#4A4F57] bg-[#393E46] px-3 py-2 text-[#EEEEEE] outline-none focus:border-[#00ADB5]"
            />
          </div>

          <button
            onClick={() => onDelete(node.id)}
            className="w-full rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition-colors hover:bg-red-600"
          >
            Delete Node
          </button>
        </div>
      )}

      {activeInspectorTab === "runtime" && (
        <div className="mt-5">
          <RuntimeTab node={node} />
        </div>
      )}
    </div>
  );
}
