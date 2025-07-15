import * as React from 'react';
import type { Product } from '../types/Product';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface ProductCardProps {
  product: Product;
  adjustedPrice?: number; // For dynamic pricing
}

const glassStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.15)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  color: '#222',
  minHeight: 220,
};

const ProductCard: React.FC<ProductCardProps> = ({ product, adjustedPrice }) => {
  return (
    <Card style={glassStyle} className="transition-shadow hover:shadow-2xl">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p style={{ fontWeight: 500, marginBottom: 4 }}>Category: {product.category}</p>
        <p style={{ marginBottom: 4 }}>{product.description}</p>
        <p style={{ marginBottom: 4 }}>Rating: <span style={{ color: '#f59e42', fontWeight: 600 }}>{product.rating}</span></p>
        <p style={{ fontSize: 18, fontWeight: 700, marginTop: 12 }}>
          Price: {adjustedPrice !== undefined ? (
            <>
              <span style={{ textDecoration: 'line-through', color: 'gray', marginRight: 8 }}>${product.price}</span>
              <span style={{ color: 'green' }}>${adjustedPrice}</span>
            </>
          ) : (
            <>${product.price}</>
          )}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProductCard; 