//array com os elementos dos cards de carrossel
const listaCards = [
    {
        id: 1,
        titulo: "Top 3 melhores destinos do Brasil",
        local1: "Foz do Iguaçu",
        local2:"Gramado",
        local3:"Salvador",
        foto1: require("../img/fozdoiguacu.jpg"),
        foto2: require("../img/gramado.jpg"),
        foto3: require("../img/salvador.jpg"),
        texto1:"Que tal conhecer as Cataratas do Iguaçu de pertinho? Embarque nessa aventura e visite uma das maiores cachoeiras do mundo!",
        texto2:"Venha visitar um pedacinho da Europa dentro do Brasil! Um lugar cheio de aconchego e calma para passar suas férias da melhor forma.",
        texto3:"Quem não ama uma praia, não é mesmo? Então venha conhecer essa cidade cheia de história e praias maravilhosas!",
        chamada: "Aproveite nossas ofertas para conhecer um pouquinho mais do Brasil"

    },
    {
        id: 2,
        titulo: "Top 3 dos melhores destinos na América",
        local1: "Canadá",
        local2:"Nova York",
        local3:"Peru",
        foto1: require("../img/canada.jpg"),
        foto2: require("../img/novayork.jpg"),
        foto3: require("../img/peru.jpg"),
        texto1:"Venha visitar as maravilhas que esse país tem para oferecer e se sinta acolhido por cada cantinho que passar.",
        texto2:"Que tal conhecer a tão aclamada cidade das luzes, aquela que nunca para? Se permita viver essa experiência única.",
        texto3:"Conheça um dos países mais diversificados do mundo! Multicultural, tradições diversas, culinária única e muito mais!",
        chamada: "Venha conferir as condições especiais para você aproveitar suas férias"
    },
    {
        id: 3,
        titulo: "Top 3 dos melhores destinos na Europa",
        local1: "Italia",
        local2:"Paris",
        local3:"Amsterdã",
        foto1: require("../img/italia.jpg"),
        foto2: require("../img/paris.jpg"),
        foto3: require("../img/holanda.jpg"),
        texto1:"Embarque nessa oportunidade de conhecer esse país cheio de história, culinária incrível, arquitetura de cair o queixo, entre outras maravilhas.",
        texto2:"Quem nunca sonhou em visitar a cidade do amor, não é mesmo? Confira nossas condições especiais para realizar mais este sonho.",
        texto3:"Venha descobrir as maravilhas que essa cidade mostra a cada nova caminhada, a cada pausa para um lanchinho e se apaixone com cada detalhe.",
        chamada: "Aqui você encontra os melhores pacotes para conhecer o lugar que quiser!"
    },
    {
        id: 4,
        titulo: "Top 3 dos melhores destinos na Ásia",
        local1: "Coréia do Sul",
        local2:"Japão",
        local3:"Filipinas",
        foto1: require("../img/seoul.jpg"),
        foto2: require("../img/japao.jpeg"),
        foto3: require("../img/filipinas.jpg"),
        texto1:"Que tal conhecer os cenários que você sempre vê nos doramas? Venha viver a chance de conhecer a história e os encantos desse lugar incrível!",
        texto2:"Arquitetura única, muita história, diversas paisagens incríveis e uma cultura linda! Aproveite essa oportunidade para conhecer a terra do sol nascente.",
        texto3:"Venha se conectar com a natureza e aproveitar paisagens incríveis. Aproveite a chance de conhecer novos lugares e viver experiências únicas!",
        chamada: "São diversos países à sua espera, garanta a sua viagem dos sonhos!"
    }
];

//criando função para o item
function Item(props){
    const indice = props.indice;
    const item = listaCards [indice];

    return(
        <div className="container">
            <h4>{item.titulo}</h4>
            <div className="card">
            <div className="card-body">

            <div id="destinosBrasil">
                <div id="carouselCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={item.foto1} id="imgCarousel" className="d-block w-100 carousel-posicao-imagem" alt="..." width={"150px"}/>
                    <div className="carousel-caption d-none d-md-block legenda">
                        <h5>{item.local1}</h5>
                        <p>{item.texto1}</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={item.foto2} id="imgCarousel" className="d-block w-100 carousel-posicao-imagem" alt="..."width={"150px"}/>
                    <div className="carousel-caption d-none d-md-block legenda">
                        <h5>{item.local2}</h5>
                        <p>{item.texto2} </p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={item.foto3} id="imgCarousel" className="d-block w-100 carousel-posicao-imagem" alt="..."width={"150px"}/>
                    <div className="carousel-caption d-none d-md-block legenda">
                        <h5>{item.local3}</h5>
                        <p>{item.texto3}</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev prevnext-button" type="button" data-target="#carouselCaptions" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </button>
                <button className="carousel-control-next prevnext-button" type="button" data-target="#carouselCaptions" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </button>
                </div>

            </div>
            <p className="card-title ">{item.chamada}</p>
            <a href="#" className="btn btn-danger">Saiba mais...</a>
            </div>
            </div>
        </div>
        
    )

}

export default function Carrossel() {
  return (
    <div className="listaCards">
            <div className="row row-cols-lg-2 row-cols-md-1 g-2">
                {listaCards.map((_item,index) => (
                    <Item indice = {index} key = {index}/>
                ))}
            </div>
        </div>

  )
}
