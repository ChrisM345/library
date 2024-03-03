const myLibrary = [{author: 'test1test1test1test1test1test1test1', title: 'titleTest1', pages: 450, read: 'Yes', idx: 0}, {author: 'test2', title: 'titleTest2', pages: 450, read: "No", idx: 1}, {author: 'test3', title: 'titleTest3', pages: 450, read: "yes", idx: 2}];

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
    console.log("changing status")
}

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
        
        const read = document.createElement("p");
        read.className = "read";
        read.innerText = `Read: ${book.read}`;

        const delBook = document.createElement("button");
        delBook.className = "delete-book";
        delBook.innerText = `Remove Book`;

        delBook.addEventListener("click", () => {
            removeBook(book.idx)
        })

        card.append(author);
        card.append(title);
        card.append(pages);
        card.append(read);
        card.append(delBook);
        // console.log(book.title)
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