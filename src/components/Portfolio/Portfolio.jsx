import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";

const handleClick = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>Perfect solution for digital experience</p>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            onClick={() => handleClick('https://example.com/project1')}
            variants={fadeIn("up", "tween", .5, .6)}
            src="./showCase1.jpeg"
            alt="project"
          />
          <motion.img
            onClick={() => handleClick('https://example.com/project2')}
            variants={fadeIn("up", "tween", .7, .6)}
            src="./showCase2.jpg"
            alt="project"
          />
          <motion.img
            onClick={() => handleClick('https://example.com/project3')}
            variants={fadeIn("up", "tween", .9, .6)}
            src="./showCase3.jpeg"
            alt="project"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
