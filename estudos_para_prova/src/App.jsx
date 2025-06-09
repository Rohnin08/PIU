import './App.css';
import Card from './components/Card';
import Galeria from './components/Galeria';

import makoto from './assets/MakotoYuki_Battle.webp'
import junpei from './assets/JunpeiIori_Battle.webp'
import yukari from './assets/YukariTakaba_Battle.webp'
import mitsuru from './assets/MitsuruKirijo_Battle.webp'
import akihiko from './assets/AkihikoSanada_Battle.webp'
import aigis from './assets/Aigis_Battle.webp'

export default function App() {

  return (
  <Galeria>
    <Card imagem={makoto} nome="Makoto Yuki" descricao="O heroi e coringa do time, pode usar varias Personas"/>
    <Card imagem={junpei} nome="Junpei Iori" descricao="O guerreiro, um dps físico forte com cobertura de fogo "/>
    <Card imagem={yukari} nome="Yukari Takeba" descricao=""/>
    <Card imagem={mitsuru} nome="Mitsuru Kirijo"/>
    <Card imagem={akihiko} nome="Akihiko Sanada"/>
    <Card imagem={aigis} nome="Aigis"/>
  </Galeria>

  )
}
