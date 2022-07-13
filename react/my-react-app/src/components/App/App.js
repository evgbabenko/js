import React, { Component } from 'react';
import './App.css';

import Header from '../header/Header';
import Player from '../Player/Player';
import Aside from '../Aside/Aside';

import logo from '../../logo.png'

const menuItems = [
  { name: 'Головна', url: '#' },
  { name: 'Новини', url:'#' },
  { name: 'Розклад', url: '#' },
  { name: 'Ді - Джеї', url: '#' },
  { name: 'Події', url: '#' },
  { name: 'Про радио', url: '#' }
]

import banner1 from '../../img/banners/1.png';
import banner2 from '../../img/banners/2.png';
import banner3 from '../../img/banners/3.png';
import banner4 from '../../img/banners/4.png';
import banner5 from '../../img/banners/5.png';

const banners =  [
  {'id':'1','src':banner1},
  {'id':'2','src':banner2},
  {'id':'3','src':banner3},
  {'id':'4','src':banner4},
  {'id':'5','src':banner5}
];

const about = [
    "M4U RADIO Ukraine (Music for You, Music for the Universe!) — це інтернет радіостанція, що динамічно розвивається, метою якої є популяризація електронної музики і клубного руху як в Україні, так і за її межами.",
    "В ефірі інтернет радіо звучить якісна електронна музика, сети кращих DJ України та світу, розважальні програми, а так само живі виступи.Основні стилі музики в ротації на M4U RADIO Ukraine — Progressive House, Tech House, Melodic House, Deep House, Electro House, Afro House, Indie Dance, Techno, Melodic Techno, Minimal Techno, Peak / Time Driving, PsyTrance, Progressive Trance, Vocal Trance, Drum'n'bass.",
    "Великий вклад в розвиток M4U RADIО Ukraine був наданий такими Діджеями як - VadKiNgSon, ESHKA, Redler, SHRAM, DJ Alex Lume, Patricks, Dj Ttore, Peter Raiskiy, Andrew Wolf, Karchilled, а також Індійським інтернет проєктом - Lunar Dance."
];

function App() {
  return (
    <div>
      <Header items={menuItems} logo={logo}/>
      <Player />
      <Aside data={banners} about={about}/>
    </div>
  )
}

export default App;
