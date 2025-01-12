// Tab switching logic
console.log("External Script Connected!!!")


// const tabs = document.querySelectorAll('#round-trip-tab, #one-way-tab, #hourly-tab, #airport-tab');
// const formContainer = document.getElementById('form-container-round-trip');
// const mapContainer = document.getElementById('map-container');

// tabs.forEach(tab => {
//     tab.addEventListener('click', (event) => {
//         // Update tab styles
//         tabs.forEach(t => t.classList.remove('text-teal-600', 'font-semibold'));
//         event.target.classList.add('text-teal-600', 'font-semibold');

//         // Change content based on tab
//         if (event.target.id === 'round-trip-tab') {
//             formContainer.innerHTML = '`<p class="text-center">Form for Round Trip goes here.</p>`';
//             mapContainer.innerHTML = `<span class="text-gray-600">Map for Round Trip will be displayed here.</span>`;
//         } else if (event.target.id === 'one-way-tab') {
//             formContainer.innerHTML = `<p class="text-center">Form for One Way goes here.</p>`;
//             mapContainer.innerHTML = `<span class="text-gray-600">Map for One Way will be displayed here.</span>`;
//         } else if (event.target.id === 'hourly-tab') {
//             formContainer.innerHTML = `<p class="text-center">Form for Hourly goes here.</p>`;
//             mapContainer.innerHTML = `<span class="text-gray-600">Map for Hourly will be displayed here.</span>`;
//         } else if (event.target.id === 'airport-tab') {
//             formContainer.innerHTML = `<p class="text-center">Form for Airport Pick/Drop goes here.</p>`;
//             mapContainer.innerHTML = `<span class="text-gray-600">Map for Airport Pick/Drop will be displayed here.</span>`;
//         }
//     });
// });


// Tab switching logic
const tabs = document.querySelectorAll('#round-trip-tab, #one-way-tab, #hourly-tab, #airport-tab');
const containers = {
    'round-trip-tab': document.getElementById('form-container-round-trip'),
    'one-way-tab': document.getElementById('form-container-one-way'),
    'hourly-tab': document.getElementById('form-container-hourly'),
    'airport-tab': document.getElementById('form-container-airport'),
};

tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        // Update tab styles
        tabs.forEach(t => t.classList.remove('text-teal-600', 'font-semibold', 'border-b-4', 'border-blue-900'));
        event.target.classList.add('text-teal-600', 'font-semibold', 'border-b-4', 'border-blue-900');

        // Show the corresponding container and hide others
        Object.keys(containers).forEach(key => {
            if (key === event.target.id) {
                containers[key].classList.remove('hidden'); // Show the corresponding container
            } else {
                containers[key].classList.add('hidden'); // Hide other containers
            }
        });
    });
});


// Function to toggle the dropdown
function toggleDropdown(id) {
    const dropdown = document.getElementById(`${id}-options`);
    dropdown.classList.toggle('hidden');
}

// Function to filter options
function filterOptions(id) {
    const input = document.getElementById(id).value.toLowerCase();
    const options = document.querySelectorAll(`#${id}-options li`);
    options.forEach(option => {
        const text = option.textContent.toLowerCase();
        option.style.display = text.includes(input) ? 'block' : 'none';
    });
}

// Function to select an option
function selectOption(id, value) {
    const input = document.getElementById(id);
    input.value = value;
    toggleDropdown(id); // Close dropdown
}


// Close dropdown if clicked outside
document.addEventListener('click', (event) => {
    const pickupDropdown = document.getElementById('pickup-options');
    const dropoffDropdown = document.getElementById('dropoff-options');
    if (!event.target.closest('#pickup') && !event.target.closest('#pickup-options')) {
        pickupDropdown.classList.add('hidden');
    }
    if (!event.target.closest('#dropoff') && !event.target.closest('#dropoff-options')) {
        dropoffDropdown.classList.add('hidden');
    }
});



// to make the continue where you left card horizontally scrollable 
function scrollHorizontally(event) {
    const container = event.currentTarget;
    event.preventDefault();
    container.scrollLeft += event.deltaY;
}

const scrollableBanner = document.getElementById("scrollable-banner");

let scrollInterval = setInterval(() => {
    const scrollAmount = scrollableBanner.offsetWidth;
    if (scrollableBanner.scrollLeft + scrollAmount >= scrollableBanner.scrollWidth) {
        // Reset to the beginning when at the end
        scrollableBanner.scrollTo({ left: 0, behavior: "smooth" });
    } else {
        // Scroll to the next section
        scrollableBanner.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
}, 5000);

// Pause auto-scroll on hover
scrollableBanner.addEventListener("mouseover", () => clearInterval(scrollInterval));

// Resume auto-scroll when not hovering
scrollableBanner.addEventListener("mouseleave", () => {
    scrollInterval = setInterval(() => {
        const scrollAmount = scrollableBanner.offsetWidth;
        if (scrollableBanner.scrollLeft + scrollAmount >= scrollableBanner.scrollWidth) {
            scrollableBanner.scrollTo({ left: 0, behavior: "smooth" });
        } else {
            scrollableBanner.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    }, 5000);
});



