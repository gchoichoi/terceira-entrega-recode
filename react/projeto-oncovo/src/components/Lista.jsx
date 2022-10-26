//array de elementos
const lista = [
    {
        id: 1,
        local: "Seoul",
        foto: require("../img/seoul.jpg"),
        valor: 6890.90
    },
    {
        id: 2,
        local: "Paris",
        foto: require("../img/paris.jpg"),
        valor: 3489.90
    },
    {
        id: 3,
        local: "Santorini",
        foto: require("../img/santorini.jpg"),
        valor: 2989.90
    },
    {
        id: 4,
        local: "Nova York",
        foto: require("../img/novayork.jpg"),
        valor: 1986.90
    }
];

//criando função para o item
function Item(props){
    const indice = props.indice;
    const item = lista [indice];

    return(
            <div className="container">
                <div className="card" style={{width: '14rem'}}>
                    <img src={item.foto} className="card-img-top" alt={item.local}/>
                    <div className="card-body">
                        <h5 className="card-text">{item.local}</h5>
                        <p className="card-text">Pacotes a partir de:</p>
                        <button className="btn btn-danger">R${item.valor}</button>
                    </div>
                </div>
            </div>
        
    )

}

//criando a lista, utilizando map
export default function Lista(){
    return(
        <div className="lista">
            <div className="row row-cols-lg-4 row-cols-md-2 g-4">
                {lista.map((item,index) => (
                    <Item indice = {index} key = {index}/>
                ))}
            </div>
        </div>
    )
}