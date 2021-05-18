import css from "./css/styles.css";
import "./js/gallery.js";
import postTemp from "./templates/post.hbs";
const postList = document.getElementById("postList");
const alco = document.getElementById("alco");
const resultList = document.querySelector(".results");
console.log(resultList);
console.log(alco);
// alco.addEventListener("input",(event)=>{
// // // смотрим обЪект события
//   console.log(event);
// //   // достанем из обЪекта события целевой элемент
//   console.log(event.target);
// //   // получим из цулевого элемента введенное значение
//   console.log(event.target.value);
// })
alco.addEventListener("change", (event) => {
  console.log(event);
  console.log(event.target);
  console.log(event.target.value);
  const req = fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.value}`,
  );
  req
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data.drinks;
    })
    .then((drinks) => {
      console.log("массив", drinks);
      const items = drinks.map((elem) => {
        console.log(elem);
        console.log(elem.strDrinkThumb);
        const item = document.createElement("li");
        console.log(item);
        const img = document.createElement("img");
        console.log(img);
        img.src = elem.strDrinkThumb;
        img.alt = "img";
        item.append(img);
        return item
      });
      resultList.append(...items);
    });
});
const url = "  http://localhost:3000/posts";
// первогачальный get запрос (нужен только url)
// then это метод promis

// console.log(request);

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "foto",
    author: "Ya",
  }),
};
fetch(url, options).then((response) => {
  // console.log(response);
});

// создать input, в который пользователь будет вводить значение для поиска
// получить доступ к  input
// получить значение из input которое мы должны отправить в запрос
// сделать запрос
// получить ответ ( результат в виде массива объектов)
// сделать шаблон разметки
// расструсить в шаблон каждый объекю
// сформированные шаблоны отртсовать в браузере
