import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Home from './Home';
import Test from './Test';

export default function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="*" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </ReactRouterRoutes>
  );
}
