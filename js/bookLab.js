//the project (exercise) main function
function Book(title, author, pages, isRead) {
    //this id is generated randomly for the books being created just to different them between each other 
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    //the book information about the name of the book, the author, the number of pages and if the book is read or not
    this.info = function () {
        //this variable is for saving the value of the book was read already or not, depending on the situation 
        var readingSit = ""; //reading situation
        if (this.isRead === false) {
            readingSit = "Unread";
        } else {
            readingSit = "Read";
        }
        //returning the value of the information made ! 
        const information = `${this.title}, ${this.author}, ${this.pages} pages, ${readingSit}`;
        //information returned 
        return information;
    }
}
//the array that will recieve the list of books 
var arrayOfBooks = [];
//function to add a book into some array
//if we adding a book to an array, we must to return the books added, to the array we created
//we're creating a book, so, we have to pass as arguments the information about the book
//we have to recieve the book array as argument
function createBook(arrayOfBooks, bookTitle, bookAuthor, bookNumberOfPages) {
    //first of all, the book must be created before added to the list, of course 
    const book = new Book(bookTitle, bookAuthor, bookNumberOfPages, false);
    //now that the book is created, we have just to add the book into the list 
    arrayOfBooks.push(book);
}

//second function to create a book 
function userCreatingBook(arrayOfBooks, bookTitle, bookAuthor, bookNumberOfPages, isTheBookRead) {
    //creating the book
    const book = new Book(bookTitle, bookAuthor, bookNumberOfPages, isTheBookRead);
    //adding the book throught the array 
    arrayOfBooks.push(book);
}

//creating a bunch of books and putting into the array
createBook(arrayOfBooks, "The Perfect Man", "Marcos Danilson", 200);
createBook(arrayOfBooks, "Rich Dad, and Poor Dad", "David Villa", 256);
createBook(arrayOfBooks, "Millionare Mind", "Richie Millie", 453);
createBook(arrayOfBooks, "Finance", "Marcos Danilson", 156);

//showing the book information
console.log(arrayOfBooks);

//showing a specific values of the book 
console.log(arrayOfBooks[2]);

//the variable where the button gonna be 
const buttonAdd = document.getElementById("button-add");
//button to add some book information manually, and add to through the list
var addBookButton = document.createElement("button");
addBookButton.classList.add("add-button");
//setting the button styles
addBookButton.setAttribute('style', 'background-color: rgba(81, 81, 131, 0.608); border-radius: 10px; border: 1px solid gray; margin-right: 60px; color: white; font-weight: bold; font-size: 15px; padding: 10px;');
//adding the button information
addBookButton.textContent = 'Add a Book';
//events on the button (it works like hover)

//when the mouse goes over the button
addBookButton.addEventListener('mouseenter', () => {
    addBookButton.style.backgroundColor = 'rgba(42, 42, 159, 0.61)';
});
//when the mouse is out of the button 
addBookButton.addEventListener('mouseleave', () => {
    addBookButton.style.backgroundColor = 'rgba(81, 81, 131, 0.608)';
});

buttonAdd.appendChild(addBookButton);
//removing the DOM element 
function removeContent() {
    var library = document.getElementById("book-lab");
    library.textContent = "";
}

