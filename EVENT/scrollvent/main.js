window.addEventListener("scroll", function() {
    console.log("scroll")
})

const button = document.getElementById("button")

window.addEventListener("scroll", function() {
    if(document.documentElement.scrollTop > 300) {
        button.style.display = "block"
    }
    else {
        button.style.display = "none"
    }
})