console.log("Is the rental script connected?")
function scrollHorizontally(event) {
    event.preventDefault();
    const container = event.currentTarget;
    container.scrollLeft += event.deltaY;
}



