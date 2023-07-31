import React, {useEffect, useState} from "react";
import useContentful from "../utility/useContentful";

const menuNavigation = [
  {
    title: "Home",
  },
  {
    title: "Men's",
    subCategory: [
      {
        title: "loremEpsum",
        slug: "loremepsum",
      },
      {
        title: "loremEpsum",
        slug: "loremepsum",
      },
      {
        title: "loremEpsum",
        slug: "loremepsum",
      },
    ],
  },
  {
    title: "Women's",
    subCategory: [
      {
        title: "loremEpsum",
        slug: "loremepsum",
      },
      {
        title: "loremEpsum",
        slug: "loremepsum",
      },
      {
        title: "loremEpsum",
        slug: "loremepsum",
      },
    ],
  },
  {
    title: "JEWELRY",
    subCategory: [
      {
        title: "loremEpsum",
        slug: "loremepsum",
      },
      {
        title: "loremEpsum",
        slug: "loremepsum",
      },
      {
        title: "loremEpsum",
        slug: "loremepsum",
      },
    ],
  },
];

const MenuNavigation = () => {
	const [data, setData] = useState([]);
  const { getData } = useContentful();

  useEffect(() => {
    getData({ contentType: "category", select: "fields" }).then((res) => res && setData(res));
    console.log(data)
  }, []);

  return (
    <nav className="desktop-navigation-menu">
      <div className="container">
        <ul className="desktop-menu-category-list">
          <li className="menu-category">
            <div className="dropdown-panel"></div>
          </li>
          {menuNavigation.map((item, index) => (
            <li className="menu-category" key={index}>
              <a href="#" className="menu-title">
                {item.title}
              </a>
              {"subCategory" in item ? (
                <ul className="dropdown-list">
                  {item.subCategory.map((cat, i) => (
                    <li className="dropdown-item" key={i}>
                      <a href="#">{cat.title}</a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MenuNavigation;
