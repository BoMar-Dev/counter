 // VARIABLES----------------------------

 // created elements
 const newPtag = document.createElement("p")
 const newDiv = document.createElement("div");
 
 // Grabbing HTML-Element
 const mainContent = document.querySelector(".main-container")
 const count = document.querySelector(".counting")
 const incrementBtn = document.querySelector(".increment-btn ")
 const setToZero = document.querySelector(".reset-btn")
 const saveBtn = document.querySelector(".save-btn")

 // setting det start value of the counter to zero
 count.innerText = 0

 // 
 

 // assignin classes
 newDiv.className = "savingNumbersDiv";
 newPtag.className = "savingNumbersText"
 
 // appending childs 
 mainContent.appendChild(newDiv);
 newDiv.appendChild(newPtag);
 
//-------------------------------------------------------



// CLICK FUNCTIONS --------------------------------------

 // click function on increment btn
incrementBtn.addEventListener("click", function() {
    
    increaseNumber ()
    
  });



 // click function on reset btn
  setToZero.addEventListener("click", function() {
   
    zero();
  
  });


   // click function on save btn
saveBtn.addEventListener("click", function() {
    
  saveCount();

});
  
//-------------------------------------------------------
  


// FUNCTIONS --------------------------------------------

// function increment
   let counting = 0; 
  function increaseNumber (){
    
    counting += 1;
    count.innerText = counting;
}

// function set increment to zero 
function zero (){
    counting = 0;
    count.innerText = 0;
    newPtag.innerText = "";
}

// function save increment number
function saveCount (){
  
  let countString = ` ${counting} - `
  newPtag.innerText += countString
  counting = 0
  count.innerText = 0;


}
//-------------------------------------------------------