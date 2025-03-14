import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import Home from "./Home";

export default function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="*" element={<Home />} />
    </ReactRouterRoutes>
  );
}
