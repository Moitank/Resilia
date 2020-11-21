class Model {

    constructor(){
        this.nome = "";
        this.login = "";
        this.repositorio = "";
    }

    LocalizarUsuario(nomeDeUsuario){
        let request = new XMLHttpRequest

        request.addEventListener ('load', () => {
            if (request.status === 200) {
                let dados = JSON.parse(request.responseText)
                this.atualiza(dados)
            } else {
                erro(request.status)
            }
        })
        request.open("GET", `https://api.github.com/users/${nomeDeUsuario}`, false)
        request.send()
    }

    LocalizarRepositorio (nomeDeUsuario) {
        let request = new XMLHttpRequest

        request.addEventListener ('load', () => {
            if (request.status === 200) {
                let dados = JSON.parse(request.responseText)
                this.repositorio = dados;
            }
        })
        request.open("GET", `https://api.github.com/users/${nomeDeUsuario}/repos`, false)
        request.send()
    }

    atualiza(dados) {
        this.nome = dados.name ;
        this.login = dados.login;
    }
        getNome(){
            return this.nome;
        }

        getLogin(){
            return this.login;
        }
}

function erro (numErro) {
    body.innerHTML = ` <section id="container-erro">
    <p>
        ERRO ${numErro}
    </p>
    
    <a href="index.html">tente novamente</a>
</section>`
}