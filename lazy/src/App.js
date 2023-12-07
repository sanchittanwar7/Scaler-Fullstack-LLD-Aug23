import { useState, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Comp from './components/Comp';
// import Home from './pages/Home';
// import About from './pages/About';
// import Products from './pages/Products';
// import Chat from './pages/Chat';
// import { moviesData } from './data';

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Products = lazy(() => import('./pages/Products'))
const Chat = lazy(() => import('./pages/Chat'))

function App() {
  const [data, setData] = useState([])

  // Dynamic Importing
  const handleClick = () => {
    import('./data').then(module => {
      // console.log(module)
      setData(module.moviesData)
    })
    
  }
  return (
    <div className="App">
      {/* <button onClick={handleClick}>Load Data</button>
      {
        data.length === 0 ? "" : JSON.stringify(data)
      } */}

      

        {/* <BrowserRouter>
        <Navbar />
        <Suspense fallback={<h2>Loading....</h2>}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/chat' element={<Chat />}></Route>
        </Routes>
        </Suspense>
        </BrowserRouter> */}

        <Comp dark />
        <Comp light />

    </div>
  );
}

export default App;
