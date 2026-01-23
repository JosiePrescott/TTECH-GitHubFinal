document.getElementById("imageUpload").addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.style.maxWidth = "100px";
    img.style.display = "block";

    const output = document.getElementById("output");
    output.innerHTML = "";
    output.appendChild(img);

    img.style.margin = "0 auto";
})


const colors =["#e3f2f9", "#d7f6ec", "#f2f3d7","#e1fce4", "#f7e5be", "#f1d8ed", "#f4e3e3"]

document.addEventListener("DOMContentLoaded", () => {
    const savedColor = localStorage.getItem("color");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor
    }
});
document.getElementById("btn")?.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const newColor = colors[randomIndex];
    document.body.style.backgroundColor = newColor;
    localStorage.setItem("color", newColor);
});
