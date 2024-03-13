import React, { useRef } from "react";
import "./contact.css";
import fb from "../../assets/fb.png";
import micro from "../../assets/micro.png";
import adob from "../../assets/adob.png";
import wal from "../../assets/wal.png";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_pu2q5ep","template_phzcoak",form.current,"WuSYWs1LEL1Pp4F81eEWc")
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="contactpage">
      <div id="clients">
        <h1 className="cptitle">My Clients</h1>
        <p className="clintdesc">
          I have had the oppurtunity to work with a diverse group of
          companies.Some of the notable companines i have worked with includes.
        </p>
        <div className="clntimgs">
          <img src={fb} alt="" className="clientimg" height={100} width={100} />
          <img
            src={micro}
            alt=""
            className="clientimg"
            height={100}
            width={100}
          />
          <img
            src={adob}
            alt=""
            className="clientimg"
            height={100}
            width={100}
          />
          <img
            src={wal}
            alt=""
            className="clientimg"
            height={100}
            width={100}
          />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactpagetit">Contact Me</h1>
        <span className="contactdesc">
          Please fill ouut the form below to discuss any work opprtunities
        </span>
        <form action="" className="contactform" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_emaill"
          />
          <textarea
            className="message"
            name="mess"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="subbtn" value="send">
            Submit
          </button>
          <div className="links">
            <FaFacebook className="icon1" />
            <IoLogoInstagram className="icon2" />
            <IoLogoYoutube className="icon3" />
            <FaTwitterSquare className="icon4" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
