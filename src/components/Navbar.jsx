import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCartShopping,
    faUser,
    faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/navbar.css";

function Navbar() {
    const [active, setActive] = useState("phone-side-navbar");
    const [activeIcon, setActiveIcon] = useState("phone-side-navbar-btn");
    const sideNavbarToggle = () => {
        active === "phone-side-navbar"
            ? setActive("phone-side-navbar active-phone-side-navbar")
            : setActive("phone-side-navbar");

        activeIcon === "phone-side-navbar-btn"
            ? setActiveIcon(
                  "phone-side-navbar-btn active-phone-side-navbar-btn"
              )
            : setActiveIcon("phone-side-navbar-btn");
    };
    
    return (
        <header>
            <div className="greeting">
                New Year. New You. New Shoes. <u>Shop Men</u> I{" "}
                <u>Shop Women</u>
            </div>
            <div className="phone-navbar-container">
                <div className="phone-navbar">
                    <div
                        onClick={() => {
                            sideNavbarToggle();
                        }}
                        className={activeIcon}
                    >
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <div className="line-3"></div>
                    </div>
                    <div className="navbar-logo">
                        <h2>LOGO</h2>
                    </div>
                    <div className="right-navbar">
                        <FontAwesomeIcon
                            className="right-navbar-icon"
                            icon={faMagnifyingGlass}
                        />
                        <FontAwesomeIcon
                            className="right-navbar-icon"
                            icon={faCartShopping}
                        />
                    </div>
                </div>
                <nav className={active}>
                    <ul>
                        <li>
                            <a href="/#">
                                <b>MEN</b>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <b>WOMEN</b>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <b>KIDS</b>
                            </a>
                        </li>
                        <li>
                            <a href="/#" id="sales">
                                <b>SALE</b>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <b>NEW ARRIVALS</b>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <b>SUSTAINABILITY</b>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <b>RERUN</b>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <b>STORES</b>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <b>Account</b>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <b>Help</b>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="lg-navbar">
                <nav className="lg-left-navbar">
                    <ul>
                        <li>
                            <a href="/#">MEN</a>
                        </li>
                        <li>
                            <a href="/#">WOMAN</a>
                        </li>
                        <li>
                            <a href="/#">KIDS</a>
                        </li>
                        <li>
                            <a href="/#" id="sales">SALE</a>
                        </li>
                        <li>
                            <a href="/#">NEW ARRIVALS</a>
                        </li>
                    </ul>
                </nav>
                <div className="navbar-logo">
                    <h2>LOGO</h2>
                </div>
                <nav className="lg-right-navbar">
                    <ul>
                        <li>
                            <a href="/#">SUSTAINABILITY</a>
                        </li>
                        <li>
                            <a href="/#">RERUN</a>
                        </li>
                        <li>
                            <a href="/#">STORES</a>
                        </li>
                        <li>
                            <a href="/#" id="bigger">
                                <FontAwesomeIcon icon={faUser} />
                            </a>
                        </li>
                        <li>
                            <a href="/#" id="bigger">
                                <FontAwesomeIcon icon={faCircleQuestion} />
                            </a>
                        </li>
                        <li><a href="/#" id="bigger">
                        <FontAwesomeIcon
                            icon={faCartShopping}
                        /></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
