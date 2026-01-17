const ytVideos = [
  "https://www.youtube.com/embed/yAG3JuIQNj0?si=038pVYzD8V_jcOvc",
  "https://www.youtube.com/embed/EXyS7tzDTdQ?si=ZX-aYTPVn13o6hKR",
  "https://www.youtube.com/embed/cqr_s9rPPro?si=HFmK-YK6Q0hWC3Un"
];

let currentIndex = 0;
const iframe = document.getElementById("ytVideo");
const nextBtn = document.getElementById("nextVideo");
const prevBtn = document.getElementById("prevVideo");

// Function to update iframe and arrows
function updateVideo() {
  iframe.src = ytVideos[currentIndex];

  // First video → hide prev
  if (currentIndex === 0) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "block";
  }
  // Last video → hide next
  else if (currentIndex === ytVideos.length - 1) {
    nextBtn.style.display = "none";
    prevBtn.style.display = "block";
  }
  // Middle videos → show both
  else {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  }
}

// Initial setup
updateVideo();

// Button events
nextBtn.addEventListener("click", () => {
  if (currentIndex < ytVideos.length - 1) {
    currentIndex++;
    updateVideo();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateVideo();
  }
});
