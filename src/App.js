import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import RestaurantCard from './component/Restaurant/RestaurantCard';
import Cart from './component/Cart/Cart';


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      <Cart/>
    </ThemeProvider>

  );
}

export default App;
