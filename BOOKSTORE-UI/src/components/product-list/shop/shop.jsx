import React from 'react';
import Filter from '../filter-side/sidebar';
import Product from '../product/product';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Shop = () => {
  const { id } = useParams();
  const category = useSelector((state) => state.categories.find((cat) => cat._id === id));
  const { t } = useTranslation();

  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="container">
        <ol className="breadcrumb">
          {/* Other breadcrumb items */}
          <li className="breadcrumb-item active" aria-current="page">
            <NavLink to="#" className="nav-link">{category.name}</NavLink>
          </li>
        </ol>
      </nav>

      {/* Category Heading */}
      <div className="heading d-flex flex-column align-items-center mb-5">
        <h1>{category.name}</h1>
        <div className="small"></div>
      </div>

      {/* Main container for filter and products */}
      <div className="container">
        <div className="row gx-lg-4">
          <div className="col-lg-3">
            <Filter />
          </div>
          <div className="col-lg-9">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;