// Wait for DOM to be fully loaded before executing script
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const shape = document.getElementById('shape');
    const spinBtn = document.getElementById('spin-btn');
    
    // Add click event listener to button
    spinBtn.addEventListener('click', function() {
        // Add spin class to trigger CSS animation
        shape.classList.add('spin');
    });
    
    // Listen for when the transition ends
    shape.addEventListener('transitionend', function() {
        // Remove spin class to reset appearance
        shape.classList.remove('spin');
        // Force reflow to ensure animation can be retriggered
        void shape.offsetWidth;
    });
});