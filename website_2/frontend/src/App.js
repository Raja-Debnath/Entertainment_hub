import './App.css';
import Nav from './components/Navi'
import SignUp1 from './components/signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/'element={<h1> home page </h1>} />
        <Route path='/login'element={<h1> login </h1>} />
        <Route path='/signup'element={<SignUp1/>} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
