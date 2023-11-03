import { BrowserRouter } from "react-router-dom";
import WebRoutes from "./Routes/WebRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <WebRoutes />
    </BrowserRouter>
  );
}
