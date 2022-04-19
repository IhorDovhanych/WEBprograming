let logins = ["Atum", "suzuya", "flowless", "LeonidNechay"];
document.getElementById("button").onclick = () =>
{
    let check = document.getElementById("agreement");
    if(check.checked){
        let login = document.getElementById("login").value;
        for(i = 0; i < 4; i++)
        {
            if(login == logins[i])
                alert("Цей логін вже зайнятий");
        }
        if(document.getElementById("login").value == document.getElementById("password").value)
        alert("Пароль не може повторяти логін");
    }
    else alert("Ви не погоджуєтеся з умовами")
}
