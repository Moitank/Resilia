

var foto = document.getElementById('img'); 

var h2 = document.querySelector('h2'); 

var botaosim = document.getElementById('botaosim');

var botaonao = document.getElementById('botaonao');

var final = document.getElementById('final');


function sim () {
      
    h2.innerHTML = 'Deseja acorda-la?'
    foto.innerHTML= '<img class="emburrada" src="img/dormindo.jpeg">' // Define a nova foto selecionada
    botaosim.onclick = opcao2
    botaonao.onclick = opcao3
    
    

}

function nao () {
    
    h2.innerHTML = 'Gostaria de colocar ela para dormir?'
    foto.innerHTML = '<img class="emburrada" src="img/sorriso1.jpeg">'
    botaosim.onclick = opcao3
    botaonao.onclick = opcao4
    





}

function opcao2 () {

    h2.innerHTML = 'Você acordou a Helena, GAME OVER'
    final.innerHTML = '<img class="emburrada" src="img/chorando.jpeg">'



}

function opcao3 () {

    h2.innerHTML = 'Heleninha Agradece'
    final.innerHTML = '<img class="emburrada" src="img/sorriso2.jpeg">'


}

function opcao4 () {
    h2.innerHTML = 'Heleninha ficou zangada'
    final.innerHTML = '<img class="emburrada" src="img/emburrada.jpeg">'

}

 



