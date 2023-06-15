import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ReactDOM from "react-dom/client";

// STYLE
import "./index.css";
import "./styles/index.scss";
import "./fonts/line-awesome-1.3.0/css/line-awesome.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "context/AuthContext";
import { CookiesProvider } from "react-cookie";

document
  .getElementsByTagName("html")[0]
  .setAttribute("dir", import.meta.env.VITE_LRT_OR_RTL);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: false,
    },
  },
});

root.render(
  // <React.StrictMode>
  <QueryClientProvider client={client}>
    <CookiesProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CookiesProvider>
  </QueryClientProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
