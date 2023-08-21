import React, { useEffect, useState } from "react";
import useContentful from "../utility/useContentful";
import { useSelector } from "react-redux";
import { homeSelector } from "../views/app/store";
import { Link } from "react-router-dom";

const MenuNavigation = () => {
  const [menu, setMenu] = useState([]);
  const { getData } = useContentful();
  const {categories, loading} = useSelector(homeSelector)
  console.log('redux', categories)
  useEffect(() => {
    getData({ contentType: "menu", select: "fields" }).then(
      (res) => res && setMenu(res)
    );
  }, []);

  return (
    <nav className="desktop-navigation-menu">
      <div className="container">
        <ul className="desktop-menu-category-list">
          <li className="menu-category">
            <a href="#" className="menu-title">
              Home
            </a>
          </li>
          <li className="menu-category">
            <a href="#" className="menu-title">
              Categories
            </a>
            <div className="dropdown-panel">
              {categories.map((cate) => (
                <ul className="dropdown-panel-list" key={cate.id}>
                  <li className="menu-title">
                    <Link to={cate.url}>{cate.name}</Link>
                  </li>
                  {cate.children.length > 0
                    ? cate.children.map((cat) => (
                        <li className="panel-list-item" key={cat.nodeId}>
                          <Link to={cat.url}>{cat.name}</Link>
                        </li>
                      ))
                    : null}
                </ul>
              ))}
            </div>
          </li>
          {menu.map((item, index) => (
            <li className="menu-category" key={index}>
              <a href={item.fields.url} className="menu-title">
                {item.fields.item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default MenuNavigation;

{
  /* {mergedCategories.map((item, index) => (
            <li className="menu-category" key={index}>
              <a href={item.fields.slug} className="menu-title">
                {item.fields.title}
              </a>
              {item?.subCate.length > 0 ? (
                <ul className="dropdown-list">
                  {item.subCate.map((cat, i) => (
                    <li className="dropdown-item" key={i}>
                      <a href="#">{cat.fields.title}</a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))} */
}
