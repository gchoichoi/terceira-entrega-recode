function NewsletterForm(){
    return(
        <section class="container">

            <h2>Quer receber nossas novidades?</h2>

                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-5">
                                        <input type="text" className="form-control" placeholder="Digite seu nome"/>
                                    </div>
                                    <div className="col-6">
                                        <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">@</div>
                                        </div>
                                        <input type="email" className="form-control" id="inlineFormInputGroup" placeholder="Digite seu email"/>
                                        </div>
                                    </div>

                                </div>
                            </form>
                            <h6 className="card-text">Concordo em receber newsletters com informações sobre promoções e novidades de pacotes de viagem.</h6>
                            <a href="#" className="btn btn-danger">Enviar</a>
                        </div>
                    </div>
        </section>
    )
}

export default NewsletterForm;