import imgMobile from "@/assets/img/logo/mobile_logo.png";
import { useState, useEffect } from "react";
const Menu = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const style = {
    overflow: "hidden",
    display: isOpen ? "block" : "none",
    transition: "2s",
  };
  const handleClickTab = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    tab: string
  ) => {
    e.preventDefault();
    setActiveTab(tab);
    const section = document.querySelector(`#${tab}`);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      window.location.hash = tab;
    }, 1000);
  };

  return (
    <div className="arlo_tm_mobile_header_wrap">
      <div className="main_wrap">
        <div className="logo">
          <a href="#">
            <img src={imgMobile} alt="mobile_logo" />
          </a>
        </div>
        <div className="arlo_tm_trigger">
          <div
            className={
              isOpen
                ? `hamburger hamburger--collapse-r is-active`
                : `hamburger hamburger--collapse-r`
            }
          >
            <div className="hamburger-box" onClick={() => setIsOpen(prev => !prev)}>
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="arlo_tm_mobile_menu_wrap" style={style}>
        <div className="mob_menu">
          <ul className="anchor_nav">
            <li>
              <a
                href="#home"
                className={activeTab === "home" ? "active" : ""}
                onClick={e => handleClickTab(e, "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeTab === "about" ? "active" : ""}
                onClick={e => handleClickTab(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={activeTab === "skills" ? "active" : ""}
                onClick={e => handleClickTab(e, "skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={activeTab === "services" ? "active" : ""}
                onClick={e => handleClickTab(e, "services")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeTab === "contact" ? "active" : ""}
                onClick={e => handleClickTab(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
