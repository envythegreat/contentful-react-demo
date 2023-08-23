import React, { useEffect, useState } from "react";
import useContentful from "../utility/useContentful";
import { useSelector } from "react-redux";
import { homeSelector } from "../views/app/store";
import { useNavigate } from "react-router-dom";

const MenuNavigation = () => {
  const navigate = useNavigate()
  const [menu, setMenu] = useState([]);
  const { getData } = useContentful();
  const {categories} = useSelector(homeSelector)
  
  useEffect(() => {
    getData({ contentType: "menu", select: "fields" }).then(
      (res) => res && setMenu(res)
    );
  }, []);

  const setnavigate = (url) => {
    navigate(url)
  }

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
              {!categories.loading && categories.data.map((cate) => (
                <ul className="dropdown-panel-list" key={cate.id}>
                  <li className="menu-title">
                    <button  onClick={() => setnavigate(`${cate.url}/${cate.id}`)}>{cate.name}</button>
                  </li>
                  {cate.children.length > 0
                    ? cate.children.map((cat) => (
                        <li className="panel-list-item" key={cat.nodeId}>
                          <button  onClick={() => setnavigate(`${cate.url}/${cat.nodeId}`)}>{cat.name}</button>
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
