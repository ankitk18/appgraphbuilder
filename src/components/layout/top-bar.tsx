import { Plus, ScanSearch } from "lucide-react";

interface Props {
  onAddNode: () => void;
  onFitView: () => void;
}

export function TopBar({ onAddNode, onFitView }: Props) {
  return (
    <header className="h-14 border-b border-[#4A4F57] bg-[#222831] px-4 flex items-center justify-between">
      <h1 className="text-lg font-semibold text-[#EEEEEE]">
        App Graph Builder
      </h1>

      <div className="flex items-center gap-2">
        <button
          onClick={onAddNode}
          className="flex items-center gap-2 rounded-md bg-[#00ADB5] px-3 py-2 text-sm font-medium text-[#EEEEEE] transition-all hover:brightness-110"
        >
          <Plus className="h-4 w-4" />
          Add Node
        </button>

        <button
          onClick={onFitView}
          className="flex items-center gap-2 rounded-md border border-[#4A4F57] bg-[#393E46] px-3 py-2 text-sm font-medium text-[#EEEEEE] transition-all hover:bg-[#4A4F57]"
        >
          <ScanSearch className="h-4 w-4" />
          Fit View
        </button>
      </div>
    </header>
  );
}
