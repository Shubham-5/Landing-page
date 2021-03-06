import React, { useState } from "react";
import "./NavBar.css";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [menuOne, setMenuOne] = useState(false);
  const [menuTwo, setMenuTwo] = useState(false);
  return (
    <div className='site-nav'>
      <h2 className='navigation-header'>
        <a href='/#'>Impact</a>
      </h2>
      <ul className='nav-list'>
        <li>
          <a href='/#'>Home</a>
        </li>
        <li className='hover-element'>
          <a href='/#'>
            Dropdown
            <FaChevronDown style={{ marginLeft: "4px", fontSize: "10px" }} />
          </a>
        </li>

        <ul id='menu-drop-hover'>
          <li>Menu one</li>
          <li className='sub-hover-li'>
            Menu two
            <FaChevronDown
              style={{
                float: "right",
                marginRight: "8px",
                marginTop: "10px",
                fontSize: "9px",
                transform: "rotate(-90deg)",
              }}
            />
          </li>
          <ul id='sub-menu-drop'>
            <li>sub Menu one</li>
            <li>sub Menu two</li>
            <li>sub Menu three</li>
          </ul>
          <li>Menu three</li>
        </ul>
        <li>
          <a href='/#'>Services</a>
        </li>
        <li>
          <a href='/#'>Blog</a>
        </li>
        <li>
          <a href='/#'>About</a>
        </li>
        <li>
          <a href='/#'>Contact Us</a>
        </li>
      </ul>

      <a className='menu-icon' href='/#'>
        <FaBars onClick={() => setIsActive(!isActive)} />
      </a>
      <div id='side-bar' className={isActive ? "inactive" : ""}>
        <div className='Close-icon'>
          <MdClose className='icon-x' onClick={() => setIsActive(!isActive)} />
        </div>
        <ul className='class-list'>
          <li>home</li>
          <li onClick={() => setMenuOne(!menuOne)}>
            dropdown{" "}
            <RiArrowDropDownLine
              id='icon-down'
              className={menuOne ? "icon-active" : ""}
            />
          </li>
          <ul id='drop-menu-1' className={menuOne ? "Active-one" : ""}>
            <li>Menu One</li>
            <li onClick={() => setMenuTwo(!menuTwo)}>
              Menu two{" "}
              <RiArrowDropDownLine
                id='icon-down'
                className={menuTwo ? "icon-active" : ""}
              />
            </li>
            <ul id='sub-menu' className={menuTwo ? "Active-two" : ""}>
              <li>sub menu one</li>
              <li>sub menu two</li>
              <li>sub menu three</li>
            </ul>
            <li>Menu three</li>
          </ul>
          <li>services </li>
          <li>blog</li>
          <li>about</li>
          <li>contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
