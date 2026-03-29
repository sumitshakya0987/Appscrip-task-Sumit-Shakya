import Image from 'next/image';
import styles from './ProductCard.module.css';
import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={product.image || '/placeholder.jpg'} 
          alt={`Image of ${product.title}`} 
          fill
          unoptimized={true}
          style={{ objectFit: 'contain', padding: '24px' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.titleRow}>
          <h2 className={styles.title}>{product.title}</h2>
          <button 
            className={`${styles.likeBtn} ${isLiked ? styles.liked : ''}`} 
            onClick={() => setIsLiked(!isLiked)}
            aria-label="Like product"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={isLiked ? "#eb4c6b" : "none"} stroke={isLiked ? "#eb4c6b" : "currentColor"} strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
        <div className={styles.priceRow}>
          <p className={styles.loginText}>
            <a href="#">Sign in</a> or Create an account to see pricing
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
