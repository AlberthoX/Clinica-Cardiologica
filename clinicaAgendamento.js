const cepEndereco = document.querySelector("#cepEndereco");
const bairroEndereco = document.querySelector("#bairroEndereco");
const complementoEndereco = document.querySelector("#complementoEndereco");
const cidadeEndereco = document.querySelector("#cidadeEndereco");
const botaoCalendario = document.querySelector("#botaoDados");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const input4 = document.querySelector("#input4");
const textarea1 = document.querySelector("#textarea1");

cepEndereco.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        let url = "https://viacep.com.br/ws/" + cepEndereco.value + "/json";

        let request = new XMLHttpRequest();
        request.open("GET", url); // requisição assincrona
        request.send();

        request.onload = function(){
            let endereco = JSON.parse(request.response);
            console.log(endereco)
            bairroEndereco.value = endereco.bairro;
            complementoEndereco.value = endereco.complemento;
            cidadeEndereco.value = endereco.localidade;
        }
    }
});

botaoCalendario.addEventListener("click", (event) => {
    console.log(input1.value)
    console.log(input2.value)
    console.log(input3.value)
    console.log(input4.value)
    console.log(textarea1.value)
    console.log(cepEndereco.value)
    console.log(bairroEndereco.value)
    console.log(complementoEndereco.value)
    console.log(cidadeEndereco.value)
})