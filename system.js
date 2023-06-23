var progress = document.querySelector('.progress');
var regress = document.querySelector('.regress');
var text = document.querySelector('.text');
var progressBar = document.getElementById('progress-bar');
var direction = 1; // 1 for progress, -1 for regress
var progressInterval = 500; // Time taken to fill 1% of the progress bar in milliseconds
var animationInterval = 10; // Animation interval in milliseconds

function animateProgress() {
    var width = parseInt(progress.style.width) || 0;

    if (width >= 2500) {
        direction = -5; // switch to regress
        text.textContent = "Regressing...";
    } else if (width <= 0) {
        direction = -5; // switch to progress
        text.textContent = "Progressing...";
     }

        width += direction;
        progress.style.width = width + 'px';
        regress.style.left = width + 'px';

        setTimeout(animateProgress, animationInterval);
    }

// Calculate the progress interval based on animationInterval and progress bar width
progressInterval = (animationInterval * 100) / progressInterval;

// Adjust the animationInterval to achieve faster green bar fill
animationInterval /= progressInterval;

animateProgress();