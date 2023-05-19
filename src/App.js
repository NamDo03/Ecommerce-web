import Home from './pages/Home';
import ListProduct from './pages/ListProduct';
import Product from './pages/Product';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <ScrollToTop>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/login' element={<LogIn />} />
              <Route exact path='/signup' element={<SignUp />} />
              <Route path='/products' element={<ListProduct />} />
              <Route path='/products/kb' element={<ListProduct filter='kb' />} />
              <Route path='/products/kc' element={<ListProduct filter='kc' />} />
              <Route path='/products/hp' element={<ListProduct filter='hp' />} />
              <Route path='/products/sw' element={<ListProduct filter='sw' />} />
              <Route path='/products/ac' element={<ListProduct filter='ac' />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='/about' element={<About />} />
              <Route path='/checkout' element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
              <Route path='/*' element={<NotFound></NotFound>} />
            </Routes>
            <Footer />
          </ScrollToTop>
        </AuthContextProvider>
      </Router>

    </div>
  );
}

export default App;
