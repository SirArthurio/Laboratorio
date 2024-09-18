import React from "react";
import Inicio from "./inicio";
import VersionPropia from "./Ejercicios/VersionPropia";
import Ejercicio1 from "./Ejercicios/Ejercicio1";
import Ejercicio2 from "./Ejercicios/Ejercicio2";
import Ejercicio3 from "./Ejercicios/Ejercicio3";
import Ejercicio4 from "./Ejercicios/Ejercicio4";
import Ejercicio6 from "./Ejercicios/Ejercicio6";

export const ConfiguracionRutas = [
  {
    path: "/Laboratorio",
    element: <Inicio />,
  },
  {
    path: "/Ejercicio1",
    element: <Ejercicio1 />,
  },
  {
    path: "/Ejercicio2",
    element: <Ejercicio2 />,
  },
  {
    path: "/Ejercicio3",
    element: <Ejercicio3 />,
  },
  {
    path: "/Ejercicio4",
    element: <Ejercicio4 />,
  },
  {
    path: "/Ejercicio6",
    element: <Ejercicio6 />,
  },
  {
    path: "/VersionPropia",
    element: <VersionPropia />,
  },
];
