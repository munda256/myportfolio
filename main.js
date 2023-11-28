// Select all progress bars
const progressBars = document.querySelectorAll('.progress');

// Function to animate progress bars
function fillProgressBars() {
  progressBars.forEach(bar => {
    const width = bar.parentElement.offsetWidth; // Get the width of the parent element
    const progressWidth = parseFloat(bar.style.width) || 0; // Get the current width or default to 0

    // Animate the progress bar width from 0 to the specified width over a duration of 2 seconds
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = width / (duration / 10); // Calculate the increment based on duration

    function animate() {
      if (start < width) {
        start += increment;
        bar.style.width = `${Math.min(start, progressWidth + increment)}px`; // Update the progress width
        requestAnimationFrame(animate);
      }
    }

    animate();
  });
}
  