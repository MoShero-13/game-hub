import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "./components/ui/provider";
import { ColorModeProvider } from "./components/ui/color-mode";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <ColorModeProvider>
          <App />
          <ReactQueryDevtools />
        </ColorModeProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
