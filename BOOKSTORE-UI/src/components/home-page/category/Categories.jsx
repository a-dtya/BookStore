import React from 'react'
import { Link } from 'react-router-dom'
import './category.css'
import {  useSelector } from 'react-redux'
import Category from './category-section'
import { useTranslation } from 'react-i18next'

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const bookCount = useSelector((state) => state.categories.bookNum);
 
  console.log('====== Num Of Categories ====>',categories);
  
  
  

  const { t } = useTranslation();

  return (
    
    <div id="store">
        
      <div className="heading d-flex flex-column align-items-center" id="Store">
        <div><h1>{t('home.category.title')}</h1> </div><div className="small"></div>
      </div>
      <section className="container mb-5">
        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
          {categories.map((cat) => {
            return  <Category cat={cat}  key={cat._id}/>
          })}
        </div>
      </section>
    </div>
  )
}

export default Categories;

