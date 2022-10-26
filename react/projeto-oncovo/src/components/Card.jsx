import PropTypes from 'prop-types';

function Card({foto, local, valor}){
    //criando validação de tipos com PropTypes
    Card.propTypes = {
        foto: PropTypes.string,
        local: PropTypes.string.isRequired,
        valor: PropTypes.number

    }
    //criando um valor default
    Card.defaultProps = {
        local: "Nome do lugar"
    }

    return(
        <div className="container">
            <div className="card" style={{width: '14rem'}}>
                <img src={foto} className="card-img-top" alt={local}/>
                <div className="card-body">
                    <h5 className="card-text">{local}</h5>
                    <p className="card-text">Pacotes a partir de:</p>
                    <button className="btn btn-danger">R${valor}</button>
                </div>
            </div>
        </div>
    )
}

export default Card;