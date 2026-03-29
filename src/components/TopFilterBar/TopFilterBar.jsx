import React from 'react';
import styles from './TopFilterBar.module.css';

const TopFilterBar = ({ totalItems, showFilter, onToggleFilter }) => {
  return (
    <div className={styles.topBar}>
      {/* Desktop Left Component */}
      <div className={styles.left}>
        <span className={styles.itemCount}>{totalItems} ITEMS</span>
        <button className={styles.toggleFilterDesktop} onClick={onToggleFilter}>
          <span className={styles.chevron}>{showFilter ? '◀' : '▶'}</span>
          <span className={styles.toggleText}>{showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}</span>
        </button>
      </div>
      
      {/* Mobile Split Toolbar Component */}
      <div className={styles.mobileToolbar}>
        <button className={styles.mobileFilterBtn} onClick={onToggleFilter}>FILTER</button>
        <div className={styles.mobileDivider}></div>
        <select className={styles.mobileSortDropdown}>
          <option value="recommended">RECOMMENDED</option>
          <option value="newest">NEWEST FIRST</option>
          <option value="popular">POPULAR</option>
          <option value="high-low">PRICE: HIGH TO LOW</option>
          <option value="low-high">PRICE: LOW TO HIGH</option>
        </select>
      </div>

      {/* Desktop Right Component */}
      <div className={styles.right}>
        <select className={styles.sortDropdown}>
          <option value="recommended">RECOMMENDED</option>
          <option value="newest">NEWEST FIRST</option>
          <option value="popular">POPULAR</option>
          <option value="high-low">PRICE: HIGH TO LOW</option>
          <option value="low-high">PRICE: LOW TO HIGH</option>
        </select>
      </div>
    </div>
  );
};

export default TopFilterBar;
