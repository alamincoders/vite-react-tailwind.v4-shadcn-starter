import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./contexts/theme-provider";
import RouterProvider from "./routes";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider />
    </ThemeProvider>
  </StrictMode>,
);
