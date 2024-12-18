document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "Aniversario.jpeg",
        "01-01-VLM.png",
        "04-01-SAM.png",
        "05-01-VLM.png",
        "06-01-VLM.png",
        "09-01-NRN.png",
        "10-01-TTP.jpeg",
        "13-01-SAM.png",
        "13-01-Diretoria.png",
        "13-01.png",
        "17-01-SNE.png",
        "18-01-TTP.png",
        "19-01-VLM.png",
        "19-01.png",
        "20-01-MAP.png",
        "21-01.png",
        "22-01-SNE.png",
        "22-01.png",
        "26-01.png",
        // Adicione mais imagens aqui
    ];

    let currentIndex = 0;
    const centeredImage = document.querySelector(".centered-image");

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const imageUrl = images[currentIndex];
        centeredImage.src = imageUrl;
    }

    // Inicializa a troca de imagem a cada 5 segundos
    setInterval(changeImage, 5000);

    // Carrega a primeira imagem
    changeImage();
});
