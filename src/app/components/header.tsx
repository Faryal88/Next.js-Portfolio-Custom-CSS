"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import "./header.css"; // Import custom CSS

function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="header-nav">
        <div className="header-container">
          <div className="header-logo">
            <Link href="/">
              <span className="highlight">PORT</span>
              <span className="font-Merienda">FOLIO</span>
            </Link>
          </div>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggle md:hidden"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? <XMarkIcon /> : <Bars3Icon />}
          </button>

          {/* Navbar Links */}
          <div className={`navbar ${navbar ? "flex" : "hidden"} md:flex`}>
            <ul className="navbar-list">
              <li className="nav-item">
                <Link href="/" onClick={() => setNavbar(false)}>HOME</Link>
              </li>
              <li className="nav-item">
                <Link href="#about" onClick={() => setNavbar(false)}>ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link href="#project" onClick={() => setNavbar(false)}>PROJECT</Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" onClick={() => setNavbar(false)}>CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
