import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import Switch from 'react-switch';
import { FaGithubAlt, FaSkype, FaTwitter, FaDiscord ,FaLinkedin} from "react-icons/fa";
import './Contacts.css'
import { CgMailOpen , CgMicrosoft} from "react-icons/cg";
const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });
  return (
    <>

    <ul className="social-Media ">
        <li>
            <a href="https://github.com/younes-Raymond" target="_blank">
                Github <FaGithubAlt />
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/younes-raymond-188a40241/" target="_blank">
                Linkedin <FaLinkedin />
            </a>
        </li>
        <li>
            <a href="https://discord.gg/wV72As9v" target="_blank">
                Discord <FaDiscord />
            </a>
        </li>
        <li>
            <a href="https://twitter.com/younesraymond1" target="_blank">
                Twitter <FaTwitter />
            </a>
        </li>
        <li>
            <a href="mailto:raymondyounes2@gmail.com" target="_blank">
                Email <CgMailOpen />
            </a>
        </li>
        <li>
            <a href="https://teams.live.com/l/community/FEAK0CC6hOGswNtQAI" target="_blank">
                Teams <CgMicrosoft  />
            </a>
        </li>
        <li>
            <a href="https://join.skype.com/CwhK3EvufRT4" target="_blank">
                Skype <FaSkype  />
            </a>
        </li>
    </ul>




    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{boxShadow: headerShadow}}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
     
      <div  className={css.name} style={{fontWeight: 'bold', transition: 'box-shadow 0.3s ease-in-out', cursor:'pointer'}}>Younes</div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li><a href="#experties">Services</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#people">Testimonials</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+212 (682) 018 371</p>
            <a href="https://wa.me/212682018371" target="_blank">
  <FaWhatsapp size={"40px"} />
</a>
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Header;
