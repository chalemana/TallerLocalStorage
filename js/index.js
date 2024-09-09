document.addEventListener("DOMContentLoaded", (event) => {
    const botón = document.getElementById("buttonText");
    botón.addEventListener("click", () => {
        let texto = document.getElementById("inputText").value;
        localStorage.setItem("texto", texto);
    });

});
