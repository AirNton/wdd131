const themeSwitch = document.getElementById("theme-switch");
const logo = document.getElementById("logo");

function changeTheme() {
    if (themeSwitch.value === "dark") {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        logo.src = "evil_byui.png";
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        logo.src = "byui-logo_blue.webp";
    }
}

themeSwitch.addEventListener("change", changeTheme);