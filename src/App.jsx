import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ValentineCard from './page/card';

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute text-pink-500 animate-float-heart"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-20px`,
            animation: `floatHeart ${10 + Math.random() * 20}s linear infinite`,
            animationDelay: `${Math.random() * 20}s`,
            fontSize: `${12 + Math.random() * 24}px`,
            opacity: 0.3 + Math.random() * 0.4,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-red-50">
        {/* Animated Background */}
        <FloatingHearts />
        
        {/* Navigation */}
        <nav className="bg-pink-100/80 p-4 backdrop-blur-sm relative z-10">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-red-500 hover:text-red-700 font-semibold transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/valentine" className="text-red-500 hover:text-red-700 font-semibold transition-colors">
                Valentine Card
              </Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={
              <div className="p-8 text-center">
                <h1 className="text-4xl text-red-500 font-bold">
                 HAI KIKYY KU CAYANG ❤️
                </h1>
                <p className="mt-4 text-pink-600">
                  SELAMAT HARI VALENTINE  ❤️
                </p>
                <p className="mt-4 text-pink-600">
                  MASUK KE MENU KARTU KIKYY
                </p>
              </div>
            } />
            <Route path="/valentine" element={<ValentineCard />} />
          </Routes>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatHeart {
          0% {
            transform: translateY(100vh) rotate(0deg) scale(1);
          }
          100% {
            transform: translateY(-100px) rotate(360deg) scale(0.8);
          }
        }
        .animate-float-heart {
          will-change: transform;
        }
      `}</style>
    </Router>
  );
};

export default App;