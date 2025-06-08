import './Card.css'

function Card({ imagem, nome}) {
    return (
        <div className="Card">
            <figure>
                <img src={imagem} alt={nome}/>
                <figcaption>
                    <h2>{nome}</h2>
                </figcaption>
            </figure>
        </div>
    );
}

export default Card;