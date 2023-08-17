import React, { useEffect, useState } from "react";
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
  const [category, setCategory] = useState([]);
  const [subCategory, setCsubCategory] = useState([]);
  const [menu, setMenu] = useState([]);
  const { getData } = useContentful();

  useEffect(() => {
    getData({ contentType: "category", select: "fields" }).then(
      (res) => res && setCategory(res)
    );
    getData({ contentType: "subCate", select: "fields" }).then(
      (res) => res && setCsubCategory(res)
    );
    getData({ contentType: "menu", select: "fields" }).then(
      (res) => res && setMenu(res)
    );
  }, []);

  const mergedCategories = category.map((cate) => {
    const subCate = subCategory.filter(
      (sub) => sub.fields.codeCategory === cate.fields.codeSubCategory
    );
    return { ...cate, subCate };
  });
  console.log("menu", menu);

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
              {mergedCategories.map((cate, index) => (
                <ul className="dropdown-panel-list" key={index}>
                  <li className="menu-title">
                    <a href="#">{cate.fields.title}</a>
                  </li>
                  {cate.subCate.length > 0
                    ? cate.subCate.map((cat, i) => (
                        <li className="panel-list-item" key={i}>
                          <a href="#">{cat.fields.title}</a>
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
//ssssssssssssssssssss
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
