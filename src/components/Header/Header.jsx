import "./Header.css";
import { Link } from "react-router-dom";
import Bars from "../../assets/bars.svg";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [about, setAbout] = useState(false);
  const handleBarsClick = () => setMenu(!menu);
  const handleaboutclick = () => setAbout(about);

  const DropVariants = {
    hover: {
      textShadow: "0px 0px 4px #fff",
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div className="navbar">
      <div className="nav-div">
        <div></div>
        <ul className={menu ? "nav-menu active text-lg" : "nav-menu text-lg"}>
          <li className="nav-item">
            <Link to="/" onClick={handleBarsClick} className="nav-link">
              <p className="hover:text-[#9d9d9d]">
                Home
              </p>
            </Link>
          </li>
          <li
            className="nav-item about-dropdown"
          >
            <p
              onClick={() => {
                handleaboutclick();
              }}
              className="dropbtn hover:text-[#9d9d9d]"
            >
              About ▾
            </p>
            <ul className="dropdown-content">
              <li className="border-b border-white/20 hover:bg-[#0e4256]">
                <Link to="about" onClick={handleBarsClick} className="nav-link">
                  <motion.p
                    variants={DropVariants}
                    whileHover="hover"
                    whileTap="hover"
                  >
                    About us
                  </motion.p>
                </Link>
              </li>
              <li className="border-b border-white/20 hover:bg-[#0e4256]">
                <Link
                  to="testimonials"
                  onClick={handleBarsClick}
                  className="nav-link"
                >
                  <motion.p
                    variants={DropVariants}
                    whileHover="hover"
                    whileTap="hover"
                  >
                    Testimonials
                  </motion.p>
                </Link>
              </li>
              <li className="hover:bg-[#0e4256]">
                <Link
                  to="about#foundersBlock"
                  onClick={handleBarsClick}
                  className="nav-link"
                >
                  <motion.p
                    variants={DropVariants}
                    whileHover="hover"
                    whileTap="hover"
                  >
                    Founders block
                  </motion.p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="events" onClick={handleBarsClick} className="nav-link">
              <p className="hover:text-[#9d9d9d]">
                Events
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="team" onClick={handleBarsClick} className="nav-link">
              <p className="hover:text-[#9d9d9d]">
                Team
              </p>
            </Link>
          </li>
        </ul>

        <div className="header-bars" onClick={handleBarsClick}>
          <img src={Bars} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Header;
