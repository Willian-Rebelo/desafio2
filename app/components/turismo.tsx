
import React from 'react';

const TouristSpotsPage: React.FC = () => {
  const touristSpots = [
    { name: 'Estátua da Liberdade', description: 'Uma famosa estátua na Ilha da Liberdade.' },
    { name: 'Times Square', description: 'Um dos lugares mais movimentados e brilhantes de Nova Iorque.' },
    { name: 'Central Park', description: 'Um grande parque no centro de Manhattan.' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-semibold mb-4">Pontos Turísticos de Nova Iorque</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {touristSpots.map((spot, index) => (
          <div key={index} className="bg-white rounded p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{spot.name}</h2>
            <p className="text-gray-600">{spot.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouristSpotsPage;
