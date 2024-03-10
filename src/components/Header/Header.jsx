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
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });
 


  return (
    <>

    <ul className="social-Media ">
        <li>
            <a href="https://github.com/younes-Raymond" target="_blank">
                <FaGithubAlt />
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/younes-raymond-188a40241/" target="_blank">
                <FaLinkedin />
            </a>
        </li>
        <li>
            <a href="https://discord.gg/wV72As9v" target="_blank">
                 <FaDiscord />
            </a>
        </li>
        <li>
            <a href="https://twitter.com/younesraymond1" target="_blank">
                <FaTwitter />
            </a>
        </li>
        <li>
            <a href="mailto:raymondyounes2@gmail.com" target="_blank">
                <CgMailOpen />
            </a>
        </li>
        <li>
            <a href="https://teams.live.com/l/community/FEAK0CC6hOGswNtQAI" target="_blank">
              <CgMicrosoft  />
            </a>
        </li>
        <li>
            <a href="https://join.skype.com/CwhK3EvufRT4" target="_blank">
              <FaSkype  />
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
     <div className={`innerWidth ${css.container} flexCenter`} style={{ height: '10px' }}>
  <div className={css.name} style={{ fontWeight: 'bold', transition: 'box-shadow 0.3s ease-in-out', cursor: 'pointer' }}>Younes</div>


  <ul className={`flexCenter ${css.menu}`} ref={menuRef} style={getMenuStyles(menuOpened)}>
    <li className={`flexCenter ${css.phone}`}>
      <p>+212 771-664486</p>
      <a href="https://wa.me/212682018371" target="_blank">
        <FaWhatsapp size={"40px"} />
      </a>
    </li>
  </ul>


  {/* for medium and small screens */}
 
</div>

    </motion.div>
    </>
  );
};

export default Header;
