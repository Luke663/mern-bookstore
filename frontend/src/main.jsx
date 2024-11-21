import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(
  // Allows routing (<Routes>, <Link>...) to be used in the app for switching between pages
  <BrowserRouter>
    {/* Enables snackbar notifications to be used in the app */}
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);
