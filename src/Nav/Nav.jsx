import React from "react";
import './Nav.css'

function Nav({ items }) {
  return (
    <ul className="primaryNav">
      {items.map((navItem) => (
        <li key={navItem.label}>
          <a href={navItem.link}>{navItem.label}</a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
