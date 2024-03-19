import React from 'react'
import Banner from '../Compontas/Banner-section/Banner';
import Aboutsection from '../Compontas/About_Com/A_about_section';
import Card from '../Compontas/Contact_Com/Card';
import Story from '../Compontas/About_Com/Story';
export default function About() {
  return (
    <div>
     
      <div><Banner About_title_one="ABOUT" About_title_two=" Me" About_para="Suspendisse viverra pretium neque ut tempus. Aenean et nulla non felis elementum." /></div>
      <div><Aboutsection/></div>
      <div><Card/></div>
      <div><Story/></div>
    </div>
  )
}
