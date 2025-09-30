import { useState } from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import tendencia1 from '../assets/Merlina.jpg';
import tendencia2 from '../assets/Happy.jpg';
import tendencia3 from '../assets/Naruto.jpg';
import tendencia4 from '../assets/Enelbarro.jpg';
import tendencia5 from '../assets/Otra_vida.webp';
import LogoAnimado from './LogoAnimado';
import Slider from "react-slick";

// Flecha siguiente
const NextArrow = ({ onClick, disabled }) => (
  <div 
    className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white 
      ${disabled ? "opacity-40 pointer-events-none" : ""}`}
    onClick={disabled ? undefined : onClick}
  >
    <span className="text-2xl sm:text-3xl font-bold bg-black/40 rounded-full px-2 py-1 hover:bg-red-600 transition">
      ❯
    </span>
  </div>
);

// Flecha anterior
const PrevArrow = ({ onClick, disabled }) => (
  <div 
    className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white 
      ${disabled ? "opacity-40 pointer-events-none" : ""}`}
    onClick={disabled ? undefined : onClick}
  >
    <span className="text-2xl sm:text-3xl font-bold bg-black/40 rounded-full px-2 py-1 hover:bg-red-600 transition">
      ❮
    </span>
  </div>
);

const trendData = [
  { id: 1, src: tendencia1, alt: 'MERLINA', title: 'Merlina' },
  { id: 2, src: tendencia2, alt: 'Happy Gilmore 2', title: 'Happy Gilmore 2' },
  { id: 3, src: tendencia3, alt: 'Naruto', title: 'Naruto' },
  { id: 4, src: tendencia4, alt: 'En el Barro', title: 'En el Barro' },
  { id: 5, src: tendencia5, alt: 'Otra Vida', title: 'Otra Vida' }, 
];

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShowDefault = 3;

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShowDefault,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  const totalSlides = trendData.length;
  const slidesToShow = 
    window.innerWidth < 640 ? 1 : 
    window.innerWidth < 1024 ? 2 : slidesToShowDefault;

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= totalSlides - slidesToShow;

  return (
    <div className="pt-10">
      {/* 🔥 Logo animado con motion */}
    <LogoAnimado />

      {/* Sección de Tendencias */}
      <section className="mb-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Línea roja con degradado */}
          <div className="w-full h-10 mb-4 bg-transparent"
            style={{
              background: 'radial-gradient(ellipse at center, #E50914 0%, transparent 70%)',
            }}>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Tendencias
          </h2>

          <Slider 
            {...sliderSettings} 
            nextArrow={<NextArrow disabled={isNextDisabled} />} 
            prevArrow={<PrevArrow disabled={isPrevDisabled} />}
          >
            {trendData.map(trend => (
              <div key={trend.id} className="px-2">
                <div className="relative rounded-md overflow-hidden h-[300px] sm:h-[350px] w-full max-w-[350px] mx-auto transition-transform hover:scale-105 border border-red-600 shadow-lg shadow-neutral-950">
                  <img 
                    src={trend.src} 
                    alt={trend.alt} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-2">
                    <span className="font-bold text-lg">{trend.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  )
}

export default Main;
