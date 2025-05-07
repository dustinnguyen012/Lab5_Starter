// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  const jsConfetti = new JSConfetti();

  // Change horn image and audio when dropdown selection changes
  hornSelect.addEventListener('change', () => {
    const hornType = hornSelect.value;

    // Update image and audio based on selection
    hornImage.src = `assets/images/${hornType}.svg`;
    hornAudio.src = `assets/audio/${hornType}.mp3`;
  });

  // Update volume and icon when slider changes
  volumeSlider.addEventListener('input', () => {
    const volumeValue = volumeSlider.value;
    hornAudio.volume = volumeValue / 100;

    // Update volume icon based on range
    if (volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // Play sound and trigger confetti if party horn
  playButton.addEventListener('click', () => {
    hornAudio.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}