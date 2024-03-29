import { formHours } from "./formData.js";
import { mood } from "./weatherSite.js";
import { ICONS } from "./weather_img_info.js";

export function cardWeather(
  {
    weather,
    main: { humidity, temp },
    timezone,
    sys: { country, sunrise, sunset },
  },
  name,
  { date, time_24 }
) {
  let wea = weather[0];
  const $CONTAINER = document.querySelector("[data-rol='container']");
  const $GRADOS_H1 = document.querySelector("h1"),
    $HUMEDAD_H3 = document.querySelector("[data-rol='humedad']"),
    $HORA_H3 = document.querySelector('[data-rol="Hora"]'),
    $CIUDAD_H3 = document.querySelector("[data-rol='ciudad']"),
    $CALENDARIO_H3 = document.querySelector("[data-rol='calendario']"),
    $ICON_WEATHER = document.querySelector("[data-rol='icon']"),
    $ICON_TER = document.querySelector("[data-rol='termometro']"),
    $SUNRISE_H3 = document.querySelector("[data-rol='amanecer']"),
    $SUNSET_H3 = document.querySelector("[data-rol='atardecer']");
  $SUNRISE_H3.textContent = `${formHours(sunrise, timezone)} AM`;
  $SUNSET_H3.textContent = `${formHours(sunset, timezone)} PM`;
  $CIUDAD_H3.innerHTML = `${name} <span class="text-xs">${country}</span>`;
  $HUMEDAD_H3.textContent = humidity;
  $GRADOS_H1.textContent = `${Math.floor(temp - 273.15)}ºC`;
  $CALENDARIO_H3.textContent = date;
  $HORA_H3.textContent = time_24;
  if (Math.floor(temp - 273.15) <= 10) {
    $ICON_TER.src = "./src/images/Icons/termometroF.png";
  } else {
    $ICON_TER.src = "./src/images/Icons/termometroC.png";
  }
  $ICON_TER.alt = "icon termometro";
  mood(sunrise, sunset, time_24, timezone, wea);
  $ICON_WEATHER.src = ICONS[wea.main];
  $ICON_WEATHER.alt = `icons ${wea.main}`;
}

export function cardForecast(obj) {
  const LIST = obj.list;
  const ARRAY_SECTION = [];
  LIST.forEach((elem) => {
    if (elem.sys.pod === "n") {
      ICONS.Clear = "./src/images/Icons/fases-de-la-luna.png";
      ICONS.Clouds = "./src/images/Icons/noche-nublada.png";
    } else {
      ICONS.Clear = "./src/images/Icons/sol.png";
      ICONS.Clouds = "./src/images/Icons/nuboso.png";
    }
    let html = `
    <figure class="w-8 phoneUp:w-16">
    <img src="${ICONS[elem.weather[0].main]}" alt="icon ${
      elem.weather[0].main
    }">
    </figure>
    <h2>${elem.dt_txt}</h2>
    <section class="grid grid-cols-2 gap-3">
    <h3>${Math.floor(elem.main.temp - 273.15)}ºC</h3>
    <h3>${elem.main.humidity}%</h3>
    <h3>${elem.clouds.all}%</h3>
    <h3>${elem.wind.speed}</h3>
    </section>
    <h2>${elem.weather[0].description}</h2>`;
    const $DIV = document.createElement("div");
    $DIV.innerHTML = html;
    $DIV.classList.add(
      "flex",
      "flex-col",
      "text-xs",
      "phoneUp:text-xm",
      "tablet:text-base",
      "p-2",
      "items-center",
      "w-[150px]",
      "tablet:w-[180px]"
    );
    ARRAY_SECTION.push($DIV);
  });
  return ARRAY_SECTION;
}
