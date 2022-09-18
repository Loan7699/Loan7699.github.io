import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import ChatPage from './pages/ChatPage';
import Explore from './pages/Explore';
import LoginLogout from './pages/LoginLogout';

import './App.css';
import DetailUser from './pages/DetailUser';

function App() {

  return (
    <div className="App">

      {/* <Routes>
        <Route path="/" element={<LoginLogout />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/detail" element={<DetailUser />} />
      </Routes>
    </div>
  );
}

export default App;

