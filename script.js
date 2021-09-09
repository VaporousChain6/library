let library = [];
let index = 0;
const shelf = document.querySelector(".array");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
const bookButton = document.querySelector(".bookButton");
const newBookForm = document.querySelector(".newBookForm");


function book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
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
    numPages.textContent = `${library[ind].pages} pages`


    const finished = document.createElement("p");
    finished.classList.add("readStatus");
    finished.textContent = `${library[ind].read}`
    finished.addEventListener("click", function(){
        if (finished.textContent == "Read"){
            finished.textContent = "Not read yet";
        
        }
        else{
            finished.textContent = "Read";
        }
    })
    
    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "Remove book";
    removeButton.addEventListener("click", function(){
        tome.innerHTML = ""
        delete(tome);
        library.splice(ind, 1);
        updateDisplay(index);
    })
    

    tome.appendChild(bookTitle);
    tome.appendChild(bookAuthor);
    tome.appendChild(numPages);
    tome.appendChild(finished);
    tome.appendChild(removeButton);
    shelf.appendChild(tome);

 
}

function updateDisplay(num){
    
    if (num < 0){
        shelf.innerHTML = "";
        let n = 0;
        for(let i = n; i<n+8; i++){
            if(!library[i]){
                return;
            }
            bookDom(i);
            
        }
    }
    else if (num > library.length-8){
        return;
    }
    else{
        shelf.innerHTML = "";
        for(let i = num; i<num+8; i++){
            if(!library[i]){
                return;
            }
            bookDom(i);
            
        }
    }
}

function bookForm(){
    const form = document.createElement("div");
    form.classList.add("bookForm")

    const closeButton = document.createElement("button");
    closeButton.classList.add("closeButton");
    closeButton.textContent = "X";
    closeButton.addEventListener("click", function(){
        clearForm();
    })
    form.appendChild(closeButton);


    const titleInf = document.createElement("p");
    titleInf.textContent = "Book title:";
    form.appendChild(titleInf);

        const titleSpace = document.createElement("input");
        titleSpace.placeholder = "Book's title...";
        form.appendChild(titleSpace);

    const authorInf = document.createElement("p");
    authorInf.textContent = "Book Author:";
    form.appendChild(authorInf);

        const authorSpace = document.createElement("input");
        authorSpace.placeholder = "Book's author...";
        form.appendChild(authorSpace);

    const pageInf = document.createElement("p");
    pageInf.textContent = "Number of pages:";
    form.appendChild(pageInf);

        const pageSpace = document.createElement("input");
        pageSpace.placeholder = "Pages";
        form.appendChild(pageSpace);

    const readInf = document.createElement("p");
    readInf.textContent = "Have you read the book?";
    form.appendChild(readInf);

        const readSpace = document.createElement("button");
        readSpace.textContent = "Not read yet";

            readSpace.addEventListener("click", function(){
                if (readSpace.textContent == "Not read yet"){
                    readSpace.textContent = "Read";
                }
                else{
                    readSpace.textContent = "Not read yet";
                }
            })
        form.appendChild(readSpace);

        const jump = document.createElement("p");
        jump.classList.add("jump");
        form.appendChild(jump);

    
    const sumbitButton = document.createElement("button");
    sumbitButton.textContent = "Sumbit";
    form.appendChild(sumbitButton);

    newBookForm.appendChild(form);
    
    sumbitButton.addEventListener("click", function(){
        if (titleSpace.value == ""){
            alert("Title can't be emty");
        }
        else if (isNaN(pageSpace.value)){
            alert("Pages must be a number")
        }
        else if (titleSpace.value.length > 20  || authorSpace.value.length > 25  || pageSpace.value.length > 25){
            alert("Too many characters!");
        }
        else{
            passForm();
        }
    })
    function passForm(){
        let titleSent = titleSpace.value;
        let authorSent = authorSpace.value;
        let pageSent = pageSpace.value;
        let readSent = readSpace.textContent;

        addBook(titleSent, authorSent, pageSent, readSent);
        clearForm();
        return;
    }

    return;

}

function clearForm(){
    newBookForm.innerHTML = "";
    return;
}
leftArrow.addEventListener("click", function(){
    if(index < 0){
        return;
    }
    index = index-1;
    updateDisplay(index);
});
rightArrow.addEventListener("click", function(){
    if (index > library.length-8){
        return;
    }
    else{
    index = index+1;
    updateDisplay(index);
    }
})

bookButton.addEventListener("click", function(){
    bookForm();
    return;

});


addBook("Berserk", "Nakamura", 2790, "not read yet");
addBook("bible", "various", 1200, "not read yet");
addBook("test", "me", 3, "read" );
addBook("kjnb", "me", 3, "read" );
addBook("rtjkmnbv", "me", 3, "read" );
addBook("testrt", "me", 3, "read" );
addBook("mgt", "me", 3, "read" );
addBook("wruyj", "me", 3, "read" );
addBook("tewerthst", "me", 3, "read" );
addBook("ag", "me", 3, "read" );
addBook("end", "me", 3, "read" );

console.table(library);
updateDisplay(0);





