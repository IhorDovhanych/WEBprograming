
document.getElementById("button 4.1").onclick = () => {
    
    alert("Task 1");
    let stringElement = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];
    let row = prompt("row's number", "5")
    let colm = prompt("colm's number", "5")
    let string = "";
    

    for (let i = 0; i < row; i++){
        for (let j = 0; j < colm; j++){
            string += " "+`${stringElement[j+i]}`
        }
        string += "\n";
    }

    alert(string);

    alert("Task 2");
    alert("Sum between two sevens in number");

    let number = prompt("number","1247547");
    let length = number.length;
    let addnumber = parseInt(number);
    let sum = 0;
    for(let i = 0; i < length; i++){
        
        addnumber = +number % 10;
        number = +number / 10;
        if (parseInt(addnumber) == 7 ){
            for (let j = 0; j < length-1; j++){
                addnumber = +number % 10;
                number = +number / 10;
                if(parseInt(addnumber) == 7){
                    break;
                }
                sum += parseInt(addnumber);
            }
            break;
        }
    }
    alert(sum);

    alert("Task 3")
    
    let width = parseFloat(prompt("width", "1500"));
    let elnumber = parseInt(prompt("numbers of element", "10"));
    alert(width/elnumber);

    alert("Task 4");
    let price = prompt("Enter price for two goods by space : ", "10 25");
    let goods = prompt("Enter amount of two goods by space : ", "3 1");
    price = price.split(" ");
    goods = goods.split(" ");
    let sum1 = price[0] * goods[0];
    let sum2 = price[1] * goods[1];
    alert(`Price for first el ${sum1}\n Price for second el ${sum2}\n General sum ${sum1+sum2}`);
}