//showing the elements(books) straight on the page
function mainPage(arrayOfBooks, removeContent, removeBookFromList) {
    //first of all, we have to get the element where the books are gonna be 
    var library = document.getElementById("book-lab");

    for (let i = 0; i < arrayOfBooks.length; i++) {
        //this is the element where the book will be created
        var book = document.createElement("div");
        //giving the class to the book
        book.classList.add("book");
        //filling the class with the book informations
        //variable for the title of the book 
        var bookTitle = document.createElement("h3");
        //variable for the book author 
        var bookAuthor = document.createElement("h4");
        //variable for the book number of pages
        var bookPages = document.createElement("h5");
        //variable to see if the book was read or not; 
        var bookRead = document.createElement("p");
        //a button to remove the book from the list 
        const bookRemoveButton = document.createElement("button");
        //button to alter the state of a book (if its read or not)
        const bookStateButton = document.createElement("button");
        //giving the button a class
        bookRemoveButton.classList.add('add-button');
        bookRemoveButton.classList.add('remove-button');
        bookRemoveButton.setAttribute('style', 'background-color: rgba(225, 50, 50, 0.46); font-weight: bold; border-radius: 10px; padding: 5px; margin-top: 10px; font-size: 10px; color: white; margin-right: 10px;');
        //giving the button a class
        bookStateButton.classList.add('add-button');
        bookStateButton.classList.add('state-button');
        //there are some condition to consider, before giving the button, a color and anything like this 
        //if the book is unread, the button has to be green, otherwise, the button has to be red
        if (arrayOfBooks[i].isRead === false) {
            //giving the styles for the button
            bookStateButton.setAttribute('style', 'background-color: rgba(51, 189, 39, 0.68); font-weight: bold; border-radius: 10px; padding: 5px; margin-top: 10px; font-size: 10px; color: white ');
            //and the book context has to be 
            bookStateButton.textContent = 'Mark as Read';
            //for the mouse over 
            bookStateButton.addEventListener('mouseenter', () => {
                bookStateButton.style.backgroundColor = 'rgba(51, 189, 39, 0.89)';
            });
            //when the mouse is out of the button 
            bookStateButton.addEventListener('mouseleave', () => {
                bookStateButton.style.backgroundColor = 'rgba(51, 189, 39, 0.68)';
            });
        } else {
            //giving the styles for the button
            bookStateButton.setAttribute('style', 'background-color: rgba(214, 27, 27, 0.69); font-weight: bold; border-radius: 10px; padding: 5px; margin-top: 10px; font-size: 10px; color: white ');
            //and the book context has to be 
            bookStateButton.textContent = 'Mark as Unread';
            //for the mouse over 
            bookStateButton.addEventListener('mouseenter', () => {
                bookStateButton.style.backgroundColor = 'rgba(214, 27, 27, 0.93)';
            });
            //when the mouse is out of the button 
            bookStateButton.addEventListener('mouseleave', () => {
                bookStateButton.style.backgroundColor = 'rgba(214, 27, 27, 0.69)';
            });
        }
        //events on the button (it works like hover)
        //when the mouse goes over the button
        bookRemoveButton.addEventListener('mouseenter', () => {
            bookRemoveButton.style.backgroundColor = 'rgba(255, 0, 0, 0.77)';
        });
        //when the mouse is out of the button 
        bookRemoveButton.addEventListener('mouseleave', () => {
            bookRemoveButton.style.backgroundColor = 'rgba(225, 50, 50, 0.46)';
        });
        bookRemoveButton.textContent = `REMOVE`;
        //setting an attribute thought each button, by the variable i, turning all buttons unique for each book 
        bookRemoveButton.setAttribute('id', `b${i}`);
        bookStateButton.setAttribute('id', `s${i}`); 
        //setting the values of the title, author and pages
        bookTitle.textContent = `${arrayOfBooks[i].title}`;
        bookAuthor.textContent = `${arrayOfBooks[i].author}`;
        bookPages.textContent = `${arrayOfBooks[i].pages} pages`;
        if (arrayOfBooks[i].isRead === false) {
            bookRead.textContent = `Unread`;
            bookRead.setAttribute('style', 'color: red; text-align: right; font-size: 16px; font-weight: bold;');
        } else {
            bookRead.textContent = `Read`;
            bookRead.setAttribute('style', 'color: green; text-align: right; font-size: 16px; font-weight: bold;');
        }
        //setting the attributes for the title, author and pages
        bookTitle.setAttribute('style', 'color: blue; margin-bottom: 10px;');
        bookPages.setAttribute('style', 'align-item: left;');
        bookAuthor.setAttribute('style', 'align-item: center;');
        //special event: removing the button
        bookRemoveButton.addEventListener('click', () => {
            //remove all the content 
            removeContent();
            removeBookFromList(arrayOfBooks, arrayOfBooks[i]);
            //and show all the books from the list
            mainPage(arrayOfBooks, removeContent, removeBookFromList);
        });
        //special event: changing the state of the book
        bookStateButton.addEventListener('click', () => {
            //remove all the content
            removeContent(); 
            //change the book state
            if (arrayOfBooks[i].isRead === false){
                arrayOfBooks[i].isRead = true; 
            }else{
                arrayOfBooks[i].isRead = false; 
            }
            //then, show the content of the page again
            mainPage(arrayOfBooks, removeContent, removeBookFromList); 
        })
        //adding the content throught the div
        book.appendChild(bookTitle);
        book.appendChild(bookAuthor);
        book.appendChild(bookPages);
        book.appendChild(bookRead);
        book.appendChild(bookRemoveButton);
        book.appendChild(bookStateButton); 
        //add the book through the library
        library.appendChild(book);
    }
}

//function to add a new book to the list from the user 
function addBook(arrayOfBooks) {
    //first, ask for the title of the book
    var bookTitleFunction = prompt('Enter the title of the book: ');
    //then, ask for the name of the author of the book 
    var bookAuthorFunction = prompt('Enter the author of this book: ');
    //then, ask for the number of the pages it want to add at the book
    var bookNumber = prompt('Enter the number of the pages the book might have: ');
    //confirm if the number putted is valid or no 
    //the real number variable
    var numberOfThePages = Number(bookNumber);
    //confirm if is a number 
    while (isNaN(numberOfThePages)) {
        bookNumber = prompt('Type the number again (you entered an invalid number): ');
        numberOfThePages = Number(bookNumberOfPages);
    }
    //finally asking if the book is already read or not
    bookNumber = prompt('Is the book already read ? (1 for yes; and 2 for no) ');
    //variable that carries the number
    var numberIsRead = Number(bookNumber);
    //confirm if is a number again
    while (isNaN(numberIsRead) || (numberIsRead !== 1 && numberIsRead !== 2)) {
        bookNumber = prompt('Type a real number (and it must be 1 for yes; and 2 for no): ');
        numberIsRead = Number(bookNumber);
    }
    //variable that carries the bool value 
    if (numberIsRead === 1) {
        var bookIsRead = true;
    } else {
        var bookIsRead = false;
    }
    //now is time to create the book and add to the list 
    userCreatingBook(arrayOfBooks, bookTitleFunction, bookAuthorFunction, numberOfThePages, bookIsRead);
}

//method to remove the book from the list
function removeBookFromList(arrayOfBooks, bookId) {
    //this method is to remove the book from the array 
    const index = arrayOfBooks.indexOf(bookId);
    if (index !== -1) {
        arrayOfBooks.splice(index, 1);
    }
}

addBookButton.addEventListener('click', () => {
    removeContent();
    addBook(arrayOfBooks);
    mainPage(arrayOfBooks, removeContent, removeBookFromList);
});

//keep coding from here! 
//removeBookFromList(arrayOfBooks, arrayOfBooks[0]); 
mainPage(arrayOfBooks, removeContent, removeBookFromList);





