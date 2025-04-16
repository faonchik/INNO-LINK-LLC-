import { useEffect, useState, useRef } from 'react';
import styles from './ResearchDevelopment.module.css';

const ResearchDevelopment: React.FC = () => {
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
    <div className="t477" ref={sectionRef}>
      <div className="flex">
        <div className="hidden lg:block" itemScope itemType="http://schema.org/ImageObject">
          <meta itemProp="image" content="https://static.tildacdn.com/tild6139-3733-4238-b161-383832346363/WhatsApp_Image_2025-.jpeg" />
          <div
            className={`t477__blockimg t-bgimg ${styles.blockimg}`}
            style={{
              backgroundImage: `url('https://static.tildacdn.com/tild6139-3733-4238-b161-383832346363/WhatsApp_Image_2025-.jpeg')`
            }}
          />
        </div>

        <div className="t-col t477__col t-col_6" itemScope itemType="http://schema.org/ImageObject">
          <meta itemProp="image" content="https://static.tildacdn.com/tild6139-3733-4238-b161-383832346363/WhatsApp_Image_2025-.jpeg" />
          <div className={`t-align_left ${styles.textwrapper}`}>
            <div className="t477__content t-valign_middle">
              <div className={`t477__box ${styles.content}`}>
                <div
                  className="t477__title t-title t-title_xs"
                  data-animate-style="fadeinleft"
                  data-animate-group="yes"
                  data-animate-order="1"
                >
                  <div style={{ fontSize: '30px', lineHeight: '30px', color: '#ffffff' }} data-customstyle="yes">
                    <strong>Исследования и разработки</strong>
                  </div>
                </div>

                <div
                  className="t-divider t477__line"
                  data-animate-style="fadein"
                  data-animate-group="yes"
                  data-animate-order="2"
                  data-animate-delay="0.3"
                  style={{ backgroundColor: '#ffffff', opacity: 0.60, width: '60px', height: '3px', margin: '30px 0' }}
                />

                <div
                  className="t477__descr t-descr t-descr_md"
                  data-animate-style="fadeinleft"
                  data-animate-group="yes"
                  data-animate-order="2"
                  data-animate-delay="0.3"
                >
                  <div style={{ fontSize: '20px', color: '#ffffff' }} data-customstyle="yes">
                    Наш <strong>исследовательский центр</strong> использует передовое программное обеспечение для проектирования продукции с учетом требований клиента. Все изделия проходят моделирование, тест-драйв и анализ с клиентом перед запуском в массовое производство. <strong>Мы создаем инновационные решения, соответствующие мировым стандартам.</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDevelopment;
