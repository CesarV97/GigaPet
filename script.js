$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.dance-button').click(clickedSuperdanceButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Pepe", weight: 5, happiness: 1};
    
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info.weight+=2;
      // Increase pet weight
      pet_info.happiness+=1;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info.happiness+=2;
      // Decrease pet weight
      pet_info.weight-=2;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info.happiness-=1;
      // Decrease pet weight
      pet_info.weight-=2;
      document.getElementById("image").src="https://cdn.glitch.me/c96e7747-7443-477b-89ae-aa8da73a09af%2Fswolepepe-removebg-preview.png?v=1637104734486";
      setTimeout(normalPepe, 2000);
      
      checkAndUpdatePetInfoInHtml();
    }
    
    
    function normalPepe(){
      document.getElementById("image").src="https://cdn.glitch.me/c96e7747-7443-477b-89ae-aa8da73a09af%2Fpepedance.gif?v=1637091933883";
      }
    

    function clickedSuperdanceButton(){
      pet_info.happiness=10;
      pet_info.weight=3;
      document.getElementById("image").src="https://cdn.glitch.me/c96e7747-7443-477b-89ae-aa8da73a09af%2Ffast-dancingPepe.gif?v=1637093607630";
      setTimeout(normalPepe, 10500);
      var audio = new Audio('https://cdn.glitch.me/c96e7747-7443-477b-89ae-aa8da73a09af%2FMario%20-%20Star%20Power%20Sound%20Effect.mp3?v=1637097456210');
      audio.play(10);
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
      if (pet_info.weight < 0){
        
        pet_info.weight = 0.1;
        
      }
      if (pet_info.happiness < 0){
        
        pet_info.happiness = 0.1;
        
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  