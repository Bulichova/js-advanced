import gallery from "../db/db.js"
import templates from "../templates/item.hbs"
const galleryList = document.getElementById("galleryList")
console.log(galleryList);
const result = templates(gallery)
console.log(result);
galleryList.insertAdjacentHTML("afterbegin", result)