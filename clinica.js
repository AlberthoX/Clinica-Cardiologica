const dataSpan = document.querySelector("#dataSpan");
const horario = document.querySelector("#horario");
const iframeSobre = document.querySelector("#iframeClinica");

const divRelogio = setInterval( function tempo(){

    let horarioAtual = new Date();
    let horaMinSeg = horarioAtual.toLocaleTimeString();
    horario.textContent = horaMinSeg;


    let data = new Date();
    let diaMesAno = data.toLocaleDateString();
    dataSpan.textContent = diaMesAno;
});

function abrirSobre(){
    iframeClinica.src = "clinicaSobre.html"
}
function abrirInicio(){
    iframeClinica.src = "clinicaVideo.html"
}
function abrirContato(){
    iframeClinica.src = "clinicaContato.html"
}
function abrirAgendamento(){
    iframeClinica.src = "clinicaAgendamento.html"
}
function abrirProfissionais(){
    iframeClinica.src = "clinicaProfissionais.html"
}