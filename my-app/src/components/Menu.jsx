import { useState } from 'react';
import { FaUtensils } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Menu({ onClose }) {
  // Datos de ejemplo para las imágenes

  const [images] = useState([
    {
      id: 1,
      url: 'http://dummyimage.com/720x480.png/ff4444/ffffff',
      name: 'Plato Principal',
    },
    {
      id: 2,
      url: 'http://dummyimage.com/720x480.png/ff4444/ffffff',
      name: 'Ensalada',
    },
    {
      id: 3,
      url: 'http://dummyimage.com/720x480.png/ff4444/ffffff',
      name: 'Postre',
    },
    {
      id: 4,
      url: 'http://dummyimage.com/720x480.png/ff4444/ffffff',
      name: 'Bebida',
    },
  ]);

  return (
    <div className="fixed inset-0 bg-white overflow-auto">
      {/* Header con la palabra Menu y los íconos */}
      <div className="bg-gray-800 text-white p-4 flex items-center justify-center sticky top-0 z-10">
        <button onClick={onClose} className="absolute left-4 text-xl">
          &larr;
        </button>
        <FaUtensils className="text-2xl mr-3" />
        <h1 className="text-2xl font-bold mx-4">Menu</h1>
        <FaUtensils className="text-2xl ml-3" />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-6">
        {/* Carrusel de imágenes */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Destacados del Día</h2>
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            className="bg-gray-100 rounded-lg p-4"
          >
            {images.map((image) => (
              <div key={image.id} className="p-2">
                <img src={image.url} alt={image.name} className="rounded-lg" />
                <p className="legend">{image.name}</p>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Galería de imágenes */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Nuestro Menú Completo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 border-t border-gray-200">
                  <p className="font-medium text-center">{image.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
