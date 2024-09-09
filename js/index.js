document.addEventListener("DOMContentLoaded", (e) => {
    let button = document.getElementById("buttonText");
    button.addEventListener("click", () => {
        var text = document.getElementById("inputText").value;
        localStorage.setItem("datos", text);
    });

});