import { Home, Boxes, Network, Settings } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-16 border-r border-[#4A4F57] bg-[#222831] flex flex-col items-center gap-4 py-5">
      <button className="flex h-10 w-10 items-center justify-center rounded-lg text-[#EEEEEE] transition-all hover:bg-[#393E46] hover:text-[#00ADB5]">
        <Home className="h-5 w-5" />
      </button>

      <button className="flex h-10 w-10 items-center justify-center rounded-lg text-[#EEEEEE] transition-all hover:bg-[#393E46] hover:text-[#00ADB5]">
        <Boxes className="h-5 w-5" />
      </button>

      <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#393E46] text-[#00ADB5]">
        <Network className="h-5 w-5" />
      </button>

      <button className="flex h-10 w-10 items-center justify-center rounded-lg text-[#EEEEEE] transition-all hover:bg-[#393E46] hover:text-[#00ADB5]">
        <Settings className="h-5 w-5" />
      </button>
    </aside>
  );
}
