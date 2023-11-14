
      var acc = document.getElementsByClassName("accordion");
      var i;
      
      for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
         this.classList.toggle("active");
         var panel = this.nextElementSibling;
         if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
         } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
         } 
      });
      }
  

      document.addEventListener("DOMContentLoaded", function () {
                 // Add an event listener to the sign-in button
                 const signinButton = document.getElementById("signin-button");

                 signinButton.addEventListener("click", function () {

                 var registrationPageURL = "register"; // Replace with the actual URL

                 // Redirect to the registration page
                 window.location.href = registrationPageURL;
                 });
             });

       document.addEventListener("DOMContentLoaded", function () {
                 // Add an event listener to the login button
                 const signinButton = document.getElementById("login");

                 signinButton.addEventListener("click", function () {

                 var loginPageURL = "login"; // Replace with the actual URL

                 // Redirect to the registration page
                 window.location.href = loginPageURL;
                 });
             });

               document.addEventListener("DOMContentLoaded", function () {
                   // Try to retrieve the element by its ID
                   const logoutButton = document.getElementById("logout");

                   // Check if the element was found
                   if (logoutButton) {
                       // Add an event listener to the found element
                       logoutButton.addEventListener("click", function () {
                           var logoutPageURL = "logout"; // Replace with the actual URL
                           window.location.href = logoutPageURL;
                       });
                   }
               });


      document.addEventListener("DOMContentLoaded", function () {
      const generateButton = document.getElementById("generateButton");
      const searchInput = document.getElementById("searchInput");

      // Add an event listener for mouseenter on the input element
      searchInput.addEventListener("mouseenter", function () {
         if (searchInput.value.trim() === "") {
             generateButton.style.cursor = "not-allowed";
         }
      });
      });


      function checkInputLength(input) {
         var warningElement = document.getElementById("inputWarning");
         var textDisplay = document.getElementById("textDisplay");
         if (input.value.length > 400) {
             input.value = input.value.slice(0, 400);
             warningElement.textContent = "Text exceeds 400 characters limit.";
         } else {
             warningElement.textContent = "";
         }
         textDisplay.textContent = input.value;
      }

      function toggleGenerateButton(input) {
         const generateButton = document.getElementById("generateButton");
         if (input.value.trim() === "") {
             generateButton.disabled = true;
            //  generateButton.style.backgroundColor = "#f8f9fa";
             generateButton.style.cursor = "not-allowed";
         } else {
             generateButton.disabled = false;
            //  generateButton.style.backgroundColor = "#f8f9fa";
             generateButton.style.cursor = "pointer";
         }
      }
      // Define an array of YouTube video IDs (replace with actual video IDs)
      //  const youtubeVideoIds = {{ youtubevideos | tojson | safe }};

      // Function to create and append a YouTube video player
      function createYouTubeVideoPlayer(videoId) {
      const videoContainer = document.createElement('div');
      videoContainer.classList.add('video-container');

      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;

      videoContainer.appendChild(iframe);
      document.getElementById('videoGrid').appendChild(videoContainer);

      }

      // Function to render the YouTube videos in the grid
      function renderYouTubeVideoGrid() {
      if (youtubeVideoIds.length > 0) {
         const newParagraph = document.createElement('p');

        // Set the text content of the paragraph
        newParagraph.textContent = "Welcome back, Here are your videos!";

        // Get the target element where you want to append the paragraph
        var targetElement = document.getElementById('welcome_msg');

        // Append the new paragraph to the target element
        targetElement.appendChild(newParagraph);
      }
      for (const videoId of youtubeVideoIds) {
      createYouTubeVideoPlayer(videoId);
      }
      }

      // Call the function to render the video grid when the page loads
      window.addEventListener('load', renderYouTubeVideoGrid);
