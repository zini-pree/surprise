// Get the selector element
const resolutionSelector = document.getElementById('resolutionSelector');

// Get the image container and resolution image elements
const imageContainer = document.getElementById('imageContainer');
const Image = document.getElementById('Image');

// Add event listener to handle selection change
resolutionSelector.addEventListener('change', function() {
  // Get the selected resolution
  const selectedResolution = resolutionSelector.value;
  
  // Set image source based on selected resolution
  switch(selectedResolution) {
    case '144p':
      Image.src = 'moon.jpg';
      break;
    case '240p':
      Image.src = 'moon1.jpg';
      break;
    case '480p':
      Image.src = 'moon2.jpg';
      break;
    case '720p':
      Image.src = 'moon3.jpg';
      break;
    case '1080p':
      Image.src = 'moon4.jpg';
      break;
    default:
      Image.src = ''; // Set default source if resolution is not recognized
  }
});
