import { useRoutes } from 'react-router-dom';
import AppBar from './components/AppBar';
import Homepage from './pages/Homepage';
// import History from './pages/History';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Homepage /> },
    // { path: '/history', element: <History /> },
  ]);
  return routes;
};

const MainApp = () => {
  return (
    <>
      <AppBar></AppBar>
      <App />
    </>
  );
};
export default MainApp;
