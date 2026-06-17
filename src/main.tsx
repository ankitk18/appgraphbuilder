import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@xyflow/react/dist/style.css";

import App from "./App";
import { QueryProvider } from "./providers/query-provider";
document.documentElement.classList.add("dark");
async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser");

    await worker.start({
      onUnhandledRequest: "bypass",
    });
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <QueryProvider>
        <App />
      </QueryProvider>
    </React.StrictMode>,
  );
});
