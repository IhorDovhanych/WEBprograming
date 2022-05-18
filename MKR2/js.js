class Film{
    constructor(id,name,director,producer,actorsList = [],trailerUrl,year,cashFees){
        this.id = id;
        this.name = name;
        this.director = director;
        this.producer = producer;
        this.actorsList = actorsList;
        this.trailerUrl = trailerUrl;
        this.year = year;
        this.cashFees = cashFees;
    }
}
class FilmStr extends Film{
    toString(){
        return `${super.toString()}
            id:${this.id}
            name:${this.name}
            director:${this.director}
            producer:${this.producer}
            actorsList:${this.actorsList}
            trailerUrl:${this.trailerUrl}
            year:${this.year}
            cashFees:${this.cashFees}
        `
    }
}
class FilmActorFind{
    constructor(items = []){
        this.items = items
    }

    GetActor(actor){
        for(let i = 0; i < this.items.length; i++){
            for(let j = 0; j < this.items[i].actorsList.length; j++){
                if(this.items.find(film => film.actorsList[j] == actor)){
                    return this.items.find(film => film.actorsList[j] == actor).name
                }
            }
        }
    }
}

document.getElementById("AddUser").onclick = () =>{
    document.getElementById("AddUserHtml").innerHTML =`
        <div class="AddUser">
            <h3>ADD FILM</h3>
            <input id="ID" class="input" placeholder="ID"> <br>
            <input id="NAME" class="input" placeholder="NAME"> <br>
            <input id="DIRECTOR" class="input" placeholder="DIRECTOR"> <br>
            <input id="PRODUCER" class="input" placeholder="PRODUCER"> <br>
            <input id="ACTORSLIST" class="input" placeholder="ACTORS LIST"> <br>
            <input id="TRAILERURL" class="input" placeholder="TRAILER URL"> <br>
            <input id="CASHFEES" class="input" placeholder="CASH FEES"> <br>
            <button id="AddFilm">ADD</button>
        </div>`
    let id = document.getElementById("ID");
    let name = document.getElementById("NAME");
    let director = document.getElementById("DIRECTOR");
    let producer = document.getElementById("PRODUCER");
    let actorList = document.getElementById("ACTORSLIST");
    let trailerUrl = document.getElementById("TRAILERURL");
    let cashFees = document.getElementById("CASHFEES");
    let index = 0;
    document.getElementById("AddFilm").onclick= () =>{
        document.getElementById("AddFilmHtml").innerHTML +=`
        <div id="element${index}">
        <label>${id.value}</label>
        <label>${name.value}</label>
        <label>${director.value}</label>
        <label>${producer.value}</label>
        <label>${actorList.value}</label>
        <label>${trailerUrl.value}</label>
        <label>${cashFees.value}</label>
        <button id="deleteButton${index}">DELETE</button>
        <div>
        `
    }
    }



let film1 = new Film(
    1,
    "Titanic",
    "Josh",
    "Josh",
    ["Bogdan","Lera"],
    "#",
    2022,
    30000)
let film2 = new Film(
    2,
    "Star Wars",
    "Igor",
    "Igor",
    ["Igor","Markiyan"],
    "#",
    2023,
    303000)


console.log(film1)
console.log(film2)
let GetActor = new FilmActorFind([film1, film2])
console.log(GetActor.GetActor("Igor"))
console.log(GetActor.GetActor("Lera"))