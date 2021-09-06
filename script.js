let library = [];
const shelf = document.querySelector(".array");
function book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return(`${this.name}, written by ${this.author}, has ${this.pages} pages, ${this.read}`)
    }
}

function addBook(name, author, pages, read){
    const newBook = new book(name, author, pages, read);
    library.push(newBook);
    console.table(library);
}

function bookDom(ind){
    const tome = document.createElement("div");
    tome.classList.add("tome");

    const bookTitle = document.createElement("h3");
    bookTitle.classList.add("bookTitle");
    bookTitle.textContent = `${library[ind].name}`;

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("bookAuthor");
    
    
    tome.appendChild(bookTitle);
    shelf.appendChild(tome);
 
}


addBook("Berserk", "Nakamura", 2790, "not read yet");
addBook("bible", "various", 1200, "not read yet");
addBook("test", "me", 3, "read" );






