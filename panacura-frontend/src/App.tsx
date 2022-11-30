import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import MainApp from './main/MainApp';

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#565656",
  //   },
  //   secondary: {
  //     main: "#f44336",
  //   },
  // },
});

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{MainApp()}</ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
