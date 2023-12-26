import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import LoadingPage from './components/LoadingPage';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <LoadingPage/>
    }

  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
            <Routes>
              <Route path="" element={<Home/>} exact />
              <Route path="/home"  element={<Home/>} exact/>
              <Route path="/menu"  element={<Menu/>} exact/>
              <Route path="/about"  element={<About />} exact/>
              <Route path="/contact" element={<Contact />} exact/>
            </Routes>  
        </BrowserRouter>
   
        <Footer />
    </div>
  );
}

export default App;

