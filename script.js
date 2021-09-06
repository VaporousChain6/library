let library = [];
const shelf = document.querySelector(".array");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");


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
}

function bookDom(ind){
    const tome = document.createElement("div");
    tome.classList.add("tome");

    const bookTitle = document.createElement("h3");
    bookTitle.classList.add("bookTitle");
    bookTitle.textContent = `${library[ind].name}`;

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("bookAuthor");
    bookAuthor.textContent = `${library[ind].author}`

    const numPages = document.createElement("p");
    numPages.classList.add("numPages");
    numPages.textContent = `${library[ind].pages}`


    const finished = document.createElement("p");
    finished.classList.add("readStatus");
    finished.textContent = `${library[ind].read}`
    
    
    tome.appendChild(bookTitle);
    tome.appendChild(bookAuthor);
    tome.appendChild(numPages);
    tome.appendChild(finished);
    shelf.appendChild(tome);

 
}

function updateDisplay(num){
        shelf.innerHTML = "";

        for(let i = num; i<num+7; i++){
            if(!library[i]){
                return;
            }
            bookDom(i);
            
        }
}
addBook("Berserk", "Nakamura", 2790, "not read yet");
addBook("bible", "various", 1200, "not read yet");
addBook("test", "me", 3, "read" );
addBook("kjnb", "me", 3, "read" );
//addBook("rtjkmnbv", "me", 3, "read" );
//addBook("testrt", "me", 3, "read" );
//addBook("mgt", "me", 3, "read" );
//addBook("wruyj", "me", 3, "read" );
//addBook("tewerthst", "me", 3, "read" );
//addBook("ag", "me", 3, "read" );
//addBook("end", "me", 3, "read" );

//for(let i = 0; i<7; i++){
//    bookDom(i);
//}

console.table(library);
updateDisplay(0);





