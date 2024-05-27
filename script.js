const headingClick = document.querySelector("h1");
const paragraph = document.querySelector("p");

headingClick.addEventListener("click", () => {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
    
})