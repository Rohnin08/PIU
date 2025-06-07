import Card from './Card'; 

const Galeria = ({ personagens, onSelecionar }) => {
  return (
    <div className="galeria">
      {personagens.map(personagem => (
        <Card 
          key={personagem.id}
          personagem={personagem}
          onClick={() => onSelecionar(personagem)}
        />
      ))}
    </div>
  );
};

export default Galeria;