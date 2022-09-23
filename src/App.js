import Home from "./pages/Home";
import './stylesheets/App.css';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
