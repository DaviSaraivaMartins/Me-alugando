// Array de classes para as imagens de fundo
var backgroundClasses = ["background1", "background2", "background3"];
var currentIndex = 0;

function alternarImagemDeFundo() {
    var container = document.querySelector('.container');

    // Remove a classe atual do contêiner
    container.classList.remove(backgroundClasses[currentIndex]);

    // Incrementa o índice e volta ao início do array se necessário
    currentIndex++;
    if (currentIndex >= backgroundClasses.length) {
        currentIndex = 0;
    }

    // Adiciona a nova classe ao contêiner
    container.classList.add(backgroundClasses[currentIndex]);

    // Chama recursivamente a função alternarImagemDeFundo após 5 segundos
    setTimeout(alternarImagemDeFundo, 5000); // Tempo em milissegundos (5 segundos)
}

// Inicia a alternância automática da imagem de fundo
alternarImagemDeFundo();
