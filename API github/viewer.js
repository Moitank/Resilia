class Viewer {
    MostrarUsuario(dados) {
        let nome = document.querySelector("#nome")
        nome.innerText = dados.getNome()

        let login = document.querySelector("#username")
        login.innerText = dados.getLogin()
    }

    MostrarRepositorio(dados) {

        let repositorios = dados.repositorio
        for(let repo of repositorios) {

            let repoind = document.querySelector("#repoindividual")
            let card = document.createElement("div")
            card.classList.add("card")
            repoind.appendChild(card)
    
            let link = document.createElement("a")
            link.classList.add("link")
            link.innerText = repo.name
            link.href = repo.html_url
            card.appendChild(link)
    
    
            let paragrafo = document.createElement("p")
            paragrafo.classList.add("paragrafo")
            paragrafo.innerText = repo.language
            card.appendChild(paragrafo)
        }

        
        
    }

}
