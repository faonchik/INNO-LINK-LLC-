import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const images = [
  { url: "https://static.tildacdn.com/tild6632-6437-4933-a531-313833653333/1_Annular_Gear.png", alt: "Annular Gear" },
  { url: "https://static.tildacdn.com/tild6433-6231-4839-b964-313264333235/2_Helical_Gear.jpg", alt: "Helical Gear" },
  { url: "https://static.tildacdn.com/tild6163-6439-4433-a166-386236323166/3_Herring_Bone_Gear.jpg", alt: "Herring Bone Gear" },
  { url: "https://static.tildacdn.com/tild6335-3638-4433-a363-386639363563/4_Hypoid_Gear.jpg", alt: "Hypoid Gear" },
  { url: "https://static.tildacdn.com/tild3839-6337-4535-b536-373731316634/5_internal_gear.jpg", alt: "Internal Gear" },
  { url: "https://static.tildacdn.com/tild6139-3065-4962-b433-383439383363/6_Pinion_Shaft.jpg", alt: "Pinion Shaft" },
  { url: "https://static.tildacdn.com/tild6466-3763-4131-b136-353562313539/7_Rack_And_Pinion.jpg", alt: "Rack And Pinion" },
  { url: "https://static.tildacdn.com/tild6431-3238-4838-a332-633233643130/8_Screw_Gear.jpg", alt: "Screw Gear" },
  { url: "https://static.tildacdn.com/tild3839-6436-4362-b161-303462393064/9_planetary-gear.jpeg", alt: "Planetary Gear" },
  { url: "https://static.tildacdn.com/tild3262-6363-4132-b134-376132323165/10_Plastic_Gear.jpg", alt: "Plastic Gear" },
  { url: "https://static.tildacdn.com/tild3635-3661-4463-a435-653437396633/11_Spiral_Bevel_Gear.jpg", alt: "Spiral Bevel Gear" },
  { url: "https://static.tildacdn.com/tild3636-6265-4262-b661-366438306362/12_Spline_Shaft.jpg", alt: "Spline Shaft" },
  { url: "https://static.tildacdn.com/tild3863-6532-4836-a136-666337653236/13_Spur_Gear.jpg", alt: "Spur Gear" },
  { url: "https://static.tildacdn.com/tild6463-3039-4231-a362-386335313337/14_timing_pulley.jpg", alt: "Timing Pulley" },
  { url: "https://static.tildacdn.com/tild3164-6134-4337-b734-326162346639/15_Worm_Gear.jpg", alt: "Worm Gear" },
];

