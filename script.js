function toggleMode() {
  //pegando a tag html
  const html = document.documentElement
  //substituir o background
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver no light mode, adiciona a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de João Victor  sorrindo de óculos escuros com lago ao fundo")
  } else {
    //senão, adiciona a imagem dark
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de João Victor sorrindo, usando óculos")
  }
}
