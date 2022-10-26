//importar o React
import React from "react";
import { Link } from "react-router-dom";

//criar função com o elemento Header da página
class Header extends React.Component{
    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <div className="container">
                <Link className="navbar-brand text-light" to="/home">Oncovô Travels</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link text-light" to="/destinos">Destinos <span class="sr-only"></span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/promocoes">Promoções</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/contatos">Contato</Link>
                    </li>
                    

                    </ul>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" id="btnEntrar" class="btn btn-light me-2 b">Entrar</button>
                    <Link to="/cadastro" type="button" id="btnRegistrar" class="btn btn-danger">Cadastre-se</Link>
                </div>
            </div>

        </nav>
        )
    }
}

export default Header;