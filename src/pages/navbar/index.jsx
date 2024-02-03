import React from "react";
import { Link, useLocation } from "react-router-dom";


const NoSidebar = ["/notebook"];

export function Navbar() {
  const { pathname } = useLocation();

  if (NoSidebar.some((item) => pathname.includes(item))) return null;
  return (
    <nav>
      <li>
        <Link to="/">Layout</Link>
      </li>
      <li>
        <Link to="/about">About me</Link>
      </li>
      <li>
        <Link to="/notebook">Notebook</Link>
      </li>
    </nav>
  );
}

export default Navbar;