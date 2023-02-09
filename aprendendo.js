var inputNumber = document.querySelector('input#inputNumber');
var inputButton = document.querySelector('input#inputButton');
var resultado = document.querySelector('div.result')

function calcular(){
    var vel = Number(inputNumber.value);
    if(vel > 60){
        resultado.innerHTML = `Sua velocidade foi de ${vel}Km/h! Você passou da velocidade mínima exigida! (60km/h). Foram adicionados 5 pontos na sua carteira! `;
    }else{
        resultado.innerHTML = `Use sempre os cintos de segurança! Se beber não dirija! Boa viagem!`
    }
}
