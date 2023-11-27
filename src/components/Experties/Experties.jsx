import React from 'react'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
import css from './Experties.module.scss'
import {motion} from 'framer-motion'
import {fadeIn, staggerContainer, textVariant} from '../../utils/motion.js'


const Experties = () => {
  return (
    <section className={css.wrapper}>
        <a className="anchor" id="experties"></a>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}>

            {/* left side */}
            <div className={css.leftSide}>
                {
                    projectExperience.map((exp, i)=> {
                        return <motion.div variants = {fadeIn("right", "tween", (i+1)*0.2, 1)} className={css.exp} key={i}>
                            <div style={{background: exp.bg}} className="flexCenter">
                                <exp.icon size={25} color="white"/>
                            </div>
                            <div>
                                <span>{exp.name}</span>
                                <span className='secondaryText'>{exp.projects} Projects</span>
                            </div>
                        </motion.div>
                    })
                }
            </div>


            {/* right */}
            <motion.div
            variants={textVariant(0.5)}
            className={css.rightSide}>

                <span className='primaryText'>What do I specialize in as a MERN developer?</span>
                <span className='secondaryText'>I specialize in JavaScript-based web development using the MERN stack (MongoDB, Express, React, and Node.js). I have experience building scalable and performant web applications using modern web development tools and techniques.</span>

                <div className={`flexCenter ${css.stats}`}>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>8+</span>
                        <span className='secondaryText'>Project Completed</span>
                    </div>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>10+</span>
                        <span className='secondaryText'>Happy Clients</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Experties