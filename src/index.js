import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import DataContextProvider from "./Context/DataContext";
import FeatureContextProvider from "./Context/FeatureContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <DataContextProvider>
        <FeatureContextProvider>
          <App />
        </FeatureContextProvider>
      </DataContextProvider>
    </Router>
  </StrictMode>
);
