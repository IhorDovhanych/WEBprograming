//Task 1
document.getElementById("task1").onclick = () => {

    let ratingNumber = document.getElementById("ratingNumber").value;
    let rating = String(document.getElementById("rating").value);
    let grade = "Відмінник";
    let middleRating = 0.0;
    rating = rating.split(" ");
    if(rating.length != ratingNumber){
        throw new Error("raiting count is not correct");
    }

    for(let i = 0; i < ratingNumber; i++){
        if(rating[i] > 5){
            throw new Error("raiting is not correct (5 points system)");
        }
        if(rating[i] == 4 && grade == "Відмінник"){
            grade = "Хорошист"
        }
        if(rating[i] == 3){
            grade = "Трійочник"
        }
        if(rating[i] <= 2){
            grade = "Двійочник"
            break
        }
    }
    for(let i = 0; i < ratingNumber; i++){
        middleRating += parseFloat(rating[i])
    }
    middleRating /= ratingNumber
    alert(`Середній бал = ${middleRating}`)
    alert(grade)
}

//Task 2

document.getElementById("task2").onclick = () =>{
    let visitorsNumber = document.getElementById("visitorsNumber").value;
    let output = "";
    visitorsNumber = visitorsNumber.split(" ");
    
    let visitorsNumberLength = visitorsNumber.length;

    if(visitorsNumberLength != 7){
        throw new Error("incorrect array length")
    }
    for(let i = 0; i < visitorsNumberLength; i++){
        if(visitorsNumber[i] < 0){
            throw new Error("visitors number is not correct")
        }
    }
    for(let i = 0; i < visitorsNumberLength; i++){
        if(visitorsNumber[i] < 20){
            output += String(i+1) + " ";
        }
    }
    alert(`Кількість днів коли відвідувачів було веньше за 20 \n Дні : ${output}`)
    output = "1";
    let min = visitorsNumber[0];
    for(let i = 1; i < visitorsNumberLength; i++){
        if(min > visitorsNumber[i]){
            output = String(i+1)
            min = visitorsNumber[i]
        }
        else if(min == visitorsNumber[i]){
            output += " " + String(i+1)
        }
    }
    alert(`Мінімальна кількість відвідувачів у такі дні \n Дні : ${output}`)
    output = "1";
    let max = visitorsNumber[0];
    for(let i = 1; i < visitorsNumberLength; i++){
        if(max < visitorsNumber[i]){
            output = String(i+1)
            max = visitorsNumber[i]
        }
        else if(max == visitorsNumber[i]){
            output += " " + String(i+1)
        }
    }
    alert(`Мінімальна кількість відвідувачів у такі дні \n Дні : ${output}`)

    let sum = 0
    for(let i = 0; i < 5; i++){
        sum += parseInt(visitorsNumber[i])
    }

    alert(`Загальна кількість клієнтів у робочі дні \n ${sum}`)
    sum = parseInt(visitorsNumber[5])+parseInt(visitorsNumber[6])
    alert(`Загальна кількість клієнтів у вихідні дні \n ${sum}`)
}

//Task 3

document.getElementById("task3").onclick = () =>{
    let name = document.getElementById("name").value;
    let nameList = String(document.getElementById("nameList").value);
    nameList = nameList.split(" ");
    let count = 0;
    for(let i = 0; i < nameList.length; i++){
        if(nameList[i] == name){
            count++;
        }
    }
    alert(`Кількість імен ${name} = ${count}`)
}

//Task 4

document.getElementById("task4").onclick = () =>{
    function Random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    } 
    let a = [];
    let b = [];
    let winSum = 0;
    for (let i = 0; i<10; i++) {
        let el = parseInt(`${Random(-500, 500)} `);
        a.push(el);
    }
    alert(a);
    while (true) {
        let answear = parseInt(prompt("Введіть позицію від 1 до 10 щоб продовжити. Щоб закінчити, введіть іншу цифру"))
        if (answear >= 1 && 10 >= answear) {
            if (b.includes(answear - 1)) {
                alert("Ця цифра вже використана");
                continue;
            }
            else {
                b.push(answear - 1);
                winSum += a[answear - 1]
                alert(`Виграш: ${winSum}`);
            }   
        }
        else {
            break;
        }   
    
    }
    
    alert(`Остаточний виграш: ${winSum}`);
}  

document.getElementById("task5").onclick = () =>{
    let moodList = [
        { 
             mood:"Веселий",
            url:"https://w7.pngwing.com/pngs/180/962/png-transparent-smiley-emoticon-smiley-miscellaneous-smiley-desktop-wallpaper-thumbnail.png "
        },
        {
           mood:"Сумний",
           url:"https://w7.pngwing.com/pngs/222/140/png-transparent-sad-emoticon-iphone-emoji-sadness-smiley-emoticon-emoji-face-electronics-face-emoji-face-thumbnail.png "
        } ];
    let output = "Настрої : ";
    for(let i = 0; i < moodList.length; i++){
        output += moodList[i].mood + " ";
    }
    alert(`${output}`);
    let pick = parseInt(prompt("Виберіть настрій")) - 1;
    let image = document.getElementById("img1")
    if(pick <= moodList.length && pick >= 0){
        image.height = 100;
        image.width = 100;
        image.src = moodList[pick].url;
    }
    else{
        alert("incorrect numbers")
    }
}