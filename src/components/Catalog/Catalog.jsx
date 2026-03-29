"use client";
import React, { useState } from 'react';
import styles from './Catalog.module.css';
import TopFilterBar from '../TopFilterBar/TopFilterBar';
import FilterSidebar from '../FilterSidebar/FilterSidebar';
import ProductGrid from '../ProductGrid/ProductGrid';

const Catalog = ({ products }) => {
  const [showFilter, setShowFilter] = useState(true);

  return (
    <div className={styles.catalog}>
       {/* Hero text area */}
       <div className={styles.hero}>
         <div className={styles.breadcrumbs}>
           <span>HOME</span> <span className={styles.sep}>|</span> <span>SHOP</span>
         </div>
         <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
         <p className={styles.heroSubtitle}>
           Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
         </p>
       </div>

       <TopFilterBar 
         totalItems={products.length} 
         showFilter={showFilter} 
         onToggleFilter={() => setShowFilter(!showFilter)} 
       />

       <div className={styles.mainLayout}>
         {showFilter && (
           <div className={styles.sidebarWrapper}>
             <FilterSidebar />
           </div>
         )}
         <div className={`${styles.gridWrapper} ${!showFilter ? styles.fullWidth : ''}`}>
           <ProductGrid products={products} showFilter={showFilter} />
         </div>
       </div>
    </div>
  );
};

export default Catalog;
