import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import ChatPage from './pages/ChatPage';
import Explore from './pages/Explore';
import Header from './components/Header/index.jsx';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;

