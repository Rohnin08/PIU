const Card = ({ personagem, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img 
        src={personagem.imagem} 
        alt={personagem.nome} 
        className="card-imagem"
      />
      <h3 className="card-nome">{personagem.nome}</h3>
    </div>
  );
};

export default Card;