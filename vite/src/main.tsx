import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { sharedMethod } from "@sample/package";
import "./main.css";

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <div className="p-4 dark:text-gray-200">
        <h1 className="text-3xl p-2">Hello, Vite + React!</h1>
        <h2>{sharedMethod("test")}</h2>
        <p className="p-2">
          Edit <code>src/App.tsx</code> and save to test HMR updates.
        </p>
      </div>
    </StrictMode>,
  );
}
