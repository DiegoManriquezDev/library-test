

const lista = document.getElementById("lista-dinamica");

const li = document.createElement("li");
li.textContent = "Mi <li> dinamico";

lista.appendChild(li);


const container1 = document.getElementById("container");

const header3 = document.createElement("h3");
header3.textContent = "This is my dinamic <h3>";

container1.appendChild(header3);

const name1 = document.getElementById("name");
const age = document.getElementById("age");
const submit = document.querySelector(".submit");
const submit1 = document.querySelector(".submit-1");



submit1.addEventListener("click", () => {
    console.log(name1.value);
    console.log(age.value);
});

submit.addEventListener("click", () => {
    console.log(name1.value);
    console.log(age.value);
});

console.log(submit);
console.log(submit1);

