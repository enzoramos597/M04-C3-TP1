import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import tendencia1 from '../assets/Merlina.jpg';
import tendencia2 from '../assets/Happy.jpg';
import tendencia3 from '../assets/Naruto.jpg';
import tendencia4 from '../assets/Enelbarro.jpg';
import tendencia5 from '../assets/Otra_vida.webp'; // Example of a fifth image
import Slider from "react-slick";

const trendData = [
    { id: 1, src: tendencia1, alt: 'MERLINA', title: 'Merlina' },
    { id: 2, src: tendencia2, alt: 'Happy Gilmore 2', title: 'Happy Gilmore 2' },
    { id: 3, src: tendencia3, alt: 'Naruto', title: 'Naruto' },
    { id: 4, src: tendencia4, alt: 'En el Barro', title: 'En el Barro' },
    { id: 5, src: tendencia5, alt: 'Otra Vida', title: 'Otra Vida' }, 
];

const Main = () => {
    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
  return (
    <div className="pt-10">
            {/* Sección de Tendencias */}
            <section className="mb-16">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Línea roja con degradado y forma ovalada */}
                    <div className="w-full h-10 mb-4 bg-transparent"
                        style={{
                            background: 'radial-gradient(ellipse at center, #E50914 0%, transparent 70%)',
                        }}>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Tendencias
                    </h2>

                    {/* Conditionally render the grid or the carousel */}
                    {trendData.length <= 3 ? (
                        // Normal grid layout
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-y-4">
                            {trendData.map(trend => (
                                <div 
                                    key={trend.id}
                                    className=" rounded-md overflow-hidden h-[300px] transition-transform hover:scale-110 border border-red-600 shadow-lg "
                                >
                                    <img src={trend.src} alt={trend.alt} className="w-full h-full object-cover" />
                                    <div className="absolute top-0 left-0 bg-black/60 text-white p-2">
                                        <span className="font-bold text-lg">{trend.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Carousel with react-slick
                        <Slider {...sliderSettings}>
                            {trendData.map(trend => (
                                <div key={trend.id} className="p-4">
                                    <div className="relative rounded-md overflow-hidden h-[350px] w-[350px] transition-transform hover:scale-110 border border-red-600 shadow-lg shadow-neutral-950">
                                        <img src={trend.src} alt={trend.alt} className="w-full h-full object-fill" />
                                        <div className="absolute top-0 left-0 bg-black/60 text-white p-2">
                                            <span className="font-bold text-lg">{trend.title}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    )}
                   <div className="w-full h-12 mt-4 bg-transparent">

                   </div>
                    <div className="w-full h-10 mb-10 bg-transparent"
                        style={{
                            background: 'radial-gradient(ellipse at center, #E50914 0%, transparent 70%)',
                        }}>
                    </div>
                </div>
                
            </section>
            
            <hr className="my-10 border-neutral-700" />
            
            {/* Sección de Preguntas Frecuentes (FAQ) */}
            <section className="py-10 bg-neutral-800">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Preguntas frecuentes
                    </h2>
                    
                    {/* Contenedor de preguntas frecuentes */}
                    <div className="space-y-2">
                        {/* Pregunta 1 */}
                        <details className="bg-neutral-900 rounded-lg overflow-hidden">
                            <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-neutral-800 transition-colors duration-200">
                                <span className="text-xl font-semibold text-white">¿Qué es Peliflix?</span>
                                <span className="text-2xl text-white">+</span>
                            </summary>
                            <div className="px-6 py-4 text-lg text-neutral-300 border-t border-neutral-700">
                                <p>Peliflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.</p>
                                <p className="mt-4">Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!</p>
                            </div>
                        </details>
                        
                        {/* Pregunta 2 */}
                        <details className="bg-neutral-900 rounded-lg overflow-hidden">
                            <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-neutral-800 transition-colors duration-200">
                                <span className="text-xl font-semibold text-white">¿Cuánto cuesta Peliflix?</span>
                                <span className="text-2xl text-white">+</span>
                            </summary>
                            <div className="px-6 py-4 text-lg text-neutral-300 border-t border-neutral-700">
                                <p>Disfruta Peliflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 7.199 hasta $ 15.999 al mes (sin impuestos incluidos). Sin costos adicionales ni contratos.</p>
                            </div>
                        </details>
                        
                        {/* Pregunta 3 */}
                        <details className="bg-neutral-900 rounded-lg overflow-hidden">
                            <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-neutral-800 transition-colors duration-200">
                                <span className="text-xl font-semibold text-white">¿Dónde puedo ver Peliflix?</span>
                                <span className="text-2xl text-white">+</span>
                            </summary>
                            <div className="px-6 py-4 text-lg text-neutral-300 border-t border-neutral-700">
                                <p>Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.</p>
                                <p className="mt-4">Además, puedes descargar tus series favoritas con la app para iOS o Android. Con la función de descarga, puedes ver contenido donde vayas y sin conexión a internet. Lleva Peliflix contigo adonde sea.</p>
                            </div>
                        </details>
                        
                        {/* Pregunta 4 */}
                        <details className="bg-neutral-900 rounded-lg overflow-hidden">
                            <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-neutral-800 transition-colors duration-200">
                                <span className="text-xl font-semibold text-white">¿Cómo cancelo?</span>
                                <span className="text-2xl text-white">+</span>
                            </summary>
                            <div className="px-6 py-4 text-lg text-neutral-300 border-t border-neutral-700">
                                <p>Peliflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.</p>
                            </div>
                        </details>
                        
                        {/* Pregunta 5 */}
                        <details className="bg-neutral-900 rounded-lg overflow-hidden">
                            <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-neutral-800 transition-colors duration-200">
                                <span className="text-xl font-semibold text-white">¿Qué puedo ver en Peliflix?</span>
                                <span className="text-2xl text-white">+</span>
                            </summary>
                            <div className="px-6 py-4 text-lg text-neutral-300 border-t border-neutral-700">
                                <p>Peliflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.</p>
                            </div>
                        </details>
                        
                        {/* Pregunta 6 */}
                        <details className="bg-neutral-900 rounded-lg overflow-hidden">
                            <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-neutral-800 transition-colors duration-200">
                                <span className="text-xl font-semibold text-white">¿Es bueno Peliflix para los niños?</span>
                                <span className="text-2xl text-white">+</span>
                            </summary>
                            <div className="px-6 py-4 text-lg text-neutral-300 border-t border-neutral-700">
                                <p>La experiencia de Peliflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.</p>
                                <p className='mt-4'>Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
  )
}

export default Main
