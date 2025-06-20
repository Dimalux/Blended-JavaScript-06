import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const products = document.querySelector(".products");
const categories = document.querySelector(".categories");












// import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '50787945-1edbab8bb6a94afd781f3e3fd';

// // Ця функція повинна приймати два параметри query (пошукове слово, яке є рядком) та page (номер сторінки, яка є числом), здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.

// export async function getImagesByQuery(query, page = 1) {
//   const params = {
//     key: API_KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page: 15,
//     page: page,
//   };

//   const response = await axios(BASE_URL, { params });
//   return response.data;
// }






// // Цей рядок імпортує бібліотеку iziToast — це популярна JavaScript-бібліотека для створення гарних сповіщень (тостів) у вебдодатках.
// import iziToast from 'izitoast';

// // Цей рядок імпортує CSS-стилі iziToast.
// // Вони потрібні, щоб зробити візуальне оформлення сповіщень відповідно до дизайну iziToast (кольори, анімації, розташування тостів тощо).
// import 'izitoast/dist/css/iziToast.min.css';

// import { getImagesByQuery } from './js/pixabay-api';
// import {    
//   createGallery,             //створювати HTML-розмітку для галереї
//   clearGallery,              // обнуляємо  HTML-розмітку для галереї
//   showLoader,                // показує ІНДИКАТОР ЗАВАНТАЖЕННЯ
//   hideLoader,                // приховує ІНДИКАТОР ЗАВАНТАЖЕННЯ
//   showLoadMoreButton,         //  показує КНОПКУ "LOAD MORE"
//   hideLoadMoreButton,         //  приховує КНОПКУ "LOAD MORE"
// } from './js/render-functions';

// const searchForm = document.querySelector('.form');
// const loadMoreBtn = document.querySelector('.load-more');

// let currentQuery = '';
// let currentPage = 1;
// let totalPages = 0;

// searchForm.addEventListener('submit', handleSubmit);
// loadMoreBtn.addEventListener('click', handleLoadMore);

// async function handleSubmit(event) {
//   event.preventDefault();
//   const query = event.target.elements.query.value.trim();

//   console.log(event);
  

//   if (!query) {
//     iziToast.error({
//       message: 'Please enter a search query',
//       position: 'topRight',
//     });
//     return;
//   }

//   currentQuery = query;
//   currentPage = 1;

//   try {
//     showLoader(); // Показуємо лоадер
//     hideLoadMoreButton(); // Приховуємо кнопку "Load more"
//     clearGallery(); // Очищаємо попередню галерею

//     const data = await getImagesByQuery(currentQuery, currentPage);
//     console.log(data);
//     console.log(data.hits.length);

//     if (data.hits.length === 0) {
//       //  Метод бібліотеки iziToast, який показує інформаційне (info) повідомлення. Якщо бекенд повертає порожній масив, це означає, що нічого підходящого не було знайдено. У такому випадку відображай повідомлення з текстом:
//       //  'Sorry, there are no images matching your search query. Please try again!'
//       iziToast.info({
//         message:
//           'Sorry, there are no images matching your search query. Please try again!',
//         position: 'topRight',
//       });
//       return;
//     }

//     createGallery(data.hits);     //створюємо HTML-розмітку для галереї і відмальовуємо її на сторінці
//     console.log(data.hits);

//     // розрахунок скільки в мене буде всього сторінок
//     totalPages = Math.ceil(data.totalHits / 15);

//     // перевірка, чи є сторінка останьою
//     if (currentPage < totalPages) {
//       showLoadMoreButton();
//     }
//   } catch (error) {
//     iziToast.error({
//       message: 'Something went wrong. Please try again later.',
//       position: 'topRight',
//     });
//   } finally {
//     hideLoader(); // Ховаємо лоадер, навіть при помилці
//   }
//   event.target.reset();   //  Очищає всі поля форми (текстові поля, випадаючі списки, радіокнопки, чекбокси тощо)
// }


// //  робота КНОПКИ "LOAD MORE"
// async function handleLoadMore() {
//   currentPage += 1;

//   try {
//     showLoader(); // Показуємо лоадер
//     hideLoadMoreButton(); // Приховуємо кнопку "Load more" (щоб не було багато натискань на кнопку від користувача) ???

//     const data = await getImagesByQuery(currentQuery, currentPage);
//     createGallery(data.hits);

//     // Знаходимо перший елемент на сторінці з класом gallery-item.
//     const galleryItem = document.querySelector('.gallery-item');

//     //     Отримуємо розміри та позицію елемента відносно вікна перегляду.
//     // Беремо тільки висоту (height).
//     const { height } = galleryItem.getBoundingClientRect();
//     window.scrollBy({
//       top: height * 2, // Прокручує сторінку вниз на величину height * 200 пікселів з плавною анімацією "smooth":
//       behavior: 'smooth',
//     });

//     totalPages = Math.ceil(data.totalHits / 15);
//     if (currentPage >= totalPages) {
//       hideLoadMoreButton(); // Приховуємо кнопку "Load more"

//       iziToast.info({
//         message: "We're sorry, but you've reached the end of search results.",
//         position: 'topRight',
//       });
//     } else {
//       showLoadMoreButton();    //  показує КНОПКУ "LOAD MORE"
//     }
//   } catch (error) {
//     iziToast.error({
//       message: 'Something went wrong. Please try again later.',
//       position: 'topRight',
//     });
//   } finally {
//     hideLoader(); // Ховаємо лоадер
//   }
// }
