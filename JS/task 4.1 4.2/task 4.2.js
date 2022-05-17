document.getElementById("button 4.2").onclick = () =>{

    function CentimeterToInch(a){
        if(a >= 0) return parseFloat(a)/2.54;
        else throw new Error("Значення не може бути від'ємним");
    }

    let input1 = document.getElementById("centimeter").value;
    let label1 = document.getElementById("label1");
    label1.textContent = " " +  CentimeterToInch(input1) +" Ih";

    let PairNumber = (a) =>{
        a = String(a);
        a = a.split(" ");
        let count = 0;
        for(let i = 0; i < a.length; i++){
            if(a[i]%2 == 0){
                count++;
            }
        }
        return count;
    }
    let input2 = document.getElementById("numbers").value;
    let label2 = document.getElementById("label2");
    label2.textContent = " " + PairNumber(input2);

    let fucn = function(labell,i){
        labell = String(labell);
        labell = labell.split(" "); 
        return labell[i];
    }
    let href = document.getElementById("a").href;
    let src = document.getElementById("img").src;
    let label3 = document.getElementById("label3");
    href.href = fucn(label3,1);
    src.src = fucn(label3,0);
}