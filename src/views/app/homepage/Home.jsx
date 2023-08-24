import React, { useEffect, useState } from "react";
import { Hero, ProductGrid, Sidebar } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProduct } from "../store";
import { useParams } from "react-router-dom";
import { homeSelector } from "../store";
// import useAxios from "../../../configs/axios/useAxios";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "../../../components/icons";

const Home = () => {
  const { lang, category, catid } = useParams();
  const dispatch = useDispatch();
  const { categories, products } = useSelector(homeSelector);
  useEffect(() => {
    if (!categories.data.length) {
      dispatch(getCategories({}));
    }
    dispatch(getProduct(catid && { category: catid }));
  }, [dispatch]);
  const { pagination } = products;
  const handlePageChange = ({ selected }) => {
    dispatch(getProduct({ category: catid && catid , page:selected+1 }));
  };

  return (
    <>
      <main>
        <Hero />
        <div className="product-container">
          <div className="container">
            <Sidebar />
            <div className="product-box">
              <ProductGrid />
              <div className="product-pagination">
                <ReactPaginate
                  previousLabel={<ChevronLeft width={18} height={18} />}
                  nextLabel={<ChevronRight width={18} height={18} />}
                  breakLabel="..."
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={3}
                  pageCount={pagination.totalPages}
                  // forcePage={data.pageNumber - 1}
                  onPageChange={(page) => handlePageChange(page)}
                  disableInitialCallback={true}
                  activeClassName="active"
                  pageClassName="page-item"
                  breakClassName="page-item"
                  nextLinkClassName="page-link"
                  pageLinkClassName="page-link"
                  breakLinkClassName="page-link"
                  previousLinkClassName="page-link"
                  nextClassName="page-item next-item"
                  previousClassName="page-item prev-item "
                  containerClassName={"pagination"}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
