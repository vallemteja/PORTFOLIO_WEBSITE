import React from 'react';
import './skills.css';
import logdesign from '../../../assets/logodesign.png';
import appdesig from '../../../assets/appdesig.png';
const Skills = () => {
  return (    
    <section id='skills'>
    <span className='skilltittle'>What I DO</span>
    <span className="skillsdesc">I am a skilled passionate web designer with experince in creating visually appealing and user friendly websites.I have a strong understanding of  design and a keen eye for detail. I am good in HTML,CSS and Javascript.</span>
     <div className="skillbars">
        <div className="skillbar">
            <img src={logdesign} alt="" className="skillbarimg" height={100} width={100}/>
            <div className="skillbartext">
                <h2>Website Design</h2>
                <p>This demo text can be changed while making the production ready website</p>
            </div>
        </div>
     </div>
     <div className="skillbars">
        <div className="skillbar">
            <img src={appdesig} alt="" className="skillbarimg" height={100} width={100}/>
            <div className="skillbartext">
                <h2>App Design</h2>
                <p>You can write text related to mobile app development</p>
            </div>
        </div>
     </div>
   
    </section>
  )
}
export default Skills

