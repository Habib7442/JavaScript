// What are classes and objects in JS?
// Classes are a template for creating objects. They encapsulate data with code to work on that data.
// Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.


class Movies {
    constructor(title, director, actor, actress) {
        this.title = title;
        this.director = director;
        this.actor = actor;
        this.actress = actress;
    }

    start() {
        console.log("The name of the movie is " + this.title + " and it is directed by " + this.director + " and the actor is " + this.actor + " and the actress is " + this.actress);
    }
}

let movie = new Movies("Jawan", "Atlee", "SRK", "Nayanthara");
movie.start();