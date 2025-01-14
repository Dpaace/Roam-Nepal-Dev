// Tab switching logic
console.log("External Script Connected!!!")


// Initialize Flatpickr for Pick-Up Date/Time
flatpickr("#pickup-date", {
    enableTime: true,
    noCalendar: false,
    time_24hr: false,
    dateFormat: "Y-m-d H:i K",
    minuteIncrement: 30,
    minDate: "today",
    position: "auto center",
});

// Initialize Flatpickr for Drop-Off Date/Time
flatpickr("#dropoff-date", {
    enableTime: true,
    noCalendar: false,
    time_24hr: false,
    dateFormat: "Y-m-d H:i K",
    minuteIncrement: 30,
    minDate: "today",
    position: "auto center",

});

// // Get the button and the container
// const addStopButton = document.getElementById("add-stop-btn");
// const stopContainer = document.getElementById("stop-container");

// // Add click event listener to the button
// addStopButton.addEventListener("click", () => {

//     event.preventDefault();
//     // Create a new input field
//     const newInput = document.createElement("input");
//     newInput.type = "text";
//     newInput.placeholder = "Enter stop";
//     newInput.className = "w-full border border-gray-300 rounded px-4 py-2 mt-2";

//     // Append the new input field to the container
//     stopContainer.appendChild(newInput);
// });


// Get the button and the container
const addStopButton = document.getElementById("add-stop-btn");
const stopContainer = document.getElementById("stop-container");

// Set the maximum number of inputs allowed
let maxInputs = 1;

addStopButton.addEventListener("click", (event) => {
    // Prevent default button behavior
    event.preventDefault();

    stopContainer.classList.remove('hidden')
    // Check the current number of inputs in the container
    const existingInputs = stopContainer.querySelectorAll("input").length;

    // Add an input field only if the current number is less than the allowed maximum
    if (existingInputs < maxInputs) {
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.placeholder = "Enter stop";
        newInput.className = "w-full border border-black rounded px-4 py-2";

        // Append the new input field to the container
        stopContainer.appendChild(newInput);
    }
});




// // Initialize Flatpickr for Pick-Up Date/Time
// flatpickr("#pickup-date", {
//     enableTime: true,
//     dateFormat: "Y-m-d H:i", // Format for the date and time
//     time_24hr: true,         // Use 24-hour format
//     minDate: "today",        // Prevent selecting past dates
// });

// // Initialize Flatpickr for Drop-Off Date/Time
// flatpickr("#dropoff-date", {
//     enableTime: true,
//     dateFormat: "Y-m-d H:i", // Format for the date and time
//     time_24hr: true,
//     minDate: "today",
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
        tabs.forEach(t => t.classList.remove('text-teal-600', 'font-semibold', 'border-b-4', 'border-[#03677E]'));
        event.target.classList.add('text-teal-600', 'font-semibold', 'border-b-4', 'border-[#03677E]');

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
}, 3000); // 3 seconds wait time

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



// Function to animate numbers
function animateNumbers() {
    const counters = document.querySelectorAll("[data-target]");
    counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        const increment = target / 100; // Adjust the speed by dividing the target
        let count = 0;

        function updateCounter() {
            if (count < target) {
                count += increment;
                counter.textContent = Math.floor(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target; // Ensure it ends at the exact target
            }
        }

        updateCounter();
    });
}

// Trigger animation when the reach section becomes visible
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll("[data-target]");

    const animateNumbers = () => {
        counters.forEach((counter) => {
            const updateCounter = () => {
                const target = +counter.getAttribute("data-target");
                const current = +counter.innerText;

                const increment = Math.ceil(target / 100); // Adjust the speed

                if (current < target) {
                    counter.innerText = current + increment;
                    setTimeout(updateCounter, 70); // Adjust the speed delay
                } else {
                    counter.innerText = target; // Ensure it ends at the target
                }
            };

            updateCounter();
        });
    };

    // Observe when the section is in the viewport
    const section = document.querySelector("#our-reach");
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    observer.disconnect(); // Run only once
                }
            });
        },
        { threshold: 0.8 } // Trigger when 50% of the section is visible
    );

    observer.observe(section);
});


const testimonials = [
    {
        text: "Absolutely love this app! Booking bus tickets across Nepal has never been easier. Smooth transactions and timely updates make my travel planning a breeze. Highly recommended!",
        author: "-- Harris Magar, CEO of XYZ",
    },
    {
        text: "This service has been a lifesaver for our family trips. The convenience and ease of booking are unparalleled. The support team is fantastic too!",
        author: "-- Sarita Sharma, Travel Enthusiast",
    },
    {
        text: "I highly recommend this platform to anyone looking to travel within Nepal. It has never been this easy to plan a trip before!",
        author: "-- Prakash Thapa, Business Professional",
    },
];


// Testimonials Section

let currentTestimonialIndex = 0;

const testimonialText = document.getElementById("testimonial-text");
const testimonialAuthor = document.getElementById("testimonial-author");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateTestimonial(index) {
    testimonialText.textContent = testimonials[index].text;
    testimonialAuthor.textContent = testimonials[index].author;
}

prevBtn.addEventListener("click", () => {
    currentTestimonialIndex =
        (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentTestimonialIndex);
});

nextBtn.addEventListener("click", () => {
    currentTestimonialIndex =
        (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonial(currentTestimonialIndex);
});

// Initialize with the first testimonial
updateTestimonial(currentTestimonialIndex);




