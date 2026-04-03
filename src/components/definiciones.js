import { format } from "npm:d3";
import { FileAttachment } from "observablehq:stdlib";

export const partidos = {
  AGN: {
    foto: await FileAttachment(`../imagenes/ayllon.png`).url(),
    colores: ["#0099cc", "#ffffff"], // Celeste fuerte y Blanco
  },
  LIBRE: {
    foto: await FileAttachment(`../imagenes/noimage.png`).url(),
    colores: ["#ff0000", "#ffffff"], // Rojo fuerte y Blanco
  },
  NGP: {
    foto: await FileAttachment(`../imagenes/noimage.png`).url(),
    colores: ["#0000ff", "#ffffff"], // Azul y Blanco
  },
  "PATRIA-UNIDOS": {
    foto: await FileAttachment(`../imagenes/tata.png`).url(),
    colores: ["#ff4500", "#ffffff"], // Naranja fuerte y Blanco
  },
  MTS: {
    foto: await FileAttachment(`../imagenes/noimage.png`).url(),
    colores: ["#1d750b", "#ffffff"], // Verde oscuro y Blanco
  },
  FRI: {
    foto: await FileAttachment(`../imagenes/noimage.png`).url(),
    colores: ["#800080", "#ffffff"], // Morado y Blanco
  },
  "XS-CH": {
    foto: await FileAttachment(`../imagenes/noimage.png`).url(),
    colores: ["#39ff14", "#000000"], // Verde fosforescente y Negro
  },
  "A-UPP": {
    foto: await FileAttachment(`../imagenes/noimage.png`).url(),
    colores: ["#ffff00", "#000000"], // Amarillo y Negro
  },
};

export const formatos = {
  fecha: new Intl.DateTimeFormat("es", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC",
  }),
  porcentaje: format(".1%"),
};