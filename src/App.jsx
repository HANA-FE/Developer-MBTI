import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Routes from './page/Route';
import Layout from './component/layout/Layout';

const snackbarOptions = {
  maxSnack: 2,
  autoHideDuration: 2000,
  anchorOrigin: { vertical: 'top', horizontal: 'center' },
};
function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider {...snackbarOptions}>
        <Layout>
          <Routes />
        </Layout>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
