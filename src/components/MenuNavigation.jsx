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
	const [menu, setMenu] = useState([])
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
          <li class="menu-category">
            <a href="#" class="menu-title">
              Home
            </a>
          </li>
          <li class="menu-category">
            <a href="#" class="menu-title">
              Categories
            </a>
            <div class="dropdown-panel">
              {mergedCategories.map((cate, index) => (
                <ul class="dropdown-panel-list" key={index}>
                  <li class="menu-title">
                    <a href="#">{cate.fields.title}</a>
                  </li>
                  {cate.subCate.length > 0
                    ? cate.subCate.map((cat, i) => (
                        <li class="panel-list-item" key={i}>
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

export default MenuNavigation;
