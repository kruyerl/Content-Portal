$(document).ready(function() {
  //Start Doc Ready



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



  // Histogram Slider ////////////////////////////
  $(document).ready(function() {
    var yeartotal = Math.abs($('.nstSlider').data("range_max") - $('.nstSlider').data("range_min")) + 1;
    var b = 0.1;
    var e = $('.bargraph');
    for (var i = 0; i < yeartotal; i++) {
      e.clone().insertAfter(e);
    }
    var number1 = parseInt($('#leftLabel').text());
    var number2 = parseInt($('#rightLabel').text());
    var numMax = Math.max(number1, number2);
    var numMin = Math.min(number1, number2);
    var countLow = Math.abs(numMin - $('.nstSlider').data("range_min"));
    var countHigh = Math.abs($('.nstSlider').data("range_max") - numMax);
    var yeartotalb = Math.abs($('.nstSlider').data("range_max") - $('.nstSlider').data("range_min"));
    var countHighest = yeartotalb - countHigh + 1;
    i = 1;
    $(".bargraph").each(function() {
      if (i <= countHighest && i >= countLow) {
        $(".bargraph:nth-child(" + i + ")").addClass("is-active");
      } else {
        $(".bargraph:nth-child(" + i + ")").removeClass("is-active");
      }
      // FIXME: Temporary Math random height selector
      b = Math.floor(Math.random() * (0 + 100));
      $(".bargraph:nth-child(" + i + ")").css('height', b + '%');
      i++;
    });
  });
  $('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function(cause, leftValue, rightValue) {
      $(this).parent().find('.leftLabel').text(leftValue);
      $(this).parent().find('.rightLabel').text(rightValue);

      var number1 = parseInt($('#leftLabel').text());
      var number2 = parseInt($('#rightLabel').text());
      var numMax = Math.max(number1, number2);
      var numMin = Math.min(number1, number2);
      var countLow = Math.abs(numMin - $('.nstSlider').data("range_min"));
      var countHigh = Math.abs($('.nstSlider').data("range_max") - numMax);
      var yeartotalb = Math.abs($('.nstSlider').data("range_max") - $('.nstSlider').data("range_min"));
      var countHighest = yeartotalb - countHigh + 1;
      console.log(countLow + " and " + countHighest);
      var i = 1;
      $(".bargraph").each(function() {

        if (i <= countHighest && i >= countLow) {
          $(".bargraph:nth-child(" + i + ")").addClass("is-active");
        } else {
          $(".bargraph:nth-child(" + i + ")").removeClass("is-active");
        }
        i++;
      });


    }


  });

  //End Doc Ready
});
