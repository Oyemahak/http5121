window.onload = function() {
    var sun = document.getElementById("sun");
    var frame = document.getElementById("frame");
    var toggleBtn = document.getElementById("toggle-btn");
  
    var animate = true;
  
    toggleBtn.onclick = function() {
      if (animate) {
        sun.style.animationPlayState = "paused";
        frame.style.animationPlayState = "paused";
        toggleBtn.textContent = "Play";
      } else {
        sun.style.animationPlayState = "running";
        frame.style.animationPlayState = "running";
        toggleBtn.textContent = "Pause";
      }
      animate = !animate;
    };
};