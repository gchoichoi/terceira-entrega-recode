import React from "react";

export default function Pacotes(props){
  /*   Pacotes.propTypes = {
        titulo : PropType.string,

    } */
    return(
        <section id="selecao-pacotes" className="container">
            <h2>{props.titulo}</h2>
            <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3 espacamento">

                <div className="card" style="width: 12rem;">
                    <img src={props.imgDestino1} className="card-img-top card-posicao-imagem" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{props.destino1}</h5>
                    <p className="card-text">Pacotes a partir de:</p>
                    <a href="#" className="btn btn-danger">R${props.valor1}</a>
                    </div>
                </div>
            
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3 espacamento">

                <div className="card" style="width: 12rem;">
                    <img src={props.imgDestino2} className="card-img-top card-posicao-imagem" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{props.destino2}</h5>
                    <p className="card-text">Pacotes a partir de:</p>
                    <a href="#" className="btn btn-danger">R${props.valor2}</a>
                    </div>
                </div>
            
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3 espacamento">

                <div className="card" style="width: 12rem;">
                    <img src={props.imgDestino3} className="card-img-top card-posicao-imagem" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{props.destino3}</h5>
                    <p className="card-text">Pacotes a partir de:</p>
                    <a href="#" className="btn btn-danger">R${props.valor3}</a>
                    </div>
                </div>
            
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3 espacamento">

                <div className="card" style="width: 12rem;">
                    <img src={props.imgDestino4} className="card-img-top card-posicao-imagem" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{props.destino4}</h5>
                    <p className="card-text">Pacotes a partir de:</p>
                    <a href="#" className="btn btn-danger">R${props.valor4}</a>
                    </div>
                </div>
            
                </div>

            </div>

        </section>
    )
}