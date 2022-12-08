  var currentHr = dayjs().hour(); // gets current hour

  $(document).ready(function () { //code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
    console.log("Ready!");

    //DONE: Add code to display the current date in the header of the page.
    /* Shows the current date 
    Acceptance Criteria: WHEN I open the planner THEN the current day is displayed at the top of the calendar */
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));
 
    /*
    DONE: Add code to apply the past, present, or future class to each time
    block by comparing the id to the current hour. HINTS: How can the id
    attribute of each time-block be used to conditionally add or remove the
    past, present, and future classes? How can Day.js be used to get the
    current hour in 24-hour time?
    
    Acceptance Criteria: WHEN I view the timeblocks for that day THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    */

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


    /* 
    TODO: Add a listener for click events on the save button. This code should
    use the id in the containing time-block as a key to save the user input in
    local storage. HINT: What does `this` reference in the click listener
    function? How can DOM traversal be used to get the "hour-x" id of the
    time-block containing the button that was clicked? How might the id be
    useful when saving the description in local storage? 
    
    Acceptance Criteria: WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage
    */

    $('.saveBtn').click(function (e) { 
      e.preventDefault();

      // saveLastItem();
      // function saveLastItem(){
      //   var btnHrClicked = parseInt($(this).attr('id')); //Local Storage KEY = get the value of the id of the button clicked 
      //   var inputSaved = ($(this).siblings('.description').val()); //Local Storage VALUE = get the value of input .attr('.description'))
      //   console.log(btnHrClicked);

      //   var userItem = {
      //     hour: ($(this).attr('id')),
      //     item: inputSaved,
      //   };
      //   localStorage.setItem(btnHrClicked, JSON.stringify(userItem));
      // };

      
      var btnHrClicked = parseInt($(this).attr('id')); //Local Storage KEY = get the value of the id of the button clicked 
      console.log(btnHrClicked);

      var inputSaved = ($(this).siblings('.description').val()); //Local Storage VALUE = get the value of input .attr('.description'))
      console.log(typeof(inputSaved));
      console.log(inputSaved); 

      localStorage.setItem(btnHrClicked, inputSaved); //save in local storage as an object
      
      // myFunction();
      // function myFunction() {
      //   var x = sessionStorage.getItem("9");
      //   console.log(x)
      //   document.getElementById("9").innerHTML = x;
      // };

      // function getLastItem(){
      //   var lastItem = JSON.parse(localStorage.getItem(btnHrClicked));
      //   console.log(lastItem);
      // }


      /*
      for (var i = 0; i < localStorage.length; i++) {
        console.log(typeof(btnHrClicked));
        console.log(inputSaved);
        var getHr = (localStorage.key(i));
        // var stringHr = stringify(getHr);

        var getValue = localStorage.getItem(inputSaved(i));  
        console.log(getHr);
        console.log(getValue);
      };
      */
      
      for(var i=0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        console.log(key);
        console.log(value);
      }

      // allStorage();
      // function allStorage (){
      //   var values = [];
      //     keys = Object.keys(localStorage),
      //     i = keys.length;

      //   while (i--) {
      //     values.push(localStorage.getItem(keys[i]));
      //   }
      //   console.log(values);
      // };





    });







    /*
    TODO: Add code to get any user input that was saved in localStorage and set
    the values of the corresponding textarea elements. HINT: How can the id
    attribute of each time-block be used to do this?

    Acceptance Criteria: WHEN I click into a timeblock THEN I can enter an event
    */





    /* 
    ME TO DO: Add a for loop that loops through stored local storage and shows it on html. 
    The for loop should run as soon as the page loads


    Acceptance Criteria: WHEN I refresh the page THEN the saved events persist

    */

    /* ME TO DO: Only IF YOU HAVE TIME: Figure out a way to repeat adding the hour rows in js */
  });