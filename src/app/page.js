import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Catalog from "@/components/Catalog/Catalog";

const FALLBACK_PRODUCTS = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    description: "Your perfect pack for everyday use.",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve.",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter.",
    image: "https://fakestoreapi.com/img/71li-ujtlVG._AC_UX679_.jpg",
  },
  {
    id: 4,
    title: "John Hardy Women's Legends Naga Gold",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon.",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 5,
    title: "Solid Gold Petite Micropave",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 6,
    title: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring.",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  }
];

export default async function Home() {
  let products = [];
  
  try {
    const res = await fetch("https://fakestoreapi.com/products", { cache: 'no-store' });
    if (res.ok) {
      products = await res.json();
    } else {
      console.warn("Vercel hit a FakeStore API rate limit. Switching to fallback data.");
      products = FALLBACK_PRODUCTS;
    }
  } catch (error) {
    console.error("Failed to fetch products via SSR:", error);
    products = FALLBACK_PRODUCTS;
  }
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
