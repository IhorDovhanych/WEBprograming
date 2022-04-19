let stringElement = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];
let row = prompt("row's number", "")
let colm = prompt("colm's number", "")
let string = "";
for (let i = 0; i < row; i++){
    for (let j = 0; j < colm; j++){
        string += " "+`${stringElement[j+i]}`
    }
    string += "\n"
}
alert(string);