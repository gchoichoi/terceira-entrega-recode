import React from "react";

import "../pages/Promocoes/Promocoes.css";
import "../index.css";

export default class BannerPromocao extends React.Component{
    render(){
        return(
        <div className="jumbotron jumbotron-fluid banner-promocao">

            <div className="container">
                <h1 className="display-4">As melhores promoções estão aqui!</h1>
                <p className="lead">Venha conferir essa seleção de pacotes incríveis 
                para visitar o país inteiro e o mundo também. Com a Oncovô Travels, tudo fica "logo ali"!</p>
            </div>
        </div>
        )
    }
}