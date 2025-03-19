import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import { NAME_INPUT_PATH, TEST_PATH, RESULT_PATH } from '@/src/constant';
import Home from './Home';
import Loading from './Loading';
// import Result from './Result';
import Test from './Test';
import TestResult from './TestResult';
import InputPage from './InputPage';

export default function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="*" element={<Home />} />
      <Route path={NAME_INPUT_PATH} element={<InputPage />} />
      <Route path={TEST_PATH} element={<Test />} />
      <Route path="/loading" element={<Loading />} />
      {/* <Route path="/result" element={<Result />} /> */}
      <Route path={RESULT_PATH} element={<TestResult />} />
    </ReactRouterRoutes>
  );
}
