// src/components/CategoryCarousel.jsx
import React from 'react';
import CarouselWrapper from './CarouselWrapper';
import categoryData from '../json/category.json';

const CategoryCarousel = () => (
  <CarouselWrapper
    data={categoryData}
    title=""
    linkPrefix="/gallery/category"
  />
);

export default CategoryCarousel;