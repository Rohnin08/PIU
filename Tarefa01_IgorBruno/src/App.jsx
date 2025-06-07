import { useState } from 'react';
import { useTheme } from './contexto/ContextoTema';
import Galeria from './components/Geleria';
import Detalhes from './components/Detalhes';
import Tema from './components/Tema';

// Importações das imagens
import P4A_Chie_Render from './assets/P4A_Chie_Render.webp';
import P4A_Kanji_Render from './assets/P4A_Kanji_Render.webp';
import P4A_Teddie_Render from './assets/P4A_Teddie_Render.webp';
import P4A_Yukiko_Render from './assets/P4A_Yukiko_Render.webp';
import Yosuke from './assets/Persona_4_arena_Yosuke.webp';
import Yu from './assets/Yutransparent.webp';

const personagens = [
  {
    id: 1,
    nome: 'Chie Satonaka',
    imagem: P4A_Chie_Render,
    descricao: 'Especialista em artes marciais e fã de filmes de kung-fu.'
  },
  {
    id: 2,
    nome: 'Kanji Tatsumi',
    imagem: P4A_Kanji_Render,
    descricao: 'Parece durão mas tem um coração mole e talento para costura.'
  },
  {
    id: 3,
    nome: 'Teddie',
    imagem: P4A_Teddie_Render,
    descricao: 'O misterioso urso do Mundo da TV com muitos trocadilhos.'
  },
  {
    id: 4,
    nome: 'Yukiko Amagi',
    imagem: P4A_Yukiko_Render,
    descricao: 'Herdeira da pousada Amagi com poderes de fogo.'
  },
  {
    id: 5,
    nome: 'Yosuke Hanamura',
    imagem: Yosuke,
    descricao: 'Melhor amigo do protagonista, trabalha no Junes.'
  },
  {
    id: 6,
    nome: 'Yu Narukami',
    imagem: Yu,
    descricao: 'O protagonista silencioso com grande força interior.'
  }
];

export default function App() {
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);
  const { temaEscuro } = useTheme();

  return (
    <div className={`app ${temaEscuro ? 'dark' : 'light'}`}>
      <Tema />
      
      <h1>Persona 4 Arena - Personagens</h1>
      
      {personagemSelecionado ? (
        <Detalhes 
          personagem={personagemSelecionado} 
          onVoltar={() => setPersonagemSelecionado(null)} 
        />
      ) : (
        <Galeria 
          personagens={personagens} 
          onSelecionar={setPersonagemSelecionado} 
        />
      )}
    </div>
  );
}