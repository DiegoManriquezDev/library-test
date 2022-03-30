
const addFormButton = document.querySelector(".button");
const formBook = document.getElementById("form-book");

const button = document.querySelector(".submit");

// Show form book
addFormButton.addEventListener("click", () =>{
    formBook.classList.remove('hide-form-book');
});

//Hidding form book if you press escape.
document.addEventListener("keydown", (e) =>{
    if(e.key == "Escape"){
        if(!formBook.classList.contains('hide-form-book')){
            formBook.classList.add('hide-form-book');
        }
    }
});


button.addEventListener("click", () => {
    addBookToLibrary();
    for(let book in myLibrary){
        createBook(myLibrary[book]);
    }


});


let myLibrary = [];

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

const getBookFromInput = () =>{
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").checked;
    return new Book(title, author, pages, isRead);
}

const addBookToLibrary = ()=>{
    const newBook = getBookFromInput();
    myLibrary.push(newBook);
    console.log(myLibrary[0]);
}

const createBook = (book) =>{
    const card = document.createElement('div');
    const bookInfo = document.createElement('div');
    const titleP = document.createElement('p');
    const authorP = document.createElement('p');
    const pagesP = document.createElement('p');
    const buttonOneDiv = document.createElement('div');
    const buttonOne = document.createElement('button');
    const buttonTwoDiv = document.createElement('div');
    const buttonTwo = document.createElement('button');

    card.classList.add('card');
    bookInfo.classList.add('book-info');
    buttonOneDiv.classList.add('read-button');
    buttonTwoDiv.classList.add('remove-button');

    titleP.textContent = book.title;
    authorP.textContent = book.author;
    pagesP.textContent = book.pages;

    if(book.isRead){
        buttonOne.textContent = "Read";
    }else{
        buttonOne.textContent = "Not Read";
    }

    buttonTwo.textContent = "Remove";

    const cardContainer = document.querySelector('.card-container');

    cardContainer.appendChild(card);
    card.appendChild(bookInfo);
    card.appendChild(buttonOneDiv);
    card.appendChild(buttonTwoDiv);
    bookInfo.appendChild(titleP);
    bookInfo.appendChild(authorP);
    bookInfo.appendChild(pagesP);
    buttonOneDiv.appendChild(buttonOne);
    buttonTwoDiv.appendChild(buttonTwo);


}

