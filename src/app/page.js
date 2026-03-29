import styles from "./page.module.css";
import Header from "@/components/Header/Header";
export const dynamic = 'force-dynamic';
import Footer from "@/components/Footer/Footer";
import Catalog from "@/components/Catalog/Catalog";

const FALLBACK_PRODUCTS = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    description: "Your perfect pack for everyday use.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    title: "John Hardy Women's Legends Naga Gold",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    title: "Solid Gold Petite Micropave",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    title: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring.",
    image: "https://images.unsplash.com/photo-1605100804763-247f66126e28?auto=format&fit=crop&w=400&q=80",
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
    if (error.digest === 'DYNAMIC_SERVER_USAGE') {
      throw error;
    }
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
