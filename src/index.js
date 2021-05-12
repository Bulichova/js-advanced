import css from "./css/styles.css";
import "./js/gallery.js";
import postTemp from "./templates/post.hbs";
const postList = document.getElementById("postList");
const url = "  http://localhost:3000/posts";
// первогачальный get запрос (нужен только url)
// then это метод promis
const request = fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //   убедились что получили массив данных
    console.log(data);
    //  сщздали разметку по шаблону из поученного массива данных
    const posts = postTemp(data);
    //  убедились что создали разметку по шаблону
    console.log(posts);
    // встраиваем разметку по шаблону в элемент списка html к которому получили доступ выше
    postList.insertAdjacentHTML("afterbegin", posts);
  });
console.log(request);

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
  console.log(response);
});
