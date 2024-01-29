import React from "react";
import { Link } from "react-router-dom";
import "./category.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Category = ({ cat }) => {
  const { t } = useTranslation();
  const books = useSelector((state) =>
    state.books.books.filter((book) => book.category === cat._id)
  );
  const categoryImages = {
    "64b408526fdbde2d54ccfde6": "assets/img/short_stories.jpg",
    "64b40ab76fdbde2d54ccfde7": "assets/img/horror.jpg",
    "64b4cb048d2ab761efbf02ef": "assets/img/political_philosophy.jpg",
    "64b4fd17fbddfb97a9442a67": "assets/img/classics.jpg",
    "64b40422c282e200b2206b04": "assets/img/psychology.jpg",
    "64ce522b849030c75618678b": "assets/img/comedy.jpg",
    "6500c955bcd1b8b1b7bac767": "assets/img/self_development.jpg",
    "6505f95142f488d524817880": "assets/img/novel.jpg",
  };

  const getCategoryImage = (categoryId) => {
    return categoryImages[categoryId];
  };

  return (
    <div className="col">
      <Link to={`/store/${cat._id}`} className="card-link">
        <div className="card text-bg-dark">
          <img
            src={getCategoryImage(cat._id)}
            className="card-img"
            alt={cat.name}
          />
          <div className="card-img-overlay d-flex flex-column justify-content-end">
            <h5 className="card-title mb-2">{cat.name}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Category;