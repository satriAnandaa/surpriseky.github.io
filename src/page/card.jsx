import React, { useState } from 'react';

const ValentineCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        setShowPhotos(true);
      }, 1000);
    } else {
      setShowPhotos(false);
    }
  };

  const photos = [
    "/src/assets/ky1.jpeg",
    "/src/assets/ky3.jpeg",
    "/src/assets/ky2.jpeg",
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-pink-100 to-red-100 p-8">
      <div className={`
        w-full max-w-4xl 
        flex justify-between gap-6 mb-8
        transition-all duration-1000
        ${showPhotos ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
      `}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`
              transform transition-all duration-1000 delay-${index * 200}
              hover:scale-110 hover:rotate-3
            `}
          >
            <img
              src={photo}
              alt={`Moment ${index + 1}`}
              className="w-48 h-48 rounded-xl shadow-xl object-cover"
            />
          </div>
        ))}
      </div>

      <div 
        className={`
          relative cursor-pointer w-[600px] hover:scale-105 transition-transform duration-500
          animate-float-slow
        `} 
        onClick={toggleCard}
      >
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-red-400 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s linear infinite`,
                fontSize: `${12 + Math.random() * 12}px`,
                opacity: 0.6
              }}
            >
              ❤️
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl p-12 shadow-2xl min-h-[400px] transform perspective-1000">
            <div 
              className={`
                absolute top-0 left-0 w-full h-40
                bg-gradient-to-b from-pink-400 via-pink-300 to-pink-200
                rounded-t-2xl transform origin-bottom transition-all duration-1000
                shadow-lg
              `}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
                transformOrigin: 'bottom'
              }}
            >
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-3/4">
                <div className="border-b-2 border-dotted border-pink-500 mb-2"></div>
                <div className="border-b-2 border-dotted border-pink-500 opacity-50"></div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-pink-400 to-pink-300 transform -skew-y-6 origin-bottom-left rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-400 to-pink-300 transform skew-y-6 origin-bottom-right rounded-br-2xl"></div>

            <div className="text-center mt-20 relative z-10">
              <div className="text-4xl font-serif text-white mb-4 drop-shadow-lg">Happy Valentine's Day</div>
              <div className="text-xl text-white drop-shadow">Click to Open ❤️</div>
            </div>
          </div>

          <div className={`
            absolute 
            top-1/2
            left-1/2 
            w-[90%]
            bg-white 
            rounded-xl 
            p-8 
            shadow-2xl
            transform 
            transition-all 
            duration-1000
            ${isOpen 
              ? '-translate-y-1/2 -translate-x-1/2 scale-100 rotate-0' 
              : 'translate-y-0 -translate-x-1/2 scale-0 -rotate-12'
            }
          `}>
            <div className="text-center bg-gradient-to-b from-white to-pink-50 rounded-lg p-8 border-2 border-pink-100">
              <div className="text-4xl mb-6">❤️</div>
              <div className="text-3xl font-serif text-pink-600 mb-6">Dear Kiky</div>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>Di hari Valentine ini,</p>
                <p>aku mau ucapin selamat hari kasih sayang untuk kikyy</p>
                <p>maap ya cuma bisa ngasih ini 😘</p>
                <p>Semoga hari-harimu selalu dipenuhi dengan satria dan kebahagiaan.</p>
                <p>Selamat Hari Valentine! 🌹</p>
              </div>

              <div className="mt-8 text-2xl text-pink-500 font-serif">
                With love ❤️
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValentineCard;
