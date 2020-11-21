class Controller {
    BuscarUsuario(nomeDeUsuario){
           let model = new Model
           model.LocalizarUsuario (nomeDeUsuario) 

           let viewer = new Viewer
           viewer.MostrarUsuario (model)
    }

    BuscarRepositorio (nomeDeUsuario) {
        let model = new Model
           model.LocalizarRepositorio (nomeDeUsuario) 

           let viewer = new Viewer
           viewer.MostrarRepositorio (model)
    }
}
