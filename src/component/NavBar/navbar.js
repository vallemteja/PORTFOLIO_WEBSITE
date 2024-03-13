import React,{useState} from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import { FaRegMessage } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";

const Navbar = () => {
  const[showmenu,setshow]=useState(false)
  return (
    <nav className="navbar">
        <img src={logo} alt=""  className='man' height={150} width={200}/>
        <div className="deskeptopmenu">
            <Link className="desmenulis"  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
            <Link className="desmenulis" activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}>About</Link>
            <Link className="desmenulis" activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link>
            <Link className="desmenulis" activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500}>Clients</Link>
        </div>
        <button className="deskoptopbtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView('behaviour:smooth');
        }}>
            <FaRegMessage alt="" className="desktopimg" />Contact me</button>

            <TfiMenuAlt alt=""  className='mobmen' onClick={()=>setshow(!showmenu)}/>
        <div className="navmenu" style={{display: showmenu?'flex':'none' }}>
            <Link className="menulis"  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshow(false)}>Home</Link>
            <Link className="menulis" activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshow(false)}>About</Link>
            <Link className="menulis" activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshow(false)}>Portfolio</Link>
            <Link className="menulis" activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshow(false)}>Clients</Link>
            <Link className="menulis" activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshow(false)}>Contact</Link>
        </div>
    </nav>
  )
}
export default Navbar