let botao = document.querySelector("#botao");
let body = document.querySelector("body")




let controller = new Controller

botao.addEventListener('click' , function () {

    let pesquisa = document.querySelector("#pesquisa");

    let nomeDeUsuario = pesquisa.value
    
   
    body.innerHTML = 
    ` <section id="container">
    <h2 class="titulo">
        Git API
    </h2>

<main>
    <div id="perfil">
    <h2 class="titulo">
        Perfil
    </h2>
        <p id="nome">Nome</p>
        <p id="username">Usuario</p>
    </div>


    <div id="repositorio">
        <header>
            <h2 class="titulo">Repositorios</h2>
        </header>

        <div id="repoindividual">
            
        </div>

    </div>
    
    
</main>
</section>`

    controller.BuscarUsuario(nomeDeUsuario);
    controller.BuscarRepositorio(nomeDeUsuario);


})


