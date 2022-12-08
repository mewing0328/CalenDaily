var currentHr = dayjs().hour(); // gets current hour

$(document).ready(function () { //code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
  console.log("Ready!");

  // Acceptance Criteria: WHEN I open the planner THEN the current day is displayed at the top of the calendar 
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));

  // Acceptance Criteria: WHEN I view the timeblocks for that day THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  // Look at each row and use the id string as the value of rowHr variable
  $('.row').each(function () {
    var rowHr = parseInt($(this).attr('id'));

    //Conditional that compares the currentHr variable and the rowHr variable
    if(currentHr === rowHr){
      $(this).addClass('present');
    } else if(currentHr < rowHr) {
      $(this).addClass('future');
    } else {
      $(this).addClass('past');
    };
  });

  // Acceptance Criteria: WHEN I click into a timeblock THEN I can enter an event
  // Acceptance Criteria: WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage

  $('.saveBtn').click(function (e) {
    e.preventDefault();

    var btnHrClicked = parseInt($(this).attr('id')); //Local Storage KEY = get the value of the id of the button clicked
    console.log(btnHrClicked);

    var inputSaved = ($(this).siblings('.description').val()); //Local Storage VALUE = get the value of input .attr('.description'))
    console.log(typeof(inputSaved));
    console.log(inputSaved);

    localStorage.setItem(btnHrClicked, inputSaved); //save in local storage as an object
    alert("Your input has been saved!");
    location.reload();
  });
});
  
// Acceptance Criteria: WHEN I refresh the page THEN the saved events persist
getAllStorage();
function getAllStorage() {
  for(var i=0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];

    if(key === '9'){
      $('.9').text(value);
    };
    if(key === '10'){
      $('.10').text(value);
    };
    if(key === '11'){
      $('.11').text(value);
    };
    if(key === '12'){
      $('.12').text(value);
    };
    if(key === '13'){
      $('.13').text(value);
    };
    if(key === '14'){
      $('.14').text(value);
    };
    if(key === '15'){
      $('.15').text(value);
    };
    if(key === '16'){
      $('.16').text(value);
    };
    if(key === '17'){
      $('.17').text(value);
    };
  };
};