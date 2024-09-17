import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Bugs from './pages/bugs/Bugs';

function App() {
  window.onscroll = function () {
    handleScroll()
  }

  const handleScroll = () => {
    var navbar = document.querySelector('.navbar')
    var menu = document.querySelector('.navbar-menu-list')
    var scroll = window.scrollY

    if (scroll > 60) {
      navbar?.classList.add('fixed')
      menu?.classList.add('d-flex')
    } else {
      navbar?.classList.remove('fixed')
      menu?.classList.remove('d-flex')
    }
  }

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bugs" element={<Bugs />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
