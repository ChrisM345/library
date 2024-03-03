const myLibrary = [];

// Book Object includes basic information + index for removing books from library
function Book(author, title, pages, read, idx) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    if (read){
        this.read = 'Yes';
    }
    else{
        this.read = 'No'
    }
    this.idx = myLibrary.length;
}

Book.prototype.toggleReadStatus = function(){
    if (this.read == 'Yes') {
        this.read = "No"
    } else {
        this.read = "Yes"
    }
    displayBooks();
}

myLibrary.push(new Book('test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1', 'titleTest1', 450,'Yes'))
myLibrary.push(new Book('test2', 'titleTest2test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1', 450,'No'))
myLibrary.push(new Book('test3', 'titleTest3', 450,'Yes'))
myLibrary.push(new Book('test3', 'titleTest3', 450,'Yes'))
myLibrary.push(new Book('test3', 'titleTest3', 450,'Yes'))
myLibrary.push(new Book('test3', 'titleTest3', 450,'Yes'))
myLibrary.push(new Book('test3', 'titleTest3', 450,'Yes'))
myLibrary.push(new Book('test3', 'titleTest3', 450,'Yes'))
myLibrary.push(new Book('test3', 'titleTest3', 450,'Yes'))


// Create a new Book and add it to the library. The index for the new book is the length of the library
function addBookToLibrary(author, title, pages, read){
    let newBook = new Book(author, title, pages, read, myLibrary.length);
    console.log(myLibrary.length)
    myLibrary.push(newBook);
    displayBooks();
    dialog.close();
}

function removeBook(idx){
    console.log("delete!")
    console.log(idx)
    // splice to remove and update indexes
    myLibrary.splice(idx, 1);

    // Go through the library and update book.idx values
    myLibrary.forEach((book, i) => {
        book.idx = i
    });
    console.log(myLibrary)
    displayBooks();

}


function displayBooks(){
    bookSection.innerHTML = ""
    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.className = "book";

        const author = document.createElement("p");
        author.className = "author";
        author.innerText = `${book.author}`;
        
        const title = document.createElement("p");
        title.className = "title";
        title.innerText = `${book.title}`;
        
        const pages = document.createElement("p");
        pages.className = "pages";
        pages.innerText = `${book.pages}`;
        
        const readSection = document.createElement("div");
        readSection.className = "readSection";

        const read = document.createElement("p");
        read.className = "read";
        read.innerText = `Read: ${book.read}`;

        const readToggle = document.createElement("button");
        readToggle.className = "readToggle";
        readToggle.innerText = `Toggle Status`;

        readSection.append(read);
        readSection.append(readToggle);

        const delSection = document.createElement("div")
        delSection.className = "delete-section"
        const delBook = document.createElement("button");
        delBook.className = "delete-book";
        delBook.innerText = `Remove Book`;

        delSection.append(delBook)

        delBook.addEventListener("click", () => {
            removeBook(book.idx)
        })

        readToggle.addEventListener("click", () => {
            book.toggleReadStatus();
        })

        card.append(author);
        card.append(title);
        card.append(pages);
        card.append(readSection);
        card.append(delSection);
        bookSection.append(card);
    })
}

const bookSection = document.querySelector(".book-container")
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector(".close");
const btnSubmit = document.querySelector(".btnSubmit");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const author = document.querySelector("#author").value;
    const title = document.querySelector("#title").value
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    if (author && title && pages) addBookToLibrary(author, title, pages, read);
})

displayBooks()