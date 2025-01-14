console.log("Is the rental script connected?")
function scrollHorizontally(event) {
    event.preventDefault();
    const container = event.currentTarget;
    container.scrollLeft += event.deltaY;
}



// function toggleInfo() {
//     const infoDiv = document.getElementById("additional-info");
//     if (infoDiv.classList.contains("hidden")) {
//         infoDiv.classList.remove("hidden");
//     } else {
//         infoDiv.classList.add("hidden");
//     }
// }

function toggleInfo(id) {
    const infoDiv = document.getElementById(id);
    if (infoDiv.classList.contains("hidden")) {
        infoDiv.classList.remove("hidden");
    } else {
        infoDiv.classList.add("hidden");
    }
}


function updateMainImage(thumbnail) {
    // Get the src of the clicked thumbnail
    const newImageSrc = thumbnail.src;

    // Update the main image src
    document.getElementById("main-image").src = newImageSrc;
}
