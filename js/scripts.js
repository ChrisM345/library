const myLibrary = [{author: 'test1test1test1test1test1test1test1', title: 'titleTest1', pages: 450, read: true}, {author: 'test2', title: 'titleTest2', pages: 450, read: true}, {author: 'test3', title: 'titleTest3', pages: 450, read: true}];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read
}

function addBookToLibrary(){

}

function displayBooks(){
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
        read.innerText = `${book.read}`;

        card.append(author);
        card.append(title);
        card.append(pages);
        card.append(read);
        // console.log(book.title)
        bookSection.append(card);
    })
}

const bookSection = document.querySelector(".book-container")