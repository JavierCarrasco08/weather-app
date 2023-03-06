/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/javascript/*.js"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        layer: "#003049",
        layerText: "#fdf0d5",
        layerRuta: "#ef233c",
        textMoon: "#29323c",
        textSun: "#f5f7fa",
      },
      boxShadow: {
        a: "0 0 10px 10px rgba(0, 0, 0, 0.3)",
        shadowSun: "0 0 10px 10px rgba(245, 245, 245, 0.5)",
        shadowMoon: "0 0 10px 10px rgba(0, 0, 0, 0.5)",
      },
      screens: {
        tablet: "530px",
        phoneUp: "375px",
      },
      backgroundImage: {
        sun: 'url("../images/background/dia-soleado.jpg")',
        moon: 'url("../images/background/fondo_noche.jpg")',
        rain: 'url("../images/background/fondo_lluvia.jpg")',
        cloud: 'url("../images/background/dia_nuboso.jpg")',
        gradientSun: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);",
        gradientMoon: "linear-gradient(135deg, #29323c 0%, #485563 100%);",
      },
      backgroundPosition: {
        moonPosition: "50% 40%",
      },
    },
  },
  plugins: [],
};
