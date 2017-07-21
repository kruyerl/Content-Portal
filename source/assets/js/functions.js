$(document).ready(function() {
  //Start Doc Ready
  $('#loadingContainer').addClass('show');

  // Account Modal ////////////////////////////
  $("#Account-modal-selector").click(function() {
    $("#Account-modal").toggleClass("is-active");
  });
  $("#Account-modal-overlay").click(function() {
    $("#Account-modal").toggleClass("is-active");
  });
  $("#Account-modal-close").click(function() {
    $("#Account-modal").toggleClass("is-active");
  });



  // Support Modal ////////////////////////////
  $(".report_selector").click(function() {
    $("#Support-modal").toggleClass("is-active");
  });
  $("#Support-modal-selector").click(function() {
    $("#Support-modal").toggleClass("is-active");
  });

  $("#Support-modal-overlay").click(function() {
    $("#Support-modal").toggleClass("is-active");
  });
  $("#Support-modal-close").click(function() {
    $("#Support-modal").toggleClass("is-active");
  });



  // Notifications Modal ////////////////////////////
  $("#Notifications-modal-selector").click(function() {
    $("#Notifications-modal").toggleClass("is-active");
    $(document).mouseup(function(e) {
      var container = $("#Notifications-modal");
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass("is-active");
      }
    });
  });
  // sets the number in the notification badge based off amount of cards
  var count = $("#card-container").children().length;
  $("#Notifications-modal-selector").attr("data-badge", count);



  // slideshow ////////////////////////////
  (function($) {

    'use strict';

    var $slides = $('[data-slides]');
    var images = $slides.data('slides');
    var count = images.length;
    var slideshow = function() {
      $slides
        .css('background-image', 'url("' + images[Math.floor(Math.random() * count)] + '")')
        .show(0, function() {
          setTimeout(slideshow, 10000);
        });
    };

    slideshow();

  }(jQuery));



  // Nav dropdown-menu ////////////////////////////
  $("#Nav-dropdown-selector").click(function() {
    $("#Nav-dropdown").toggleClass("is-active");
    $(document).mouseup(function(e) {
      var container = $("#Nav-dropdown");
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass("is-active");
      }
    });
  });



  // Search Form ////////////////////////////
  $("#SearchFormIcon").click(function() {
    $("#searchForm").submit();
  });

  $("#SearchInput").keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      $("#searchForm").submit();

    }
  });



  // Ajax on bottom  ////////////////////////////
  $(window).scroll(function() {
    if ($(document).height() <= $(window).scrollTop() + $(window).height()) {

      // Ajax
    }
  });



  // Filters ////////////////////////////


  //Year Filter
  initialiseYearGraph();
  updateYearRating(); //initial display

  $('#YearFilter').nstSlider({

    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function(cause, leftValue, rightValue) {
      $(this).parent().find('.leftLabel').text(leftValue);
      $(this).parent().find('.rightLabel').text(rightValue);

      updateYearRating(); //Updates Stars
    }
  });

  function updateYearRating() {
    var slidervalue1 = parseInt($('.yearFilter-leftLabel').text());
    var slidervalue2 = parseInt($('.yearFilter-rightLabel').text());
    var highvalue = Math.max(slidervalue1, slidervalue2);
    var lowvalue = Math.min(slidervalue1, slidervalue2);
    var countLow = Math.abs(lowvalue - $('#YearFilter').data("range_min"));
    var countHigh = Math.abs($('#YearFilter').data("range_max") - highvalue);
    var yeartotalb = Math.abs($('#YearFilter').data("range_max") - $('#YearFilter').data("range_min"));
    var countHighest = yeartotalb - countHigh + 1;
    i = 1;
    $(".yearFilterBar").each(function() {
      if (i <= countHighest && i >= countLow) {
        $(".yearFilterBar:nth-child(" + i + ")").addClass("is-active");
      } else {
        $(".yearFilterBar:nth-child(" + i + ")").removeClass("is-active");
      }
      i++;
    });
  }

  function initialiseYearGraph() {

    var e = $('.yearFilterBar');

    for (var i = $('#YearFilter').data("range_min"); i <= $('#YearFilter').data("range_max"); i++) {
      e.clone().insertAfter(e);
    }

    //feed values into array
    var a = {};
    var b = 0;
    var c = 1;
    var l = 0;
    for (i = $('#YearFilter').data("range_min"); i <= $('#YearFilter').data("range_max"); i++) {
      b = Math.floor(Math.random() * (0 + 100)); // feeds random value into array
      a[i] = b;
    }
    var array_values = [];

    for (var key in a) {
      array_values.push(a[key]);
      if (a[key] > l) {
        l = a[key]; //Finds largest number to use for percentages of graph height
      }
    }

    //turns array into % and sets height of bargraph
    for (i = $('#YearFilter').data("range_min"); i <= $('#YearFilter').data("range_max"); i++) {
      b = a[i] / l * 100;
      b = Math.round(b);
      $(".bargraph:nth-child(" + c + ")").css('height', b + '%');
      c++;
    }

  }
  //Star Filter

  updateStarRating(); //initial display

  $('#StarFilter').nstSlider({
    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function(cause, leftValue, rightValue) {
      $(this).parent().find('.leftLabel').text(leftValue);
      $(this).parent().find('.rightLabel').text(rightValue);

      updateStarRating(); //Updates Stars
    }
  });

  function updateStarRating() {

    var slidervalue1 = parseInt($('.starFilter-leftlabel').text());
    var slidervalue2 = parseInt($('.starFilter-rightlabel').text());
    var highvalue = Math.max(slidervalue1, slidervalue2);
    var lowvalue = Math.min(slidervalue1, slidervalue2);

    var e = $('.starFilter-icon');
    for (var i = 1; i < 11; i++) {

      if (i <= highvalue && i >= lowvalue) {
        $(".starFilter-icon:nth-child(" + i + ")").addClass("is-active");
      } else {
        $(".starFilter-icon:nth-child(" + i + ")").removeClass("is-active");
      }
    }
  }

  //Actor Filter
  $("#actorFilterInput").keyup( function(){
    actorFilter();
  });
  function actorFilter() {
    // Declare variables
    var input = null;
    var filter = null;
    var ul = null;
    var li = null;
    a = 0;
    i = null;
    input = document.getElementById('actorFilterInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("actorFilterUL");
    li = ul.getElementsByTagName('li');
    // Loop through all list items, and hide those who don't match the search query

    for (i = 0; i < li.length; i++) {
      if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      }else {
        li[i].style.display = "none";
        $('.actorLi.is-active').css('display', 'block');
      }
    }

  }
  $('.actorsName').click(function() {
    $(this).toggleClass("is-active");
  });

  //Genre Filter
  $("#genreFilterInput").keyup( function(){
    genreFilter();
  });
  function genreFilter() {
    // Declare variables
    var input = null;
    var filter = null;
    var ul = null;
    var li = null;
    a = 0;
    i = null;
    input = document.getElementById('genreFilterInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("genreFilterUL");
    li = ul.getElementsByTagName('li');
    // Loop through all list items, and hide those who don't match the search query

    for (i = 0; i < li.length; i++) {
      if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      }else {
        li[i].style.display = "none";
        $('.genreLi.is-active').css('display', 'block');
      }
    }

  }
  $('.genreName').click(function() {
    $(this).toggleClass("is-active");
  });








  // TV Show Season Toggler ////////////////////////////
  $('.season-container').find('.season-toggle').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.season-container').find('table').toggleClass('is-hidden');
  });


  // Youtube Popup Function ////////////////////////////
  jQuery(function() {
    jQuery("a.trailer-toggle").YouTubePopUp();
  });
  //End Doc Ready
});


// Onload Function ////////////////////////////
$(window).load(function() {
  // PAGE IS FULLY LOADED
  $('#loadingOverlay').fadeOut();
  console.log("Designed & Developed in partnership with LDK Creatives");


  //End Onload
});
