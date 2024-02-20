// Импорт js-модулей (примеры), cобственных (из папки modules) или из node_modules

// import inputPhoneMask from "./modules/input-phone-mask.js";

// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css";
// new AirDatepicker("#date");

// Если у разных html-страниц собственные js-файлы, прописываем это в webpack.config.js (в entry)

// ====================================== //

// Шаблон, если будут нужны будут нужны разные стили для ПК и мобильных устройств (с тачпадом)

// "use strict";

// const isMobile = {
//   Android: function () {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBerry: function () {
//     return navigator.userAgent.match(/BlackBerry/i);
//   },
//   iOS: function () {
//     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//   },
//   Opera: function () {
//     return navigator.userAgent.match(/Opera Mini/i);
//   },
//   Windows: function () {
//     return navigator.userAgent.match(/IEMobile/i);
//   },
//   any: function () {
//     return (
//       isMobile.Android() ||
//       isMobile.BlackBerry() ||
//       isMobile.iOS() ||
//       isMobile.Opera() ||
//       isMobile.Windows()
//     );
//   },
// };

// if (isMobile.any()) {
//   document.body.classList.add("_touch");


// } else {
//   document.body.classList.add("_pc");
// }

// ========== Маска для телефона (поля input) ========== //
// Работает для инпутов с классом tel

// import inputPhoneMask from "./modules/input-phone-mask.js";

// ===================================================== //

