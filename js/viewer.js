let images = []
let current = 0

function initViewer(imglist) {
    images = imglist
}

function openViewer(index) {
    current = index
    document.getElementById("imgviewer").src = images[current]
    document.getElementById("viewer").style.display = "flex"
    if (current == images.length - 1) {
        document.getElementById("next").disabled = true
    }
    if (current == 0) {
        document.getElementById("prev").disabled = true
    }
}

function next() {
    current += 1
    document.getElementById("imgviewer").src = images[current]
    if (current == images.length - 1) {
        document.getElementById("next").disabled = true
    }
    document.getElementById("prev").disabled = false
}

function prev() {
    current -= 1
    document.getElementById("imgviewer").src = images[current]
    if (current == 0) {
        document.getElementById("prev").disabled = true
    }
    document.getElementById("next").disabled = false
}

function closeViewer() {
    document.getElementById("viewer").style.display = "none"
    document.getElementById("prev").disabled = false
    document.getElementById("next").disabled = false
}