function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}



let form_mail = document.getElementById("form_mail");
let popup = document.getElementById("popup");
let span = document.querySelector(".inpspan");


var calcul_placeholder= document.getElementById("verify_input");

getRandomNum();


function getRandomNum() {

    var number_1 = Math.floor((Math.random() * 10) + 1);
    var number_2 = Math.floor((Math.random() * 10) + 1);

    var res = number_1 + number_2;

    calcul_placeholder.placeholder = number_1 + " + " + number_2;

    form_mail.addEventListener('submit', function (e){

        var resultat_user = Number(calcul_placeholder.value);

        console.log(number_1, number_2);
        console.log("USER : " + resultat_user);
        console.log("CALCUL : " + res);

        if (resultat_user === res) {

            function validation_php(){
                var var_verif = "<?php echo json_encode($fin)?>";
                console.log(var_verif);
                const x = 1;
                if (x !== 1){
                    popup.classList.remove('validate');
                }

            }

            span.style.color = "#15d615";
            span.innerHTML = "Mail en cours d'envoi...";
            popup.classList.add('validate');

            validation_php();
        }
        else{
            function remove_error(){
                popup.classList.remove("error");
                /*span.innerHTML = ""*/
            }

            span.style.color = "red";
            span.innerHTML = "Résultat non-valide"
            popup.classList.add('error');
            calcul_placeholder.focus();

            setTimeout(remove_error, 2000);

            calcul_placeholder.value= "";
            e.preventDefault()
        }
    })

}

// document.addEventListener('click', logKey);

function logKey(e) {
    const x = e.clientX;
    const y = e.clientY;
    const div = document.createElement("div");
    const span = document.createElement("span");
    div.classList.add('loader-6');
    div.style.top = y - 10 + "px";
    div.style.left = x - 10 + "px";
    document.body.appendChild(div);
    div.body.appendChild(span);
}
