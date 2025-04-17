import { useEffect, useState } from 'react';
import CarouselWrapper from './CarouselWrapper';

const PeopleCarousel = ({ id }) => {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    const fetchPeopleData = async () => {
      try {
        const response = await import(`@/json/${id}people.json`);
        setPeopleData(response.default);
      } catch (error) {
        console.error(`Failed to load data for id: ${id}`, error);
        setPeopleData([]); // fallback
      }
    };

    fetchPeopleData();
  }, [id]);

  return (
    <CarouselWrapper
      data={peopleData}
      title="代表作家"
      linkPrefix="/people"
      renderItem={(item) => (
        
          <div className="card w-xs -mx-1 bg-[#FFFBF3] shadow-md p-10 flex-shrink-0 hover:scale-105 transition-transform duration-200">
                    <figure className="w-full h-50 m-0 p-0 bg-gray-200">
                      <img
                        src={item.peoplephoto}
                        alt={item.peoplename}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <div className="mt-2">
                      <h5 className="font-bold text-sm text-gray-600 sm:text-[16px] md:text-[18px]">{item.peoplename}</h5>
                      
                    </div>
        </div>
      )}
    />
  );
};

export default PeopleCarousel;