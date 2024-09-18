import React from "react";
import { Link } from "react-router-dom";

export default function inicio() {
  return (
    <div className="bg-gradient-to-b from-[#c1afa0]/10 to-[#6c584c] min-h-screen text-white p-4 justify-center text-center">
      <div className="border-2 rounded-lg m-4 p-4 text-center bg-[#252525] shadow-md shadow-[#6c584c] ">
        <h1 className="hover:scale-105 hover:text-[#6c584c] transition-all duration-500 ease-in-out text-4xl	">
          Laboratorio Practico :D
        </h1>
        <p>Elija un Ejercicio </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5">
        <Link to="/Ejercicio1">
          <div className="border-2 rounded-lg m-4 p-4 text-center bg-[#252525] shadow-md shadow-[#6c584c]  m-4 p-4 hover:scale-105 hover:text-[#6c584c] transition-all duration-500 ease-in-out">
            Ejercicio 1
          </div>
        </Link>
        <Link to="/Ejercicio2">
          <div className="border-2 rounded-lg m-4 p-4 text-center bg-[#252525] shadow-md shadow-[#6c584c]  m-4 p-4 hover:scale-105 hover:text-[#6c584c] transition-all duration-500 ease-in-out">
            Ejercicio 2
          </div>
        </Link>
        <Link to="/Ejercicio3">
          <div className="border-2 rounded-lg m-4 p-4 text-center bg-[#252525] shadow-md shadow-[#6c584c]  m-4 p-4 hover:scale-105 hover:text-[#6c584c] transition-all duration-500 ease-in-out">
            Ejercicio 3
          </div>
        </Link>
        <Link to="/Ejercicio4">
          <div className="border-2 rounded-lg m-4 p-4 text-center bg-[#252525] shadow-md shadow-[#6c584c]  m-4 p-4 hover:scale-105 hover:text-[#6c584c] transition-all duration-500 ease-in-out">
            Ejercicio 4
          </div>
        </Link>
        <Link to="/Ejercicio6">
          <div className="border-2 rounded-lg m-4 p-4 text-center bg-[#252525] shadow-md shadow-[#6c584c]  m-4 p-4 hover:scale-105 hover:text-[#6c584c] transition-all duration-500 ease-in-out">
            Ejercicio 6
          </div>
        </Link>
        <Link to="/VersionPropia">
          <div className="border-2 rounded-lg m-4 p-4 text-center bg-[#252525] shadow-md shadow-[#6c584c]  m-4 p-4 hover:scale-105 hover:text-[#6c584c] transition-all duration-500 ease-in-out">
            Version Propia
          </div>
        </Link>
      </div>
    </div>
  );
}
