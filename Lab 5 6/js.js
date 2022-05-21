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
        const functionsContainer = document.createElement("td")
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "DELETE"
        deleteBtn.addEventListener("click", () => {
            azsArr.splice(i, 1)
            render()
        })
        const editBtn = document.createElement("button")
        editBtn.innerText = "EDIT"
        editBtn.addEventListener("click", () => {
            renderInput(i)
        })
        const okBtn = document.createElement("button")
        okBtn.innerText = "OK"
        okBtn.classList.add("hide")

        functionsContainer.appendChild(deleteBtn)
        functionsContainer.appendChild(editBtn)
        functionsContainer.appendChild(okBtn)
        tr.appendChild(id)
        tr.appendChild(adress)
        tr.appendChild(owner)
        tr.appendChild(gasoline)
        tr.appendChild(cost)
        tr.appendChild(functionsContainer)
        tableList.appendChild(tr)

    }
}

function renderInput(i) {

    const tableList = document.getElementById("table-list-body")
    tableList.innerHTML = ``

    for (let j = 0; j < azsArr.length; j++) {
        const objAzs = azsArr[j]
        if (j != i) {
            const tr = document.createElement("tr")

            const id = createTd(objAzs.id)
            const adress = createTd(objAzs.adress)
            const owner = createTd(objAzs.owner)
            const gasoline = createTd(objAzs.getGasolinesStr())
            const cost = createTd(objAzs.costs.join(" "))
            const functionsContainer = document.createElement("td")
            const deleteBtn = document.createElement("button")
            deleteBtn.innerText = "DELETE"
            deleteBtn.addEventListener("click", () => {
                azsArr.splice(i, 1)
                render()
            })
            const editBtn = document.createElement("button")
            editBtn.innerText = "EDIT"
            editBtn.addEventListener("click", () => {
                renderInput(j)
            })
            const okBtn = document.createElement("button")
            okBtn.innerText = "OK"
            okBtn.classList.add("hide")

            functionsContainer.appendChild(deleteBtn)
            functionsContainer.appendChild(editBtn)

            tr.appendChild(id)
            tr.appendChild(adress)
            tr.appendChild(owner)
            tr.appendChild(gasoline)
            tr.appendChild(cost)
            tr.appendChild(functionsContainer)
            tableList.appendChild(tr)
        }
        else {
            const tr = document.createElement("tr")
            console.log(objAzs.costs)
            const id = createInput(objAzs.id)
            const adress = createInput(objAzs.adress)
            const owner = createInput(objAzs.owner)
            const gasoline = createInput(objAzs.getGasolinesStr())
            const cost = createInput(objAzs.costs.join(" "))
            const functionsContainer = document.createElement("td")
            const okBtn = document.createElement("button")
            okBtn.innerText = "OK"
            okBtn.classList.remove("hide")
            okBtn.addEventListener("click", () =>{
                console.log(gasoline.firstChild.value)
                console.log(cost.firstChild.value)
            renderOk(j,id.firstChild.value,
                adress.firstChild.value,
                owner.firstChild.value,
                gasoline.firstChild.value,
                cost.firstChild.value)
            })
            functionsContainer.appendChild(okBtn)

            tr.appendChild(id)
            tr.appendChild(adress)
            tr.appendChild(owner)
            tr.appendChild(gasoline)
            tr.appendChild(cost)
            tr.appendChild(functionsContainer)
            tableList.appendChild(tr)
        }
    }

}

function renderOk(i,id,adress,owner,gasoline,cost){
    const tableList = document.getElementById("table-list-body")
    tableList.innerHTML = ``

    for (let j = 0; j < azsArr.length; j++) {
        const objAzs = azsArr[j]
        const tr = document.createElement("tr")
        if(j!=i){
            const idOk = createTd(objAzs.id)
            const adressOk = createTd(objAzs.adress)
            const ownerOk = createTd(objAzs.owner)
            const gasolineOk = createTd(objAzs.getGasolinesStr())
            const costOk = createTd(objAzs.costs.join(" "))
            const functionsContainerOk = document.createElement("td")
            const deleteBtn = document.createElement("button")
            deleteBtn.innerText = "DELETE"
            deleteBtn.addEventListener("click", () => {
                azsArr.splice(i, 1)
                render()
            })
            const editBtn = document.createElement("button")
            editBtn.innerText = "EDIT"
            editBtn.addEventListener("click", () => {
                renderInput(j)
            })
            const okBtn = document.createElement("button")
            okBtn.innerText = "OK"
            okBtn.classList.add("hide")

            functionsContainerOk.appendChild(deleteBtn)
            functionsContainerOk.appendChild(editBtn)

            tr.appendChild(idOk)
            tr.appendChild(adressOk)
            tr.appendChild(ownerOk)
            tr.appendChild(gasolineOk)
            tr.appendChild(costOk)
            tr.appendChild(functionsContainerOk)
            tableList.appendChild(tr)
        }
        else{
            objAzs.id = id
            objAzs.adress = adress
            objAzs.owner = owner
            
            const arrGasoline = gasoline.split(" ")
            const arrCost = cost.split(" ")

            for (let g = 0; g < arrGasoline.length; g++) {
            const type = arrGasoline[g].split(",")[0]
            const volume = arrGasoline[g].split(",")[1]
            objAzs.addGasolines(type, volume, arrCost[g])
            }
            console.log(gasoline.split(" "))
            console.log(cost.split(" "))
            
            const idOk = createTd(id)
            const adressOk = createTd(adress)
            const ownerOk = createTd(owner)
            const gasolineOk = createTd(gasoline)
            const costOk = createTd(cost)
            const functionsContainerOk = document.createElement("td")
            const deleteBtn = document.createElement("button")
            deleteBtn.innerText = "DELETE"
            deleteBtn.addEventListener("click", () => {
                azsArr.splice(i, 1)
                render()
            })
            const editBtn = document.createElement("button")
            editBtn.innerText = "EDIT"
            editBtn.addEventListener("click", () => {
                renderInput(j)
            })
            const okBtn = document.createElement("button")
            okBtn.innerText = "OK"
            okBtn.classList.add("hide")

            functionsContainerOk.appendChild(deleteBtn)
            functionsContainerOk.appendChild(editBtn)

            tr.appendChild(idOk)
            tr.appendChild(adressOk)
            tr.appendChild(ownerOk)
            tr.appendChild(gasolineOk)
            tr.appendChild(costOk)
            tr.appendChild(functionsContainerOk)
            tableList.appendChild(tr)
        }
    }
}


function createTd(text) {
    const element = document.createElement("td")
    element.innerText = text
    return element
}
function createInput(text) {
    const element = document.createElement("td")
    element.appendChild(document.createElement("input"))
    element.firstChild.value = text
    return element
}