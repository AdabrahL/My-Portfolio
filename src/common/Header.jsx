import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menu } from "../data/data";

export const Header = () => {
  const [mobile] = useState(false);
  const handleActive = () => {};

  return (
    <header>
      <ul className={`${mobile ? "mobile-nav" : "menu"}`}>
        {menu.map((item) => (
          <li key={item.id}>
            <Link to={item.url} onClick={handleActive} className="link">
              {item.text}
            </Link>
            <span>{item.icon}</span>
          </li>
        ))}
      </ul>
    </header>
  );
};
