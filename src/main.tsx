import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { MemoryRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  </StrictMode>,
);
