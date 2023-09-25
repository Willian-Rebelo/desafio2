// components/Calendar.tsx

import React from 'react';

const Calendar: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Calendário de Setembro 2023</h1>
      <div className="grid grid-cols-7 gap-2">
        <div className="text-center text-gray-600">Dom</div>
        <div className="text-center text-gray-600">Seg</div>
        <div className="text-center text-gray-600">Ter</div>
        <div className="text-center text-gray-600">Qua</div>
        <div className="text-center text-gray-600">Qui</div>
        <div className="text-center text-gray-600">Sex</div>
        <div className="text-center text-gray-600">Sáb</div>
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i + 1} className="text-center">{i + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
