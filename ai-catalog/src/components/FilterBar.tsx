import React from 'react';

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  minPrice: number;
  maxPrice: number;
  selectedMinPrice: number;
  selectedMaxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  minPrice,
  maxPrice,
  selectedMinPrice,
  selectedMaxPrice,
  onPriceChange,
}) => {
  return (
    <div className="filter-bar" style={{ marginBottom: '1rem' }}>
      <label>
        Category:
        <select value={selectedCategory} onChange={e => onCategoryChange(e.target.value)}>
          <option value="">All</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <label style={{ marginLeft: '1rem' }}>
        Price:
        <input
          type="number"
          value={selectedMinPrice}
          min={minPrice}
          max={selectedMaxPrice}
          onChange={e => onPriceChange(Number(e.target.value), selectedMaxPrice)}
          style={{ width: 60, marginLeft: 4 }}
        />
        -
        <input
          type="number"
          value={selectedMaxPrice}
          min={selectedMinPrice}
          max={maxPrice}
          onChange={e => onPriceChange(selectedMinPrice, Number(e.target.value))}
          style={{ width: 60, marginLeft: 4 }}
        />
      </label>
    </div>
  );
};

export default FilterBar; 