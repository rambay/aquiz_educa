import React from "react";

const menuList = [
  {
    name: "Inicio",
    id: 1,
  },
  {
    name: "Nosotros",
    id: 2,
  },
  {
    name: "Cursos",
    id: 3,
  },
  {
    name: "Contacto",
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
              <a className="MenuNav__link" href="#">
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="Social">
        <a href="#">
          <i className="Social__icon fab fa-facebook" />
        </a>
        <i className="Social__icon fab fa-youtube" />
        <a href="#" />
      </div>
    </nav>
  );
}

export default Menu;
