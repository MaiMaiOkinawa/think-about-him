const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation(); // It initiates the function

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';  // 'breathTime' runs out

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);  // totalTime / 5
  }, breatheTime); // (totalTime / 5) * 2 
}

setInterval(breathAnimation, totalTime); // It runs every 'totalTime' 