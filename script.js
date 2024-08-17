const lightModeBtn = document.getElementById("light-mode");
const darkModeBtn = document.getElementById("dark-mode");
const hyperModeBtn = document.getElementById("hyper-mode");
const html = document.querySelector("html");
const mainPagePic = document.getElementById("main-page-pic");


function changeColorMode(mode) {
    if (mode === 'light') {
        html.style.setProperty('--background', "#c1e1d3");
        html.style.setProperty('--light', "#89c59a");
        html.style.setProperty('--accent', "#0fa6d0");
        html.style.setProperty('--text1', "#328f73");
        html.style.setProperty('--text2', "black");
        html.style.setProperty('--top1', "#bbfff5");
        html.style.setProperty('--top2', "#26a390");
        html.style.setProperty('--border', "black");
        html.style.setProperty('--hover', "#00000061");
        html.style.backgroundImage = "url('https://i.ibb.co/M7WhPv9/Screenshot-2024-08-07-130530.png')";
        mainPagePic.src = "https://i.ibb.co/5WnZRhx/roki2.png";
    } else if (mode === 'dark') {
        html.style.setProperty('--background', "#032922");
        html.style.setProperty('--light', "#063b31");
        html.style.setProperty('--accent', "#03a9fc");
        html.style.setProperty('--text1', "#afe1ed");
        html.style.setProperty('--text2', "#c1e1d3");
        html.style.setProperty('--top1', "#0dd6a6");
        html.style.setProperty('--top2', "#0f735b");
        html.style.setProperty('--border', "#ffffff");
        html.style.setProperty('--hover', "#ffffff61");
        html.style.backgroundImage = "url('https://i.ibb.co/YTbN05R/Screenshot-2024-08-07-130603.png')";
        mainPagePic.src = "https://i.ibb.co/5WnZRhx/roki2.png";
    } else { // hypersaturated
        html.style.setProperty('--background', "#00ff99");
        html.style.setProperty('--light', "#ff4040");
        html.style.setProperty('--accent', "#00ffff");
        html.style.setProperty('--text1', "#0f00de");
        html.style.setProperty('--text2', "#0f00de");
        html.style.setProperty('--top1', "#ff009d");
        html.style.setProperty('--top2', "#c300ff");
        html.style.setProperty('--border', "#ddff00");
        html.style.setProperty('--hover', "#ff770061");
        html.style.backgroundImage = "url('https://i.ibb.co/6N0fvYd/Screenshot-2024-08-07-130745.png')";
        mainPagePic.src = "https://i.ibb.co/c3r0hCn/roki-saturated.png";
    }
}

lightModeBtn.addEventListener("click", () => {
    changeColorMode('light')
});
darkModeBtn.addEventListener("click", () => {
    changeColorMode('dark')
});
hyperModeBtn.addEventListener("click", () => {
    changeColorMode('hyper')
});

changeColorMode('dark')