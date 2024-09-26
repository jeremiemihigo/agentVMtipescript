import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App.tsx";
import ContexteAll from "./Context.tsx";
import "./index.css";
import { store } from "./store/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ContexteAll>
        <App />
      </ContexteAll>
    </ReduxProvider>
  </StrictMode>
);
