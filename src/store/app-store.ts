import { create } from "zustand";

type Tab = "config" | "runtime";

interface AppStore {
  selectedAppId: string | null;
  selectedNodeId: string | null;
  activeInspectorTab: Tab;
  addNodeTrigger: number;

  triggerAddNode: () => void;
  
  setSelectedAppId: (id: string) => void;

  setSelectedNodeId: (id: string | null) => void;

  setActiveInspectorTab: (tab: Tab) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  selectedAppId: "payments",
  selectedNodeId: null,
  activeInspectorTab: "config",
  addNodeTrigger: 0,

  triggerAddNode: () =>
    set((state) => ({
      addNodeTrigger: state.addNodeTrigger + 1,
    })),
  setSelectedAppId: (selectedAppId) => set({ selectedAppId }),

  setSelectedNodeId: (selectedNodeId) => set({ selectedNodeId }),

  setActiveInspectorTab: (activeInspectorTab) => set({ activeInspectorTab }),
}));
