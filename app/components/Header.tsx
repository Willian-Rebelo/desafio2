

import Link from "next/link";
import Nav from "./Nav";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-700 p-4 rounded-br-lg border-double border-4 border-red-500">
      <div className="container mx-auto flex justify-between items-center">
      <button className="text-white text-2xl font-bold focus:outline-none">
              
              <img
                src="/formula-1.svg" 
                alt="Logo"
                className="w-12 h-12"
              />
            </button>
        <Nav/>
      </div>
    </header>
  );
};

export default Header;
