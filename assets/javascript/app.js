// SD Pick Up Games

// Initialize Firebase<script>
  // Initialize Fiase

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA7WKY0CFTVlAgQb9Gp72FdN9yDU2u4zKI",
    authDomain: "groupproject-972ed.firebaseapp.com",
    databaseURL: "https://groupproject-972ed.firebaseio.com",
    projectId: "groupproject-972ed",
    storageBucket: "groupproject-972ed.appspot.com",
    messagingSenderId: "142851479998"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var neighborhood = "";
  var location = "";
  var organizer = "";
  var time = "";

  $("add-user").on("click", function() {
  
    event.preventDefault();

  neighborhood = $("#neighborhood-input").val().trim();
      location = $("#location-input").val().trim();
      organizer = $("#organizer-input").val().trim();
      time = $("#time-input").val().trim();

      database.ref().set({
        neighborhood: neighborhood,
        location: location,
        organizer: organizer,
        time: time,
      });
    });

database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());
    console.log(snapshot.val().neighborhood);
    console.log(snapshot.val().location);
    console.log(snapshot.val().organizer);
    console.log(snapshot.val().time);

    $("#neighborhood-display").text(snapshot.val().neighborhood);
      $("#location-display").text(snapshot.val().location);
      $("#organizer-display").text(snapshot.val().organizer);
      $("#time-display").text(snapshot.val().time);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

//Create Pick Up Game button-logan

$('#create-game').on('click', function(){

  document.getElementById('form-spot').style.display = 'block';

  //Variables for the form
  //var form = $('<form>')
  //var nameInput = $('<div>')
  //var sportInput;
  //var zipInput;

  //create a space on the page that will have the form for input
  //$('#form-spot').append(form)

  //Variables of the input values needed to create game
  //var name;
  //var sport;
  //var zipCode;
 

  console.log('test')

});

//Submit button for posting the created game
$('#create-game-submit').on('click', function(){
  var name = $('#create-name-input').val();
  var sport = $('#create-sport-input').val();
  var zipCode = $('#create-zip-input').val();
  var description = $('#create-description-input').val();

  console.log(name);
  console.log(sport);
  console.log(zipCode);
  console.log(description);
  


});


//On click, pop up modal

    //Within modal, form is available to fill out

    //Within form, enter zip has a 'search' button within to request

        //When Search button clicked, Google Maps API request and Weather based off      Zip shows results





//google maps api key: AIzaSyApXuhqWNe1cN6kA4ojTP9aqVVsDcteGbU



//------------------------------------------------------------------------------------------------------------------------------------------

//On click, pop up modal

    //Within modal, form is available to fill out

    //Within form, enter zip has a 'search' button within to request

        //When Search button clicked, Google Maps API request 
        
        //and Weather based off Zip shows results










//Sign in to have user data and 

// Search for Pick up games that have been posted around you

    //Show the amount of people going, the location, type of game and a description that the poster has created

    //Click that you are interested in going

// Post a Pick Up Game for people to join

    //Enter the category for the type of sport

    //Short Description on what exactly you want to do, where in the park you might be

    //Choose the park that you are going to, from a list of parks nearby
