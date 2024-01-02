import React from "react";

function SubMenu({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.link}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
}

export default SubMenu;
