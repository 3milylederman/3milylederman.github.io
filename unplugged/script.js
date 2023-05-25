$(document).ready(function() {
    // Array of image sources
    var images = [
      "output-onlinegiftools.gif",
      "clock1.png",
      "fish.png",
      "shine-on-i-miss-you.gif",
      "rock.png",
      "snakeapple.png",
      "Atmo_4.gif",
      "flowery.png",
      "rose.png",
      "rip.png",
      "marble_1.gif",
      "flowergreen.png",
      "bones.png"
    ];
  
    var imageContainer = $("#image-container");
  
    // Function to create an image element
    function createImageElement(src) {
      var image = $("<img>").attr("src", src);
      var imageContainer = $("<div>").addClass("col3 width20 topmargin image-container").append(image);
      return imageContainer;
    }
  
    // Function to shuffle the array
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }
  
    // Function to animate image appearance
    function animateImages(images) {
      var delay = 1000; // Delay between each image appearance (in milliseconds)
      var duration = 500; // Animation duration (in milliseconds)
  
      // Iterate through the shuffled images array
      for (var i = 0; i < images.length; i++) {
        // Create the image element
        var imageElement = createImageElement(images[i]);
  
        // Add the image element to the image container
        imageContainer.append(imageElement);
  
        // Apply animation to the image element
        imageElement.hide().fadeIn(duration);
  
        // Delay the appearance of the next image
        delay += 1000;
      }
  
      // Repeat the animation
      setTimeout(function() {
        imageContainer.empty(); // Clear the image container
        animateImages(shuffleArray(images)); // Shuffle the images and start the animation again
      }, delay);
    }
  
    // Start the initial animation
    animateImages(shuffleArray(images));
  });
  