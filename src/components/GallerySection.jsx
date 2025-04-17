import React, { useEffect, useState } from 'react';
import WorkCard from './WorkCard';

const GallerySection = ({ categoryId }) => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const json = await import(`@/json/${categoryId}galleryworks.json`);
        setWorks(json.default);
      } catch (error) {
        console.error(`❌ 無法載入 ${categoryId}galleryworks.json`, error);
        setWorks([]);
      }
    };

    fetchWorks();
  }, [categoryId]);

  return (
    <>
    <h5 className='flex justify-center m-5 mb-3 font-bold'>作品</h5>

    <div className="p-4 flex flex-wrap gap-4 justify-center mx-12">
      {works.map((item) => (
        <WorkCard key={item.id} item={{ ...item, category: categoryId }} />
      ))}
    </div>
    </>
  );
};

export default GallerySection;
