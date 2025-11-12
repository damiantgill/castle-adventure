// Page navigation functionality
let currentPage = 1;

function showPage(pageNumber) {
    // Remove active class from all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Add active class to selected page
    const targetPage = document.getElementById(`page${pageNumber}`);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageNumber;
        
        // Log for debugging
        console.log(`Showing page ${pageNumber}`);
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        // Go to next page
        const nextPage = currentPage < 3 ? currentPage + 1 : 1;
        showPage(nextPage);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        // Go to previous page
        const prevPage = currentPage > 1 ? currentPage - 1 : 3;
        showPage(prevPage);
    }
});

// Initialize - show page 1 on load
window.addEventListener('DOMContentLoaded', function() {
    showPage(1);
    console.log('Pages initialized. Use arrow keys or navigation buttons to switch pages.');
});

// Optional: Add swipe gestures for touch devices
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - go to next page
        const nextPage = currentPage < 3 ? currentPage + 1 : 1;
        showPage(nextPage);
    }
    
    if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - go to previous page
        const prevPage = currentPage > 1 ? currentPage - 1 : 3;
        showPage(prevPage);
    }
}
