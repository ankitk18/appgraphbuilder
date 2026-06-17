import { GraphCanvas } from "./components/canvas/graph-canvas";
import { TopBar } from "./components/layout/top-bar";
import { Sidebar } from "./components/layout/sidebar";

import { useAppStore } from "./store/app-store";

export default function App() {
  const triggerAddNode = useAppStore((state) => state.triggerAddNode);

  return (
    <div className="h-screen bg-[#222831] text-[#EEEEEE]">
      <div className="flex h-full flex-col">
        <TopBar
          onAddNode={triggerAddNode}
          onFitView={() => {
            console.log("Fit View");
          }}
        />

        <div className="flex flex-1 overflow-hidden">
          <Sidebar />

          <main className="flex-1 overflow-hidden">
            <GraphCanvas />
          </main>
        </div>
      </div>
    </div>
  );
}
