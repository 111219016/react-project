import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
// import AddToHeart from '../components/AddToHeart';
import ShopButton from '../components/ShopButton';
import Footer from '../components/Footer';

const WorkDetailPage = () => {
    const { category, id } = useParams(); // c1 + Angelico002
    const [work, setWork] = useState(null);
  
    useEffect(() => {
      const fetchWork = async () => {
        try {
          const data = await import(`@/json/${category}galleryworks.json`);
          const found = data.default.find((item) => item.id === id);
          setWork(found || null);
        } catch (error) {
          console.error(`❌ 無法載入 ${category}galleryworks.json`, error);
          setWork(null);
        }
      };
  
      fetchWork();
    }, [category, id]);
  
    if (!work) return <div className="text-center py-10">找不到作品</div>;
  
    return (
      <div className="w-full  mx-auto bg-base-100">
        <Header />
        <Navbar />
          <div className="p-6 flex flex-col items-center text-black mx-10 mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl items-stretch">
                  
                  
                  <div className="w-full h-[400px] border border-gray-300 p-2 flex items-center justify-center bg-white shadow-sm">
                  <img
                      src={work.photo}
                      alt={work.name}
                      className="max-h-full max-w-full object-contain"
                  />
                  </div>
  
                  {/* 文字資訊 */}
                  <div className="flex flex-col justify-start space-y-2 text-left ">
                  <p className="text-[32px] sm:text-[32px] md:text-[48px] font-bold">{work.name}</p>
                  <p className="text-[18px] md:text-[20px]"><strong>編　號：</strong>{work["serial-number"]}</p>
                  <p className="text-[18px] md:text-[20px]"><strong>作　者：</strong>{work.author}</p>
                  <p className="text-[18px] md:text-[20px]"><strong>年　份：</strong>{work.year}</p>
                  <p className="text-[18px] md:text-[20px]"><strong>原作尺寸：</strong>{work.size}</p>
                  <p className="text-[18px] md:text-[20px]"><strong>原作材質畫法：</strong>{work.material}</p>
                  </div>
                  {/* <AddToHeart /> */}
                  {/* <img src="../images/addtoheart.svg" /> */}
              </div>
  
              {/* Detail 區塊 */}
              <div className="mt-6 w-full max-w-4xl text-left">
                  <h2 className="font-semibold mb-2 text-[18px] md:text-[20px]">Detail</h2>
                  <p className="whitespace-pre-line text-[18px] md:text-[20px] tracking-wider">{work.detail}</p>
              </div>
          </div>
  
        <ShopButton />
  
        <Footer />
      </div>
    );
  };
  
  export default WorkDetailPage;