import { BrowserRouter } from 'react-router-dom';
import Routes from './page/Route';
import Layout from './component/layout/Layout';
import Result from './page/Result';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
