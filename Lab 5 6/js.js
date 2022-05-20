const constructor = document.getElementById("constructor")

// hide id="close" button
document.getElementById("close").style.visibility = "hidden"

// function for id="open" button
document.getElementById("open").onclick = () => {

    constructor.classList.remove("hide")

    document.getElementById("open").style.visibility = "hidden"
    document.getElementById("close").style.visibility = "visible"

}

// function for id="close" button

document.getElementById("close").onclick = () => {

    constructor.classList.add("hide")

    document.getElementById("close").style.visibility = "hidden"
    document.getElementById("open").style.visibility = "visible"
}
const azsArr = []
document.getElementById("ADDazs").onclick = () => {
    const objAzs = new AZS(
        document.getElementById("id").value,
        document.getElementById("addres").value,
        document.getElementById("owner").value)
    const arrGasoline = document.getElementById("gasolines").value.split(" ")

    const arrCost = document.getElementById("cost").value.split(" ")

    for (let i = 0; i < arrGasoline.length; i++) {
        const type = arrGasoline[i].split(",")[0]
        const volume = arrGasoline[i].split(",")[1]
        objAzs.addGasolines(type, volume, arrCost[i])
    }
    azsArr.push(objAzs)
    render()
}

function render() {
    const tableList = document.getElementById("table-list-body")
    tableList.innerHTML = ``
    for (let i = 0; i < azsArr.length; i++) {
        const objAzs = azsArr[i]
        const tr = document.createElement("tr")

        const id = createTd(objAzs.id)
        const adress = createTd(objAzs.adress)
        const owner = createTd(objAzs.owner)
        const gasoline = createTd(objAzs.getGasolinesStr())
        const cost = createTd(objAzs.costs.join(" "))
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "DELETE"
        deleteBtn.addEventListener("click",
        () =>{
            console.log(i)
            azsArr.splice(i,1)
            render()
        })

        const functionsContainer = document.createElement("td")
        functionsContainer.appendChild(deleteBtn)

        tr.appendChild(id)
        tr.appendChild(adress)
        tr.appendChild(owner)
        tr.appendChild(gasoline)
        tr.appendChild(cost)
        tr.appendChild(functionsContainer)

        tableList.appendChild(tr)

    }
}
function createTd(text){
    const element = document.createElement("td")
    element.innerText = text
    return element
}
