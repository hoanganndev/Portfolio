import marcusDesktop from "@/assets/img/logo/hoangan_desk.png";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

interface IProps {
  hideLeftPart: boolean;
  setHideLeftPart: (value: boolean) => void;
}

const LeftPart = (props: IProps) => {
  const { hideLeftPart, setHideLeftPart } = props;
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const { hash } = window.location;

    if (hash) {
      const tab = hash.replace("#", "");
      setActiveTab(tab);
      const section = document.querySelector(`${hash}`);
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

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
    <div
      className={hideLeftPart ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}
    >
      <div className="leftpart_inner">
        <div className="logo_wrap">
          <a href="#">
            <img src={marcusDesktop} alt="desktop-logo" />
          </a>
        </div>
        <div className="menu_list_wrap">
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
        <div className="leftpart_bottom">
          <div className="social_wrap">
            <ul>
              <li>
                <a href="#">
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {!isMobile && (
          <a
            className={hideLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"}
            href="#"
            onClick={e => {
              e.preventDefault();
              setHideLeftPart(!hideLeftPart);
            }}
          >
            <i
              className={hideLeftPart ? "xcon-angle-left opened" : "xcon-angle-left"}
            ></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default LeftPart;
