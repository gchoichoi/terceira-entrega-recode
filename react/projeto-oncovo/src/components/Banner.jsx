import React from "react";

class Banner extends React.Component{
    render(){
        return(
            <div class="jumbotron jumbotron-fluid banner-image">
                <div class="container">
                    <h1 class="display-4">Oncovô Travels</h1>
                    <p class="lead">De Minas para o mundo!</p>
                    <form>
                    <div class="row">
                        <div class="col-sm-3 col-md-3 col-lg-2 formulario">
                        <input type="text" class="form-control" placeholder="Informe a origem"/>
                        </div>
                        <div class="col-sm-3 col-md-3 col-lg-2 formulario">
                        <input type="text" class="form-control" placeholder="Informe o destino "/>
                        </div>
                        <div class="col-sm-2 col-md-2 col-lg-2 formulario">
                        <input type="date" class="form-control" placeholder="Data ida"/>
                        </div>
                        <div class="col-sm-2 col-md-2 col-lg-2 formulario">
                        <input type="date" class="form-control" placeholder="Data volta"/>
                        </div>
                        <div class="col-sm-2 col-md-2 col-lg-2 formulario">
                        <a href="#" type="button" class="btn btn-danger">Pesquisar</a>
                        </div>
                    </div>
                    </form>


                </div>
            </div>

        )
    }
}

export default Banner;