import React from "react";
import { useSelector } from "react-redux";
import { homeSelector } from "../views/app/store";
import SidebarAccordion from "./SidebarAccordion";

const Sidebar = () => {
  const { categories } = useSelector(homeSelector);
  return (
    <div className="sidebar has-scrollbar">
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">categories</h2>
        </div>

        <ul className="sidebar-menu-category-list">
          {!categories.loading
            ? categories.data.map((category) => (
                <SidebarAccordion key={category.id} category={category} />
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

