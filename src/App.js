import './App.css';
import ReactDOM from "react-dom/client";
import Home from './Home/Home';
import Login from './Login/Login';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';

export default function App() {
  return(
    <div className='App'>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </div>





  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
