import { useTheme } from '../contexto/ContextoTema';

const Tema = () => {
  const { temaEscuro, alternarTema } = useTheme();

  return (
    <button 
      onClick={alternarTema} 
      className={`botao-tema ${temaEscuro ? 'dark' : 'light'}`}
    >
      {temaEscuro ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
    </button>
  );
};

export default Tema;