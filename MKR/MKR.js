document.getElementById("task2").onclick = () => {

    let n = parseInt(document.getElementById("n").value)
    function Random(min, max) 
    {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
    }
    let arr = Array();

    for(let i = 0; i < n; i++){
        arr.push(Random(1,11))
    }

    alert(`Масив : ${arr}`)

    let lastNumber = arr.reverse()[0]
    alert(`Останній елемент : ${lastNumber}`)

    let newArr = Array();

    for(let i = 0; i < n; i++){
        newArr.push(Random(lastNumber+1,lastNumber+11))
    }

    alert(`Новий масив : ${newArr}`)
}

document.getElementById("task3").onclick = () => {

    let PIB = String(document.getElementById("PIB").value)
    PIB = PIB.split(" ")
    if(PIB.length != 3){
        alert("Не вірнов казано \nВведіть : Прізвище, Ім'я, По батькові")
    }
    let autoNumber = String(document.getElementById("autoNumber").value)
    if (autoNumber.length != 8) alert("Не вірна кількість символів у номера")
    let autoSumb = document.getElementById("autoSymb").value;
    if(autoNumber.slice(0,2) != autoSumb) alert("Не правильно вказано регіон");

}