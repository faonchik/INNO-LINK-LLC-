import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Advantages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-8 md:py-[60px]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-[60px]">
        <div className="flex flex-col justify-center">
          <div>
            <div className="mb-8 md:mb-12 xl:mb-8">
              <div style={{ fontSize: '32px', fontWeight: 600 }} data-customstyle="yes">
                Наши преимущества
              </div>
              <p className="text-[22px] leading-[1.55] max-w-[600px]">
                Мы стремимся к постоянному развитию и совершенствованию, предлагая качественные, надежные, быстрые и доступные решения в индустрии.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-[3.5px]">
                  <div className="w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31ZM24.714 11.5566L23.2235 10.1309L13.6399 20.1502L9.2292 15.7395L7.7708 17.198L13.6726 23.0998L24.714 11.5566Z" fill="rgb(3, 42, 98)"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-[24px] font-bold mb-2">Инновационные технологии</h3>
                  <p className="text-[22px]">Используем передовые методы проектирования и производства.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-[3.5px]">
                  <div className="w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31ZM24.714 11.5566L23.2235 10.1309L13.6399 20.1502L9.2292 15.7395L7.7708 17.198L13.6726 23.0998L24.714 11.5566Z" fill="rgb(3, 42, 98)"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-[24px] font-bold mb-2">Высочайшее качество</h3>
                  <p className="text-[22px]">Многоуровневый контроль качества на каждом этапе позволяет нам предлагать продукцию высочайшего качества.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-[3.5px]">
                  <div className="w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31ZM24.714 11.5566L23.2235 10.1309L13.6399 20.1502L9.2292 15.7395L7.7708 17.198L13.6726 23.0998L24.714 11.5566Z" fill="rgb(3, 42, 98)"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-[24px] font-bold mb-2">Гибкий подход</h3>
                  <p className="text-[22px]">Индивидуальная работа с клиентами и кастомизация продукции.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-[3.5px]">
                  <div className="w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31ZM24.714 11.5566L23.2235 10.1309L13.6399 20.1502L9.2292 15.7395L7.7708 17.198L13.6726 23.0998L24.714 11.5566Z" fill="rgb(3, 42, 98)"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-[24px] font-bold mb-2">Глобальное присутствие</h3>
                  <p className="text-[22px]">Более 1000 парнеров по всему миру.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[200px] md:h-[400px] xl:h-[293px] relative max-w-[300px] md:max-w-full xl:max-w-[560px] mx-auto mt-8 md:mt-12">
            <Image
              src="/assets/map.jpg"
              alt="Global presence map"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
