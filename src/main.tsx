import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import GetStarted from "./pages/GetStarted.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/home" element={<App />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  </StrictMode>,
);
