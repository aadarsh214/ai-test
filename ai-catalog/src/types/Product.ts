export interface Product {
  name: string;
  price: number;
  category: string;
  description: string;
  rating: number;
  // Optionally add demand or other fields for AI features
  demand?: number;
} 