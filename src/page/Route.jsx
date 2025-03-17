import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Home from './Home';
import Loading from './Loading';
import Result from './Result';

export default function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="*" element={<Home />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/result" element={<Result />} />
    </ReactRouterRoutes>
  );
}
