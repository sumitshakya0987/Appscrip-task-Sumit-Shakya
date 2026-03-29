import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Catalog from "@/components/Catalog/Catalog";

export default async function Home() {
  // Fetching data Server-Side (SSR)
  const res = await fetch("https://fakestoreapi.com/products", { cache: 'no-store' });
  let products = [];
  
  if (res.ok) {
    products = await res.json();
  }

  // Schema.org structured data 
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': products.map((product, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Product',
        'url': `https://fakestoreapi.com/products/${product.id}`,
        'name': product.title,
        'image': product.image,
        'description': product.description,
        'offers': {
          '@type': 'Offer',
          'price': product.price,
          'priceCurrency': 'USD'
        }
      }
    }))
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className={styles.main}>
        <div className="container">
          <Catalog products={products} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
