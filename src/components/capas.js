// Etiquetas referenciales sobre el mapa
export const capa_etiquetas = (tiles) => {
  return {
    source: {
      type: "raster",
      tiles: [tiles],
      tileSize: 256,
    },
    layer: {
      id: "etiquetas",
      type: "raster",
      source: "etiquetas",
      paint: {
        "raster-opacity": 0.9,
      },
    },
  };
};

export const capa_recintos = (data, campo_radio, coloreado, campo_hover) => {
  return {
    source: {
      type: "geojson",
      data: data,
    },
    layer: {
      id: "recintos",
      type: "circle",
      source: "recintos",
    paint: {
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["zoom"],
          // Zoom bajo (Vista general del departamento)
          6,
          [
            "min",
            4, // Antes 2 (Mínimo más grande)
            ["max", 2, ["*", 0.05, ["to-number", ["get", campo_radio]]]] // Antes 0.03
          ],
          // Zoom medio (Vista de provincias)
          12,
          [
            "min",
            12, // Antes 7
            ["max", 4, ["*", 0.04, ["to-number", ["get", campo_radio]]]] // Antes 0.02
          ],
          // Zoom alto (Vista de ciudad/calles)
          16,
          [
            "min",
            35, // Antes 21
            ["max", 6, ["*", 0.12, ["to-number", ["get", campo_radio]]]] // Antes 0.08
          ],
        ],
        "circle-color": coloreado,
        "circle-opacity": 0.8,
      },
    },
    hover: {
      id: "recintos_hover",
      type: "circle",
      source: "recintos",
      filter: ["!=", ["get", campo_hover], null],
      paint: {
        "circle-color": "rgba(0,0,0,0)",
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          ["*", 1.3, ["min", 4, ["max", 2, ["*", 0.05, ["to-number", ["get", campo_radio]]]]]],
          12,
          ["*", 1.3, ["min", 12, ["max", 4, ["*", 0.04, ["to-number", ["get", campo_radio]]]]]],
          16,
          ["*", 1.3, ["min", 35, ["max", 6, ["*", 0.12, ["to-number", ["get", campo_radio]]]]]],
        ],
      },
    },
  };
};