document.getElementById("openSidebar").addEventListener("click", function() {
    document.getElementById("buttonSidebar").classList.add("hidden"); // Esconde o botão
    document.getElementById("sidebar").classList.add("open"); // Mostra a sidebar
});

document.getElementById("closeSidebar").addEventListener("click", function() {
    document.getElementById("sidebar").classList.remove("open"); // Esconde a sidebar
    document.getElementById("buttonSidebar").classList.remove("hidden"); // Mostra o botão
});
