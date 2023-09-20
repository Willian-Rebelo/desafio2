
"use client"

import { useState } from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  const [activePage, setActivePage] = useState<string | null>(null);

  const handleNavigation = (page: string) => {
    setActivePage(page);
  };

  return (
    <nav className="bg-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => handleNavigation("sobre")}
              className={`text-white rounded-md  ${
                activePage === "sobre" ? "bg-blue-800" : "hover:bg-gray-600" 
              }`}
            >
              Sobre
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("servicos")}
              className={`text-white rounded-md  ${
                activePage === "servicos" ? "bg-blue-800" : "hover:bg-gray-600"
              }`}
            >
              Serviços
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("contato")}
              className={`text-white rounded-md ${
                activePage === "contato" ? "bg-blue-800" : "hover:bg-gray-600"
              }`}
            >
              Contato
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
