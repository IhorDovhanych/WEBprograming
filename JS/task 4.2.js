document.getElementById("button 4.2").onclick = () =>{

    function CentimeterToMillimeters(a){
        return parseFloat(a) * 10;
    }

    let input = document.getElementById("centimeter").value;
    let label = document.getElementById("label1");
    label.textContent = CentimeterToMillimeters(input) + "mm";
}