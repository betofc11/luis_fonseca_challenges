import React from "react";

function Nav({ items }) {
  return (
    <ul>
      {items.map((navItem) => (
        <li key={navItem.label}>
          <a href={navItem.link}>{navItem.label}</a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
