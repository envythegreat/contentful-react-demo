import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "./icons";
import { useNavigate } from "react-router-dom";
const SidebarAccordion = ({ category }) => {
  const [open, setOpen] = useState(false);
  const toggleAcc = () => setOpen(!open);
  const navigate = useNavigate();
  const setnavigate = (url) => {
    navigate(url);
  };
  return (
    <li className="sidebar-menu-category">
      <button className="sidebar-accordion-menu" onClick={toggleAcc}>
        <div className="menu-title-flex">
          <p className="menu-title" style={{ fontWeight: "bold" }}>
            {category.name}
          </p>
        </div>

        <div>
          {!open ? (
            <PlusIcon width={15} height={15} />
          ) : (
            <MinusIcon width={15} height={15} />
          )}
        </div>
      </button>

      <ul className={`sidebar-submenu-category-list ${open ? "active" : ""}`}>
        {category.children.length > 0
          ? category.children.map((cat) => (
              <li className="sidebar-submenu-category" key={cat.nodeId}>
                <button
                  className="sidebar-submenu-title"
                  onClick={() => setnavigate(`${category.url}/${cat.nodeId}`)}
                >
                  <p className="product-name">{cat.name}</p>
                </button>
                {/* <data value="300" className="stock" title="Available Stock">300</data> */}
              </li>
            ))
          : null}
      </ul>
    </li>
  );
};

export default SidebarAccordion;
