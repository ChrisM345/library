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
        card.className = "book"
        const info = document.createElement("p");
        info.innerText = `${book.author}\n${book.title}\n${book.pages}\n${book.read}`;
        card.append(info);
        // console.log(book.title)
        bookSection.append(card)
    })
}

const bookSection = document.querySelector(".book-container")