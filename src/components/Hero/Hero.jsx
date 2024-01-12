import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { FaEnvelope } from 'react-icons/fa';
import './Hero.css'
import axios from 'axios'

const Hero = () => {

  function handleClick() {
    window.location.href = 'mailto:younesraymond@gmail.com';
  }

  
  return (
    <section className={`paddings ${css.wrapper}`}>
     <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25 }}
  className={`innerWidth ${css.container}`}
>
  <div className={css.upperElements}>
    <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
      Hey There,
      <br />
      I'm Younes Raymond.
    </motion.span>
    <motion.span className="secondaryText" variants={fadeIn("left", "tween", 0.4, 1)}>
       Full Stack Web developer.
      <br />
      I love building web applications.
      <br />
      and solving problems.
    </motion.span>
  </div>

  <motion.div
    variants={fadeIn("up", "tween", 0.3, 1)}
    className={css.person}
  >
    <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} />
  </motion.div>

  {/* Mention your volunteering background */}
  <motion.span className="secondaryText" variants={fadeIn("top", "tween", 0.4, 1)}>

    <span className="t">Volunteering Background</span>
   
  </motion.span>

  <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className={css.volunteering}>
  <span className="secondaryText">
      Actively contributed to volunteer projects, including earthquake relief efforts in Morocco.
      <br />
      Collaborated with diverse teams and project managers to enhance user experiences and deliver innovative solutions.
    </span>   
  </motion.div>

  

  <div className={css.lowerElements}>
    <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
      <div className="primaryText">3</div>
      <div className="secondaryText">
        <div>Years</div>
        <div>Experience</div>
      </div>
    </motion.div>

    <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
      <img src="./certificate.png" alt="" />
      <span>CERTIFIED PROFESSIONAL</span>
      <span>IBM FULL STACK WEB DEVELOPER</span>
    </motion.div>
  </div>
</motion.div>

    </section>
  );
};

export default Hero;