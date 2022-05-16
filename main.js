// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector('.hidden')
const errorModal = document.querySelector("#modal")

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM CONTENT HAS LOADED")
  errorModal.classList.add('hidden')

clickListener()

})

function hideError(){
  errorModal.classList.add('hidden')
}
function clickListener(){
  document.addEventListener('click', (event) => {

    if(event.target.classList[0] === 'like-glyph'){

      mimicServerCall()
      .then((response) => {
        const activated = event.target.classList.contains("activated-heart");
        if(activated){
          event.target.classList.remove("activated-heart")
          event.target.innerHTML = EMPTY_HEART
        }else{
          event.target.classList.add("activated-heart")
          event.target.innerHTML = FULL_HEART
        }
        activated;
      })
      .catch((error) => {
        console.log(error);
        errorModal.remove("hidden");
        setTimeout(() => {
          hideError()
         }, 3000);
      });
    }
  });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
