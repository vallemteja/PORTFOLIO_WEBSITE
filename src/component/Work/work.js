import React from 'react';
import './work.css';
import s1 from '../../assets/s1.png';
import s2 from '../../assets/s2.png';
import s3 from '../../assets/s3.png';
import s4 from '../../assets/s4.png';
import s5 from '../../assets/s5.jpg';
import s6 from '../../assets/s6.avif';


const Work = () => {
  return (
    <section className="works">
        <h2 className="worktit">My Portfolio</h2>
        <span className="worksdesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect i am exicted to bring my skills and experince to help businessess  achieve their goals and dreams create a strong  online presence</span>    
        <div className="workim">
            <img src={s4} alt="" className="workimg" height={220} width={250}/>          
            <img src={s2} alt="" className="workimg" height={220} width={250}/>
            <img src={s3} alt="" className="workimg" height={220} width={250}/>
            <img src={s1} alt="" className="workimg" height={220} width={250}/>
            <img src={s6} alt="" className="workimg" height={220} width={250}/>    
            <img src={s5} alt="" className="workimg" height={220} width={250}/>

        </div>
        <button className="workbtn">See More</button>
    </section>
  )
}

export default Work