const Banner = ({ data }) => {
    if (!data) return null; // 防止未找到資料時出錯
  
    return (
        <div className="relative h-full">
        {/* 圖片背景區塊 */}
        <div
          className="relative bg-cover bg-center py-16 md:py-24"
          style={{
            backgroundImage: `url(${data.categoryphoto})`,
          }}
        >
          {/* 遮罩層 */}
          <div className="absolute inset-0 bg-white/60"></div>
      
          {/* 內容區：container 控左右留白 */}
          <div className="relative container mx-auto px-4 md:px-8 text-center">
            <p className="text-[32px] sm:text-[48px] md:text-[64px] font-semibold text-black inline-block px-4 sm:px-6 py-2 sm:py-3 leading-tight sm:leading-snug">
              {data.categoryname}
            </p>
          </div>
        </div>
      </div>
          
    );
  };
  
  export default Banner;
  
