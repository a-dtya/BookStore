import React from "react";
import { useTranslation } from "react-i18next";
import Carousel from 'react-bootstrap/Carousel';
import './hero.css'


const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
    <div className="p-0 m-0" >
      
   <Carousel fade>
    <Carousel.Item>
    <div className="text-center p-lg-6" style={{background: "url(https://images.pexels.com/photos/2873603/pexels-photo-2873603.jpeg)",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
          <div className="col-xxl" style={{height:"35rem"}}>
            <div className="p-0 m-0 text-light" style={{backgroundColor : "rgba(0, 0, 0, 0.380)",height:"35rem"}}>
                <div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <h1 style={{fontFamily:'Oxygen, sans serif'}} className="hero-title hero-shadow">{t('home.hero.title')}</h1>
                    <h4 style={{fontFamily:'Oxygen, sans serif'}} className="hero-des hero-shadow">
                      {t('home.hero.description')}<br />
                    </h4>
                    
                    <br /><br /><br /><br /><br /><br />
                </div>
            </div>
            <div className="lc-block">
              <div editable="rich"></div>
            </div>
          </div>
        </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className="text-center p-lg-6" style={{background: "url(https://images.pexels.com/photos/1989704/pexels-photo-1989704.jpeg)",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
          <div className="col-xxl" style={{height:"35rem"}}>
            <div className="p-0 m-0 text-light" style={{backgroundColor : "rgba(0, 0, 0, 0.380)",height:"35rem"}}>
                <div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <h1 style={{fontFamily:'Oxygen, sans serif'}} className="hero-title hero-shadow">{t('home.hero.title')}</h1>
                    <h4 style={{fontFamily:'Oxygen, sans serif'}} className="hero-des hero-shadow">
                      {t('home.hero.description')}<br />
                    </h4>
                    
                    <br /><br /><br /><br /><br /><br />
                </div>
            </div>
            <div className="lc-block">
              <div editable="rich"></div>
            </div>
          </div>
        </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className="text-center p-lg-6" style={{background: "url(https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg)",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
          <div className="col-xxl" style={{height:"35rem"}}>
            <div className="p-0 m-0 text-light" style={{backgroundColor : "rgba(0, 0, 0, 0.380)",height:"35rem"}}>
                <div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <h1 style={{fontFamily:'Oxygen, sans serif'}} className="hero-title hero-shadow">{t('home.hero.title')}</h1>
                    <h4 style={{fontFamily:'Oxygen, sans serif'}} className="hero-des hero-shadow">
                      {t('home.hero.description')}<br />
                    </h4>
                    
                    <br /><br /><br /><br /><br /><br />
                </div>
            </div>
            <div className="lc-block">
              <div editable="rich"></div>
            </div>
          </div>
        </div>
    </Carousel.Item>
   </Carousel>
        
    
      </div>
    </>
  );
};

export default Hero;
