// We use the Objects below to control toggling like / unlike status

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red": "",
  "": "red"
};

// STEP 1: Select all elements with the class 'like-glyph' and store them in articleHearts.
// This allows us to target the heart icons and make them interactive.
const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage) {
      // STEP 2: Server communication simulation is successful.
      // Now update the DOM by toggling the heart symbol and color.
      alert("You notified the server!");
      alert(serverMessage); // Display server message
      heart.innerText = glyphStates[heart.innerText]; // Toggle heart symbol
      heart.style.color = colorStates[heart.style.color]; // Toggle heart color
    })
    .catch(function(error) {
      alert("Something went wrong!"); // Alert user if server call fails
    });
}

// STEP 3: Add an event listener to each heart icon.
// This ensures that clicking on a heart triggers the likeCallback function.
for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

// STEP 4: All required changes have been made.
// The Simple Liker app should now function correctly, allowing users to like/unlike posts.

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
