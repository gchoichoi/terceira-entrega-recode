import React from "react";

class Footer extends React.Component{

    render() {
        return (
            <div className="rodapePrincipal bg-danger">
                <div className="container">
                    <div>
                        <nav className="rodapePrincipal-navMap-list">
                            <h4 className="navmap-list-title navmap-list-title-oncovo">Oncovô Travels</h4>
                            <a className="rodapePrincipal-navMap-link" href="#">Destinos</a>
                            <a className="rodapePrincipal-navMap-link" href="#">Promoções</a>
                            <a className="rodapePrincipal-navMap-link" href="#">Contato</a>
                            <a className="rodapePrincipal-navMap-link" href="#">Sobre nós</a>

                            <h4 className="navmap-list-title navmap-list-title-televenda">Televendas</h4>
                            <p className="rodapePrincipal-navMap-link"> (11) 5571-2751 / 5083-3884</p>
                            <p className="rodapePrincipal-navMap-link">Segunda a sexta: 09h às 21h</p>
                            <p className="rodapePrincipal-navMap-link">Sábado: 09h às 21h</p>
                            <p className="rodapePrincipal-navMap-link">Domingo: 10h às 16h20</p>

                            <h4 className="navmap-list-title navmap-list-title-pagamento">Formas de pagamento</h4>
                            <div className="formasPagamento">
                            <img src="./img/formasdepgmt/mastercard.svg"/>
                            <img src="./img/formasdepgmt/visa.svg"/>
                            <img src="./img/formasdepgmt/american-express.svg"/>
                            <img src="./img/formasdepgmt/elo.svg"/>
                            </div>
                        </nav>
                    </div>
                    <br/>
                    <p></p>
                </div>

            </div>
        )
        
    }
}

export default Footer;