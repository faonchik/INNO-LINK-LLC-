import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  { url: "https://static.tildacdn.com/tild3666-3837-4763-b266-663632313561/Housing.jpg", alt: "Housing" },
  { url: "https://static.tildacdn.com/tild3536-3261-4661-b964-336238633334/SP1.jpg", alt: "SP1" },
  { url: "https://static.tildacdn.com/tild6432-3762-4537-a166-303561653130/SP2.jpg", alt: "SP2" },
  { url: "https://static.tildacdn.com/tild3061-3266-4366-a663-353535393339/SP3.jpg", alt: "SP3" },
  { url: "https://static.tildacdn.com/tild3564-6562-4263-a334-326530386165/SP4.jpg", alt: "SP4" },
  { url: "https://static.tildacdn.com/tild3330-3062-4462-a164-343562363366/SP6.jpg", alt: "SP6" },
  { url: "https://static.tildacdn.com/tild3364-6335-4735-a465-643230333861/SP7.jpg", alt: "SP7" },
];

const SpringVents = () => {
  return (
    <section id="spring-vents">
      <div className="t396__artboard relative" style={{ height: 'auto', paddingBottom: '40px' }}>
        {/* Галерея */}
        <div className="max-w-[600px] mx-auto mb-12 xl:max-w-[1200px] xl:mx-0 2xl:ml-[260px]">
          <div className="hidden md:block">
            <div className="t396__elem tn-elem tn-elem__gallery_arrows-in md:!w-[320px] md:!h-[200px] md:mx-auto md:!left-0 md:right-0 lg:!w-[600px] lg:!h-[400px]" style={{ width: '600px', height: '400px' }}>
              <div className="tn-atom tn-atom__gallery">
                <div className="t-slds" style={{ visibility: 'visible' }}>
                  <div className="t-slds__main xl:!w-[600px] xl:!h-[400px] xl:-ml-[240px] md:!w-[320px] md:!h-[200px] lg:!w-[600px] lg:!h-[400px]" style={{ width: '600px', height: '400px' }}>
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
                      className="xl:!w-[600px] xl:!h-[400px] md:!w-[320px] md:!h-[200px] lg:!w-[600px] lg:!h-[400px]"
                    >
                      {images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <div className="t-width">
                            <div className="t-null__slds-wrapper t-slds__wrapper t-slds__wrapper_100 t-align_center">
                              <div
                                className="tn-atom__slds-img t-bgimg xl:!w-[600px] xl:!h-[400px] md:!w-[320px] md:!h-[200px] lg:!w-[600px] lg:!h-[400px]"
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
          <h2 className="text-[22px] leading-[34px] mb-2 xl:text-center xl:ml-[130px]">Spring vents</h2>
          <div className="w-[300px] h-[2px] bg-[#032a62] mx-auto xl:ml-[130px] xl:mt-[-10px]" />
        </div>

        {/* Круги с текстом - Desktop */}
        <div className="hidden xl:flex xl:absolute xl:top-[170px] xl:left-[740px] 2xl:left-[980px] xl:space-x-4">
          <div className="text-center">
            <div className="circle w-[170px] h-[170px] flex items-center justify-center border border-[#032a62] rounded-full">
              <div className="text-[14px]" style={{ lineHeight: '20px' }}>
                Высокоскоростная<br />обработка
              </div>
            </div>
          </div>

          <div className="text-[20px] text-[#4e6991] flex items-center">+</div>

          <div className="text-center">
            <div className="circle w-[170px] h-[170px] flex items-center justify-center border border-[#032a62] rounded-full">
              <div className="text-[14px]" style={{ lineHeight: '20px' }}>
                Сверхточность
              </div>
            </div>
          </div>

          <div className="text-[20px] text-[#4e6991] flex items-center">+</div>

          <div className="text-center">
            <div className="circle w-[170px] h-[170px] flex items-center justify-center border border-[#032a62] rounded-full">
              <div className="text-[14px]" style={{ lineHeight: '20px' }}>
                Быстрая<br />доставка
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
                  Высокоскоростная<br />обработка
                </div>
              </div>
            </div>

            <div className="text-[12px] md:text-[20px] text-[#4e6991] px-0.5 md:px-2">+</div>

            <div className="text-center">
              <div className="circle md:w-[130px] md:h-[130px]">
                <div className="text-[10px] md:text-[12px]" style={{ lineHeight: '14px' }}>
                  Сверхточность
                </div>
              </div>
            </div>

            <div className="text-[12px] md:text-[20px] text-[#4e6991] px-0.5 md:px-2">+</div>

            <div className="text-center">
              <div className="circle md:w-[130px] md:h-[130px]">
                <div className="text-[10px] md:text-[12px]" style={{ lineHeight: '14px' }}>
                  Быстрая<br />доставка
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpringVents;
