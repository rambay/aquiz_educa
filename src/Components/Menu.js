import React from "react";
import { Link } from "react-router-dom";

const menuList = [
  {
    name: "Inicio",
    src: "/",
    id: 1,
  },
  {
    name: "Nosotros",
    src: "/about",
    id: 2,
  },
  {
    name: "Cursos",
    src: "/courses",
    id: 3,
  },
  {
    name: "Contacto",
    src: "/contact",
    id: 4,
  },
];

function Menu() {
  return (
    <nav className="MenuNav">
      <ul>
        {menuList.map((item) => {
          return (
            <li className="MenuNav__list" key={item.id}>
              <Link className="MenuNav__link" to={item.src}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Menu;
