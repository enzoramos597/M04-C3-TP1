import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import tendencia1 from '../assets/Merlina.jpg';
import tendencia2 from '../assets/Happy.jpg';
import tendencia3 from '../assets/Naruto.jpg';
import tendencia4 from '../assets/Enelbarro.jpg';
import tendencia5 from '../assets/Otra_vida.webp';
import Slider from "react-slick";

const trendData = [
  { id: 1, src: tendencia1, alt: 'MERLINA', title: 'Merlina' },
  { id: 2, src: tendencia2, alt: 'Happy Gilmore 2', title: 'Happy Gilmore 2' },
  { id: 3, src: tendencia3, alt: 'Naruto', title: 'Naruto' },
  { id: 4, src: tendencia4, alt: 'En el Barro', title: 'En el Barro' },
  { id: 5, src: tendencia5, alt: 'Otra Vida', title: 'Otra Vida' },
];

/* ---------- Flechas personalizadas ---------- */
const PrevArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Anterior"
    className="custom-arrow prev-cta absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 md:left-10 z-[60] bg-black/60 hover:bg-black/80 text-white rounded-full p-2 sm:p-3"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Siguiente"
    className="custom-arrow next-cta absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 md:right-10 z-[60] bg-black/60 hover:bg-black/80 text-white rounded-full p-2 sm:p-3"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

/* ---------- Componente Main ---------- */
const Main = () => {
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Desktop mediano
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 480, // Celulares
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true, // Aseguramos que las flechas sigan activas
        }
      }
    ]
  };

  return (
    <div className="pt-10">
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full h-10 mb-4 bg-transparent"
            style={{ background: 'radial-gradient(ellipse at center, #E50914 0%, transparent 70%)' }}>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tendencias</h2>

         {/* Slider */}
<div className="relative px-6 sm:px-8 md:px-12"> 
  <Slider {...sliderSettings}>
    {trendData.map(trend => (
      <div key={trend.id} className="p-4">
        <div
          className={
            "relative rounded-md overflow-hidden transition-transform hover:scale-105 border border-red-600 shadow-lg shadow-neutral-950 mx-auto " +
            "h-[200px] w-[250px] sm:h-[280px] sm:w-[300px] md:h-[350px] md:w-[350px]"
          }
        >
          <img src={trend.src} alt={trend.alt} className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 bg-black/60 text-white p-2">
            <span className="font-bold text-lg">{trend.title}</span>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>
            {/* Fin Slider */}

          <div className="w-full h-12 mt-4 bg-transparent"></div>
          <div className="w-full h-10 mb-10 bg-transparent"
            style={{ background: 'radial-gradient(ellipse at center, #E50914 0%, transparent 70%)' }}>
          </div>
        </div>
      </section>

      <hr className="my-10 border-neutral-700" />

      {/* FAQ ... (mantener igual) */}
      <section className="py-10 bg-neutral-800">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Preguntas frecuentes</h2>
          {/* ...retener tu contenido FAQ existente */}
        </div>
      </section>
    </div>
  );
};

export default Main;
