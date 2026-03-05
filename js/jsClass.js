///////it just only example function
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function () {
        console.log(this.name);
    }
}
    Player.prototype.sayHello = function () {
        console.log("Hello, I'm a player");
    }

    const player1 = new Player('marcos', 'X');
    const player2 = new Player('edmar', 'O');
    //creating a new book 
    const book1 = new Book('Vire o Jogo', 'Dave Asprey', '304');
    player1.sayName();
    player2.sayName();
    const bool= Object.getPrototypeOf(Player.prototype) === Object.prototype;
    console.log(`Yes it's ${bool}`); 
    player1.sayHello();
    player2.sayHello();

    console.log(player1.valueOf()); 
    //objects prototype
    Object.getPrototypeOf(player1) === Player.prototype;
    console.log(Object.getPrototypeOf(player1) === Player.prototype);
    Object.getPrototypeOf(player2) === Player.prototype;
    console.log(Object.getPrototypeOf(player2) === Player.prototype);
    console.log(Object.getPrototypeOf(book1) === Book.prototype);








