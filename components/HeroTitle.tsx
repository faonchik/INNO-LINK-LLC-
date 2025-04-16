import React from 'react';

const HeroTitle: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center text-center">
      {/* Заголовок */}
      <div className="t181__title t-title t-title_md w-full">
        <div style={{ fontSize: '72px' }} data-customstyle="yes">
          <span style={{ color: 'rgb(255, 255, 255)', fontWeight: 400 }}>
            INNO LINK LLC
          </span>
        </div>
      </div>

      {/* Подзаголовок */}
      <div className="t181__descr t-descr t-descr_lg w-full">
        <span style={{ color: 'rgb(255, 255, 255)' }}>
          Технологии будущего, качество без компромиссов!
        </span>
      </div>
    </div>
  );
};

export default HeroTitle; 
