import logo from './logo.png';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Account from "./pages/Account";
import Depart from "./pages/Depart";
import System from "./pages/System";
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Layout />}>
          <Route index element={<Account />} />
          <Route path = "/depart" element={<Depart />} />
          <Route path = "/system" element={<System />} /> 
          <Route path = "/*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    
    
    
    
    
    
    
    
    
    
    
    
    // <>
    // <ul>
    //   {menu.map((item) => (
    //     <li>
    //       <a href={`/${item}`}>{item}</a>
    //     </li>
    //   ))}
    // </ul>
    // </>
  );
}

export default App;
