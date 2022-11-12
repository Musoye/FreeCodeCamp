// practice class and promise in javaScript
class Book {
    constructor(author){
        this._author = author;
    }
    //getter
    get writer() {
        return this._author;
    }

    //setter
    set writer(Newauth) {
        this._author = Newauth;
    }
}
const book = new Book('Mustapha');
book.writer = 'musoye';
console.log(book);