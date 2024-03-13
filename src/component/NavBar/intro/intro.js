import React from 'react';
import './intro.css';
import main from '../../../assets/main.png';
import { BsBagHeart } from "react-icons/bs";
import resume from '../intro/resume.pdf';



function Intro() {
  return (
    <section id="intro">
        <div className="introcon">
            <span className="hello">Hello</span>
            <span className="intro">I'm <span className="introd">Vallem Teja</span><br/>Web Designer</span>
            <p className="intropara">I'm skilled web designer creating visually appealing and user friendly websites</p>
            <a href={resume}><button className="btn"><BsBagHeart/>Hire Me</button></a>
            
        </div>
        <img src={main} alt="" className="bg" />
    </section>
  )
}

export default Intro