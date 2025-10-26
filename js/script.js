console.log("script.js connected!");

const selectedAnswers = {};

document.querySelectorAll('.question-block').forEach((block, index) => {
  const buttons = block.querySelectorAll('.answer-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove selected class from all buttons in this block
      buttons.forEach(b => b.classList.remove('selected'));
      // Add selected class to clicked button
      btn.classList.add('selected');
      // Store answer using question index
      selectedAnswers[index] = {
        category: btn.dataset.answer,
        points: parseInt(btn.dataset.points)
      };
    });
  });
});

function displayResult() {
  let totalPoints = 0;
  Object.values(selectedAnswers).forEach(ans => {
    totalPoints += ans.points;
  });

  let resultText = '';
  if (totalPoints <= 9) {
    resultText = "You're a T-Rex! Loud, Proud, and King of the Cretacious.";
  } else if (totalPoints <= 12) {
    resultText = "You're a Mosasaur! A fast swimmer and a .";
  } else if (totalPoints <= 16) {
    resultText = "You're an Triceratops! Graceful, wise, and in tune with nature.";
  } else {
    resultText = "You're a Velociraptor! Bold, powerful, and fiercely independent.";
  }

  document.getElementById('result-container').textContent = resultText;
}

document.getElementById('result-text').addEventListener('click', displayResult);