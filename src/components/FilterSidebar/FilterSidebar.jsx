"use client";
import React, { useState } from 'react';
import styles from './FilterSidebar.module.css';

const FilterSection = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.section}>
      <button className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <div>
          <h4 className={styles.title}>{title}</h4>
          <span className={styles.subtitle}>All</span>
        </div>
        <span className={styles.chevron}>{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div className={styles.content}>
          <div className={styles.unselectAll}>Unselect all</div>
          {options.map((opt, i) => {
             const htmlId = `${title.replace(/\s+/g, '')}-${i}`;
             return (
               <label key={i} htmlFor={htmlId} className={styles.checkboxLabel}>
                 <input id={htmlId} type="checkbox" className={styles.checkbox} />
                 <span className={styles.checkboxText}>{opt}</span>
               </label>
             );
          })}
        </div>
      )}
    </div>
  );
};

const FilterSidebar = () => {
  const filterData = [
    { title: 'IDEAL FOR', options: ['Men', 'Women', 'Baby & Kids'] },
    { title: 'OCCASION', options: ['Casual', 'Formal', 'Party'] },
    { title: 'WORK', options: ['Embroidery', 'Printed', 'Woven'] },
    { title: 'FABRIC', options: ['Cotton', 'Silk', 'Linen'] },
    { title: 'SEGMENT', options: ['Premium', 'Regular'] },
    { title: 'SUITABLE FOR', options: ['Summer', 'Winter'] },
    { title: 'RAW MATERIALS', options: ['Wool', 'Leather'] },
    { title: 'PATTERN', options: ['Solid', 'Striped'] }
  ];

  return (
    <aside className={styles.sidebar}>
      <label className={styles.customizableToggle}>
        <input type="checkbox" className={styles.checkboxToggle} />
        CUSTOMIZABLE
      </label>
      
      {filterData.map((filter, index) => (
        <FilterSection key={index} title={filter.title} options={filter.options} />
      ))}
    </aside>
  );
};

export default FilterSidebar;
