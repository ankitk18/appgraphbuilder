import { ChevronDown } from "lucide-react";

import { useApps } from "../../hooks/use-apps";
import { useAppStore } from "../../store/app-store";

export function AppSelector() {
  const { data, isLoading } = useApps();

  const selectedAppId = useAppStore((state) => state.selectedAppId);

  const setSelectedAppId = useAppStore((state) => state.setSelectedAppId);

  if (isLoading) {
    return <div className="p-4 text-sm text-[#EEEEEE]/70">Loading apps...</div>;
  }

  return (
    <div className="border-b border-[#4A4F57] p-4">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#00ADB5]">
        Applications
      </h3>

      <div className="relative">
        <select
          value={selectedAppId ?? ""}
          onChange={(e) => setSelectedAppId(e.target.value)}
          className="w-full appearance-none rounded-lg border border-[#4A4F57] bg-[#393E46] px-3 py-2 pr-10 text-sm text-[#EEEEEE] outline-none transition-colors hover:border-[#00ADB5] focus:border-[#00ADB5]"
        >
          {data?.map((app) => (
            <option key={app.id} value={app.id}>
              {app.name}
            </option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#EEEEEE]/70" />
      </div>
    </div>
  );
}
