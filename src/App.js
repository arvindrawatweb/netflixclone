
import Home from "./Component/Layout/pages/Home";
import Header from "./Component/Layout/Header";
import '../node_modules/bootstrap5/src/css/bootstrap.min.css';
import '../node_modules/bootstrap5/src/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Footer from "./Component/Footer";
import Notfound from "./Component/Layout/pages/Notfound";
import Details from "./Component/Layout/pages/Details";
function App() {
  return (
<BrowserRouter>
<Header/>
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='*' element={<Notfound/>}></Route>
        <Route path='/details/:id' element={<Details/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
