import { financeControl } from './financeControl.js';
import { reportControl } from './reportControl.js';

// const API_KEY = 'b零fc四零六d二cfecf';

// const getIpAddress = async () => {
//   const apiUrl = `https://ipinfo.io/json?token=${API_KEY}`;

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     console.log('IP-адрес пользователя:', data.ip);
//     console.log('Местоположение пользователя:', data.city, data.region, data.country);
//   } catch (error) {
//     console.error('Ошибка получения данных:', error);
//   }
// };

const init = async () => {
  // await getIpAddress();
  financeControl();
  reportControl();
};

init();