const ThreadedProducts = () => {
  return (
    <section id="threaded-products max-w-[1200px] mx-auto">
      <div className="t396__artboard relative" style={{ height: 'auto', paddingBottom: '40px' }}>
        {/* Галерея */}
        <div className="max-w-[600px] mx-auto mb-12 xl:max-w-[1200px] xl:mx-0 2xl:ml-[360px]">
          <div className="hidden md:block">
            <div className="t396__elem tn-elem tn-elem__gallery_arrows-in md:!w-[320px] md:!h-[300px] md:mx-auto md:!left-0 md:right-0 lg:!w-[600px] lg:!h-[400px]" style={{ width: '600px', height: '400px' }}>
              <div className="tn-atom tn-atom__gallery">
                <div className="t-slds" style={{ visibility: 'visible' }}>
                  <div className="t-slds__main xl:!w-[500px] xl:!h-[500px] xl:-ml-[240px] md:!w-[320px] md:!h-[300px] lg:!w-[600px] lg:!h-[400px]" style={{ width: '600px', height: '400px' }}>
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
                      className="xl:!w-[500px] xl:!h-[500px] md:!w-[320px] md:!h-[300px] lg:!w-[600px] lg:!h-[400px]"
                    >
                      {images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <div className="t-width">
                            <div className="t-null__slds-wrapper t-slds__wrapper t-slds__wrapper_100 t-align_center">
                              <div
                                className="tn-atom__slds-img t-bgimg xl:!w-[500px] xl:!h-[500px] md:!w-[320px] md:!h-[300px] lg:!w-[600px] lg:!h-[400px]"
                                data-img-lid={`tild${index}`}
                                data-original={image.url}
                                style={{
                                  backgroundImage: `url(${image.url})`,
                                  width: '600px',
                                  height: '400px',
                                  backgroundPosition: 'center center',
                                  backgroundSize: 'cover'
                                }}
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                      <div className="swiper-button-prev !text-black !bg-[#e8e8e8] !w-[30px] !h-[30px] !left-[20px]" />
                      <div className="swiper-button-next !text-black !bg-[#e8e8e8] !w-[30px] !h-[30px] !right-[20px]" />
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Мобильный слайдер */}
          <div className="block md:hidden w-full max-w-[600px] h-[300px]">
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
              className="w-full h-full"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="t-width w-full">
                    <div className="t-null__slds-wrapper t-slds__wrapper t-slds__wrapper_100 t-align_center">
                      <div
                        className="tn-atom__slds-img t-bgimg"
                        style={{
                          backgroundImage: `url(${image.url})`,
                          width: '100%',
                          height: '300px',
                          maxWidth: '600px',
                          margin: '0 auto'
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev !text-black !bg-[#e8e8e8] !w-[30px] !h-[30px] !left-5" />
              <div className="swiper-button-next !text-black !bg-[#e8e8e8] !w-[30px] !h-[30px] !right-5" />
            </Swiper>
          </div>
        </div>

        {/* Заголовок с подчеркиванием */}
        <div className="text-center mb-8 xl:text-left xl:absolute xl:top-[40px] xl:left-[740px] 2xl:left-[980px]">
          <h2 className="text-[22px] leading-[34px] mb-2 xl:text-center xl:ml-[130px]">Изделия с резьбой</h2>
          <div className="w-[300px] h-[2px] bg-[#032a62] mx-auto xl:ml-[130px] xl:mt-[-10px]" />
        </div>

        {/* Круги с текстом - Desktop */}
        <div className="hidden xl:flex xl:absolute xl:top-[170px] xl:left-[740px] 2xl:left-[980px] xl:space-x-4">
          <div className="text-center">
            <div className="circle w-[170px] h-[170px] flex items-center justify-center border border-[#032a62] rounded-full">
              <div className="text-[16px]" style={{ lineHeight: '20px' }}>
                Высокотехнологичное<br />производство
              </div>
            </div>
          </div>

          <div className="text-[20px] text-[#4e6991] flex items-center">+</div>

          <div className="text-center">
            <div className="circle w-[170px] h-[170px] flex items-center justify-center border border-[#032a62] rounded-full">
              <div className="text-[16px]" style={{ lineHeight: '20px' }}>
                Производство<br />индивидуальных<br />моделей
              </div>
            </div>
          </div>

          <div className="text-[20px] text-[#4e6991] flex items-center">+</div>

          <div className="text-center">
            <div className="circle w-[170px] h-[170px] flex items-center justify-center border border-[#032a62] rounded-full">
              <div className="text-[16px]" style={{ lineHeight: '20px' }}>
                Высокое<br />качество
              </div>
            </div>
          </div>
        </div>

        {/* Круги с текстом - Mobile */}
        <div className="max-w-[600px] mx-auto xl:hidden">
          <div className="flex justify-center items-center space-x-0 md:space-x-4">
            <div className="text-center">
              <div className="circle md:w-[130px] md:h-[130px]">
                <div className="text-[10px] md:text-[12px]" style={{ lineHeight: '14px' }}>
                  Высокотехнологичное<br />производство
                </div>
              </div>
            </div>

            <div className="text-[12px] md:text-[20px] text-[#4e6991] px-0.5 md:px-2">+</div>

            <div className="text-center">
              <div className="circle md:w-[130px] md:h-[130px]">
                <div className="text-[10px] md:text-[12px]" style={{ lineHeight: '14px' }}>
                  Производство<br />индивидуальных<br />моделей
                </div>
              </div>
            </div>

            <div className="text-[12px] md:text-[20px] text-[#4e6991] px-0.5 md:px-2">+</div>

            <div className="text-center">
              <div className="circle md:w-[130px] md:h-[130px]">
                <div className="text-[10px] md:text-[12px]" style={{ lineHeight: '14px' }}>
                  Высокое<br />качество
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreadedProducts;
