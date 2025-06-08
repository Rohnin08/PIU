import './App.css';
import Card from './components/Card';

import makoto from './assets/MakotoYuki_Battle.webp'
import junpei from './assets/JunpeiIori_Battle.webp'
import yukari from './assets/YukariTakaba_Battle.webp'
import mitsuru from './assets/MitsuruKirijo_Battle.webp'
import akihiko from './assets/AkihikoSanada_Battle.webp'
import aigis from './assets/Aigis_Battle.webp'

export default function App() {

  return (
  <div className='galeria'>
    <Card imagem={makoto} nome="Makoto Yuki"/>
    <Card imagem={junpei} nome="Junpei Iori"/>
    <Card imagem={yukari} nome="Yukari Takeba"/>
    <Card imagem={mitsuru} nome="Mitsuru Kirijo"/>
    <Card imagem={akihiko} nome="Akihiko Sanada"/>
    <Card imagem={aigis} nome="Aigis"/>
  </div>

  )
}
