const positiveBtn = document.getElementById("positiveBtn")
const negativeBtn = document.getElementById("negativeBtn")
const neutralBtn = document.getElementById("neutralBtn")
positiveBtn.onclick = () => {
    document.getElementById("content").innerText = "Positive content"
    document.getElementById("positiveBtn").classList.add("active")
    document.getElementById("negativeBtn").classList.remove("active")
    document.getElementById("neutralBtn").classList.remove("active")
}

negativeBtn.onclick = () => {
    document.getElementById("content").innerHTML = `Negative content`
    document.getElementById("positiveBtn").classList.remove("active")
    document.getElementById("negativeBtn").classList.add("active")
    document.getElementById("neutralBtn").classList.remove("active")
}

neutralBtn.onclick = () => {
    document.getElementById("content").innerHTML = `Neutral content`
    document.getElementById("positiveBtn").classList.remove("active")
    document.getElementById("negativeBtn").classList.remove("active")
    document.getElementById("neutralBtn").classList.add("active")
}

document.getElementById("changeTab").onclick = () =>{
    const input = document.getElementById("tabIndex").value
    if(input==1){
        positiveBtn.onclick()
    }
    else if(input==2){
        negativeBtn.onclick()
    }
    else if(input==3){
        neutralBtn.onclick()
    }
    else{
        alert("Index is invalid")
    }
}