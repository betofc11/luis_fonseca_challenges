import React from "react";
import './SubMenu.css'

function SubMenu({ items }) {
  return (
    <ul className="secondaryNav">
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.link}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
}

export default SubMenu;
