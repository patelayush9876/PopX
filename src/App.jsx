import Home from './components/Home.jsx'
import './App.css'
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Setting from './components/Setting.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Setting />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
