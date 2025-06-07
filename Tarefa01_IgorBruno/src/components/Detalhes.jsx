const Detalhes = ({ personagem, onVoltar }) => {
  return (
    <div className="detalhes">
      <button onClick={onVoltar} className="botao-voltar">Voltar</button>
      <img 
        src={personagem.imagem} 
        alt={personagem.nome} 
        className="detalhes-imagem"
      />
      <h2>{personagem.nome}</h2>
      <p>{personagem.descricao}</p>
    </div>
  );
};

export default Detalhes;