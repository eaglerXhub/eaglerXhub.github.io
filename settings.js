// Light Mode: Apply if saved in localStorage
if (localStorage.getItem("lightMode") === "enabled") {
    document.body.classList.add("light-mode");
}

// Video Background: Apply if saved in localStorage
const videoContainer = document.getElementById("video-container");
if (videoContainer && localStorage.getItem("videoDisabled") === "true") {
    videoContainer.style.opacity = "0";
}

// Font Size: Apply if saved in localStorage
const fontSize = localStorage.getItem("fontSize");
if (fontSize) {
    document.body.style.fontSize = fontSize;
}
