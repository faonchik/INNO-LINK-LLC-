import React from 'react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductSection = ({ title, images, features }: { title: string, images: string[], features: string[] }) => (
  <div className="mb-20">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Левая часть со свайпером */}
      <div className="w-full lg:w-1/2">
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="xl:!w-[500px] xl:!h-[400px] md:!w-[320px] md:!h-[240px] lg:!w-[450px] lg:!h-[350px] w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-[4/3] relative">
                  <div
                    className="w-full h-full xl:!w-[500px] xl:!h-[400px] md:!w-[320px] md:!h-[240px] lg:!w-[450px] lg:!h-[350px]"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev !text-black !bg-[#e8e8e8] !w-[30px] !h-[30px] !left-[20px]" />
            <div className="swiper-button-next !text-black !bg-[#e8e8e8] !w-[30px] !h-[30px] !right-[20px]" />
          </Swiper>
        </div>
      </div>

      {/* Правая часть с заголовком и кругами */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <div className="text-center mb-8">
          <h2 className="text-[22px] leading-[34px] mb-2">{title}</h2>
          <div className="w-[300px] h-[2px] bg-[#032a62]" />
        </div>
        <div className="flex flex-nowrap items-center justify-center">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="text-center">
                <div className="circle w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] xl:w-[170px] xl:h-[170px] flex items-center justify-center border border-[#032a62] rounded-full">
                  <div className="text-[10px] sm:text-[12px] md:text-[12px] lg:text-[13px] xl:text-[14px] px-2 sm:px-3 md:px-4 text-center" style={{ lineHeight: '1.2' }}>
                    {feature}
                  </div>
                </div>
              </div>
              {index < features.length - 1 && (
                <div 
                  className="text-[#4e6991] md:text-[18px] lg:text-[20px]"
                  style={{
                    width: '11px', 
                    height: '18px',
                    fontSize: '14px',
                    lineHeight: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '0.5px',
                    marginRight: '0.5px'
                  }}
                >
                  +
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ProductGallery: React.FC = () => {
  const slidingPlatesImages = [
    '/images/plates/SLP1.jpg',
    '/images/plates/SLP2.jpg',
    '/images/plates/SLP3.jpg',
    '/images/plates/SLP4.jpg',
    '/images/plates/SLP5.jpg'
  ];

  const threadedPartsImages = [
    '/images/threaded/THP1.jpg',
    '/images/threaded/THP2.jpg',
    '/images/threaded/THP3.jpg',
    '/images/threaded/THP4.jpg',
    '/images/threaded/THP5.jpg'
  ];

  return (
    <div className="relative max-w-[1200px] mx-auto px-4" style={{ height: 'auto', paddingBottom: '40px' }}>
      <ProductSection
        title="Пластины скольжения"
        images={slidingPlatesImages}
        features={[
          'Разработка\n3д\nчертежей',
          'Современный\nсамосмазывающий\nматериал',
          'Массовое\nпроизводство'
        ]}
      />
    </div>
  );
};

export default ProductGallery;
