import * as React from 'react';
import type { Product } from '../types/Product';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  adjustedPrices?: { [name: string]: number };
}

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
  padding: '2rem',
  background: 'rgba(255,255,255,0.10)',
  borderRadius: '32px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',
};

const ProductList: React.FC<ProductListProps> = ({ products, adjustedPrices }) => {
  return (
    <div className="product-list" style={gridStyle}>
      {products.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          adjustedPrice={adjustedPrices ? adjustedPrices[product.name] : undefined}
        />
      ))}
    </div>
  );
};

export default ProductList; 