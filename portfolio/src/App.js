import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from '../src/assets/logo.svg';
import './App.css';
import Header from './components/Header';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route
            path='/'
            element={<Profile userName="karuirujackson" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
