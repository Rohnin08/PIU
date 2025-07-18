export default function Detalhes ({personagem}) {
     if (!personagem) {
        return null;
     }

    return (
        <div className="detalhes">
           <h1>Detalhes do Personagem</h1>
           <img src={character.img} alt={personagem.nome} />
           <h3>{personagem.nome}</h3>
           <p>{personagem.descricao}</p>
        </div>
    );
}