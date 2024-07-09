function setTheme(mode) {
    localStorage.setItem("theme-storage", mode);
}


function toggleTheme() {
    if (localStorage.getItem("theme-storage") === "light") {
        setTheme("dark");
        updateItemToggleTheme();
    } else if (localStorage.getItem("theme-storage") === "dark") {
        setTheme("light");
        updateItemToggleTheme();
    }
}

function updateItemToggleTheme() {
    let mode = getSavedTheme();
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
    if (sunIcon && moonIcon) {
        sunIcon.style.display = (mode === "dark") ? "inline-block" : "none";
        moonIcon.style.display = (mode === "light") ? "inline-block" : "none";
    }

    let htmlElement = document.querySelector("html");
    if (mode === "dark") {
        htmlElement.classList.remove("light")
        htmlElement.classList.add("dark")
    } else if (mode === "light") {
        htmlElement.classList.remove("dark")
        htmlElement.classList.add("light")
    }
}

function getSavedTheme() {
    let currentTheme = localStorage.getItem("theme-storage");
    if(!currentTheme) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            currentTheme = "dark";
        } else {
            currentTheme = "light";
        }
    }
    console.log(currentTheme);
    return currentTheme;
}
updateItemToggleTheme();
