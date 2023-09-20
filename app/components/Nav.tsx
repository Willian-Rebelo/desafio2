
"use client"

import { useState } from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  const [activePage, setActivePage] = useState<string | null>(null);

  const handleNavigation = (page: string) => {
    setActivePage(page);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => handleNavigation("Caledario")}
              className={`text-white rounded-md  ${
                activePage === "Calendario" ? "bg-blue-800" : "hover:bg-gray-600" 
              }`}
            >
              Calendario
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("Pilotos")}
              className={`text-white rounded-md  ${
                activePage === "Pilotos" ? "bg-blue-800" : "hover:bg-gray-600"
              }`}
            >
              Pilotos
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("Pistas")}
              className={`text-white rounded-md ${
                activePage === "Pistas" ? "bg-blue-800" : "hover:bg-gray-600"
              }`}
            >
              Pistas
            </button>

          </li>
          <li>
            <button
              onClick={() => handleNavigation("Equipes")}
              className={`text-white rounded-md ${
                activePage === "Equipes" ? "bg-blue-800" : "hover:bg-gray-600"
              }`}
            >
              Equipes
            </button>
            
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
