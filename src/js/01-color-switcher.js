var startButton = document.querySelector(".data-start");
var stopButton = document.querySelector(".data-stop");
var intervalId;

startButton.addEventListener('click', function () {
  startButton.disabled = true;
  stopButton.disabled = false;
  intervalId = setInterval(function () {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 100);
});

stopButton.addEventListener('click', function () {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(intervalId);
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }
