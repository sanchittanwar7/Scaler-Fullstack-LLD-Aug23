import './App.css';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Watchlist from './components/Watchlist';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      {/* Read more about react-router-dom here: https://reactrouter.com/en/main/start/tutorial */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element = {
              <>
                <Banner />
                <Movies />
              </>
            }
          />
          <Route
            path="/watchlist"
            element = {
              <Watchlist />
            }
          />          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
