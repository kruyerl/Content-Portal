$( document ).ready(function() {




  // Account Modal
  $( "#Account-modal-selector" ).click(function() {
    $("#Account-modal").toggleClass("is-active");
  });
  $( "#Account-modal-overlay" ).click(function() {
    $("#Account-modal").toggleClass("is-active");
  });
  $( "#Account-modal-close" ).click(function() {
    $("#Account-modal").toggleClass("is-active");
  });



  // Support Modal
  $( "#Support-modal-selector" ).click(function() {
    $("#Support-modal").toggleClass("is-active");
  });
  $( "#Support-modal-overlay" ).click(function() {
    $("#Support-modal").toggleClass("is-active");
  });
  $( "#Support-modal-close" ).click(function() {
    $("#Support-modal").toggleClass("is-active");
  });



  // Notifications Modal
  $( "#Notifications-modal-selector" ).click(function() {
    $("#Notifications-modal").toggleClass("is-active");
    $(document).mouseup(function(e)
    {
        var container = $("#Notifications-modal");
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            container.removeClass("is-active");
        }
    });
  });
  // sets the number in the notification badge based off amount of cards
  var count = $("#card-container").children().length;
  $("#Notifications-modal-selector").attr("data-badge", count);



  // slideshow
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



  // Nav dropdown-menu
  $( "#Nav-dropdown-selector" ).click(function() {
    $("#Nav-dropdown").toggleClass("is-active");
    $(document).mouseup(function(e)
    {
        var container = $("#Nav-dropdown");
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            container.removeClass("is-active");
        }
    });
  });



  $( "#SearchFormIcon" ).click(function() {
    $("#searchForm").submit();
  });

  $("#SearchInput").keypress(function(event) {
      if (event.which == 13) {
          event.preventDefault();
          $("#searchForm").submit();
          
      }
  });

});
