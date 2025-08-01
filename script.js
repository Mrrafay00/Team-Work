document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll-to-Top Button Functionality ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show/hide the button based on scroll position
    window.addEventListener('scroll', () => {
        // If the user has scrolled down more than 300 pixels, show the button
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            // Otherwise, hide the button
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top when the button is clicked
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,          // Scroll to the very top of the page
                behavior: 'smooth' // Smooth scrolling animation
            });
        });
    }

  
