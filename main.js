const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const isRead = document.getElementById("isRead");

const button = document.querySelector(".submit");

const cardContainer = document.querySelector(".card-container");

button.addEventListener("click", () => {

    


    console.log(title.value);
    console.log(author.value);
    console.log(pages.value);
    console.log(isRead.checked);
});