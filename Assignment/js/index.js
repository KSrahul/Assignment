var focusInput = document.querySelector(".inputNumber");
var borderInput = document.querySelector(".inputBorder");
focusInput.addEventListener("focus", function() {
    borderInput.className = "inputBorder border";
})
focusInput.addEventListener("focusout", function() {
    borderInput.className = "inputBorder";
})

// ESC key press for remove select value and outline
document.addEventListener("keyup", function(escPress) {
        if ((borderInput.className == "inputBorder border") && (escPress.keyCode == 27)) {
            borderInput.className = "inputBorder";
            focusInput.blur()
        }
    })
    // ESC key press for remove select value and outline

// For Loader
setTimeout(function() {
        if (document.readyState == "complete") {
            document.querySelector(".mainContainer").className = "mainContainer loaded";
            document.querySelector(".loading").className = "loading remove";
        } else {

        }
    }, 2000)
    // For Loader
if (window.chrome && window.chrome.webstore) {

} else {
    alert("For the task, maybe for now you will be able see few issues on this browser, but it's perfect on Chrome browser")
}