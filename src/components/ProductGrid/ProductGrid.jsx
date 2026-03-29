import React from 'react';
import styles from './ProductGrid.module.css';
import ProductCard from '../ProductCard/ProductCard';

const ProductGrid = ({ products, showFilter }) => {
  return (
    <div className={`${styles.grid} ${showFilter ? styles.withFilter : styles.withoutFilter}`}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
