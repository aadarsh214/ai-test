import { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import FilterBar from './components/FilterBar';
import type { Product } from './types/Product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedMinPrice, setSelectedMinPrice] = useState(0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(1000);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setFilteredProducts(data);
        // Set price range
        const prices = data.map(p => p.price);
        setMinPrice(Math.min(...prices));
        setMaxPrice(Math.max(...prices));
        setSelectedMinPrice(Math.min(...prices));
        setSelectedMaxPrice(Math.max(...prices));
      });
  }, []);

  useEffect(() => {
    let filtered = products;
    if (category) {
      filtered = filtered.filter(p => p.category === category);
    }
    filtered = filtered.filter(p => p.price >= selectedMinPrice && p.price <= selectedMaxPrice);
    setFilteredProducts(filtered);
  }, [products, category, selectedMinPrice, selectedMaxPrice]);

  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="App" style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <h1>AI Product Catalog</h1>
      <FilterBar
        categories={categories}
        selectedCategory={category}
        onCategoryChange={setCategory}
        minPrice={minPrice}
        maxPrice={maxPrice}
        selectedMinPrice={selectedMinPrice}
        selectedMaxPrice={selectedMaxPrice}
        onPriceChange={(min, max) => {
          setSelectedMinPrice(min);
          setSelectedMaxPrice(max);
        }}
      />
      {/* Placeholders for AI features */}
      {/* <NLPProductSearch ... /> */}
      {/* <DynamicPricing ... /> */}
      {/* <RecommendationSystem ... /> */}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
