import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar  from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/index';
import Cadastro from './pages/Cadastro/Cadastro';
import Contatos from './pages/Contatos/Contatos';
import Destinos from './pages/Destinos/Destinos';
import Promocoes from './pages/Promocoes/Promocoes';

export default function Rotas() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/contatos" element={<Contatos/>}/>
            <Route path="/destinos" element={<Destinos/>}/>
            <Route path="/promocoes" element={<Promocoes/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}
