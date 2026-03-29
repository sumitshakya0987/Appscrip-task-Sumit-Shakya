import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.newsletter}>
            <h3 className={styles.title}>BE THE FIRST TO KNOW</h3>
            <p className={styles.desc}>Sign up for updates from mettā muse.</p>
            <div className={styles.subscribeForm}>
              <input type="email" placeholder="Enter your e-mail..." className={styles.input} />
              <button className={styles.btn}>SUBSCRIBE</button>
            </div>
          </div>
          
          <div className={styles.contact}>
            <h3 className={`${styles.title} ${styles.desktopOnly}`}>CONTACT US</h3>
            <h3 className={`${styles.title} ${styles.mobileOnly}`}>CALL US</h3>
            <div className={styles.contactDetails}>
              <p className={styles.desc}>+44 221 133 5360</p>
              <span className={styles.dotSeparator}></span>
              <p className={styles.desc}>customercare@mettamuse.com</p>
            </div>
            
            <div className={styles.currencyBlock}>
              <h3 className={styles.title}>CURRENCY</h3>
              <p className={styles.currency}>
                <span className={styles.flag}>🇺🇸</span> <span className={styles.dot}></span> USD
              </p>
              <p className={styles.smallText}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
          </div>
        </div>

        <hr className={styles.dividerDesktop} />

        <div className={styles.footerBottom}>
          <div className={styles.linksColumn}>
            <h3 className={`${styles.title} ${styles.accordionTitle}`}>mettā muse <span className={styles.mobileChevron}>▼</span></h3>
            <ul className={styles.linkList}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Artisans</a></li>
              <li><a href="#">Boutiques</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">EU Compliances Docs</a></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h3 className={`${styles.title} ${styles.accordionTitle}`}>QUICK LINKS <span className={styles.mobileChevron}>▼</span></h3>
            <ul className={styles.linkList}>
              <li><a href="#">Orders & Shipping</a></li>
              <li><a href="#">Join/Login as a Seller</a></li>
              <li><a href="#">Payment & Pricing</a></li>
              <li><a href="#">Return & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className={styles.socialPaymentColumn}>
            <div className={styles.social}>
              <h3 className={`${styles.title} ${styles.accordionTitle}`}>FOLLOW US <span className={styles.mobileChevron}>▼</span></h3>
              <div className={styles.socialIcons}>
                <div className={styles.iconCircle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className={styles.iconCircle}>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                   </svg>
                </div>
              </div>
            </div>
            
            <div className={styles.payment}>
              <h3 className={styles.title}>mettā muse ACCEPTS</h3>
              <div className={styles.paymentIcons}>
                 <div className={styles.payIcon}>GPay</div>
                 <div className={styles.payIcon}>MasterCard</div>
                 <div className={styles.payIcon}>PayPal</div>
                 <div className={styles.payIcon}>Amex</div>
                 <div className={styles.payIcon}>Apple Pay</div>
                 <div className={styles.payIcon}>Shop Pay</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
