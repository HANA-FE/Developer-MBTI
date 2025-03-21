import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import { NAME_INPUT_PATH, TEST_PATH, LOADING_PATH, RESULT_PATH } from '@/src/constant';
import Home from './Home';
import Loading from './Loading';
import Test from './Test';
import InputPage from './InputPage';
import Result from './Result';

export default function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="*" element={<Home />} />
      <Route path={NAME_INPUT_PATH} element={<InputPage />} />
      <Route path={TEST_PATH} element={<Test />} />
      <Route path={LOADING_PATH} element={<Loading />} />
      <Route path={RESULT_PATH} element={<Result />} />
    </ReactRouterRoutes>
  );
}
