import './Card.css'

function Card({ imagem, nome, descricao}) {
    return (
        <div className="Card">
            <figure>
                <img src={imagem} alt={nome}/>
                <figcaption>
                    <h2>{nome}</h2>
                    <p>{descricao}</p>
                </figcaption>
            </figure>
        </div>
    );
}

export default Card;