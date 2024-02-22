import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import Container from './components/Layout/Container';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Container customClass='min-height'><Home /></Container>} />
        <Route path="/sobre" element={<Container customClass='min-height'><Empresa /></Container>} />
        <Route path="/contato" element={<Container customClass='min-height'><Contato /></Container>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
