
export default function Card ({imagem, nome, onClick}) {
    return (
        <div className="Card" onClick={onClick}>
            <figure>
                <img src={imagem} onClick={onClick} />
                <figcaption>{nome}</figcaption>
            </figure>
        </div>
    );
}

