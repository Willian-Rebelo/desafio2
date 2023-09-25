
"use client"

import { useState } from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  const [activePage, setActivePage] = useState<string | null>(null);

  

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <ul className="flex space-x-4">
          <li>
          <Link href="/Equipes"  
              className={`text-white rounded-md ${
                activePage === "Equipes" ? "bg-blue-800" : "hover:bg-gray-600"
              }`}>
              Equipes
            </Link>
          </li>
         
            <Link href="/Pista"  
              className={`text-white rounded-md ${
                activePage === "Equipes" ? "bg-blue-800" : "hover:bg-gray-600"
              }`}>
              Pista
            </Link>
          <li>
          <Link href="/Pilotos"  
              className={`text-white rounded-md ${
                activePage === "Equipes" ? "bg-blue-800" : "hover:bg-gray-600"
              }`}>
              Pilotos
            </Link>
            
          </li>
          <li>
          <Link href="/calendario"  className={`text-white rounded-md ${
                activePage === "Equipes" ? "bg-blue-800" : "hover:bg-gray-600"
              }`}>Calendario</Link>
            
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
