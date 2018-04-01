/* -----------  Hide Until Page Load ----------------- */

$(window).load(function() {
  $("body").fadeIn(100);
});

/* -----------  Contact Form ----------------- */

$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});

/* -----------  Subscribe Form ----------------- */

$(function() {

  // Get the form.
  var form = $('#ajax-subscribe');

  // Get the messages div.
  var formMessages = $('#subscribe-form-messages');

  // Set up an event listener for the contact form.
  $(form).submit(function(e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })
    .done(function(response) {
      // Make sure that the formMessages div has the 'success' class.
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');

      // Set the message text.
      $(formMessages).text(response);

      // Clear the form.
      $('#name-subscribe').val('');      
      $('#email-subscribe').val('');

      localStorage.setItem("disableSubscribeForm", "true");

    })
    .fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');

      // Set the message text.
      if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
      }
    });

  });

});

/* -----------  Footer Subscribe Form ----------------- */

$(function() {

  // Get the form.
  var form = $('#ajax-footer-subscribe');

  // Get the messages div.
  var formMessages = $('#footer-subscribe-form-messages');

  var formTitle = $('#footer-subscribe-form-title');

  // Set up an event listener for the contact form.
  $(form).submit(function(e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })
    .done(function(response) {
      // Make sure that the formMessages div has the 'success' class.
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');

      // Set the message text.
      $(formMessages).text(response);

      // Clear the form.
      $('#footer-subscribe-name').val('');
      $('#footer-subscribe-email').val('');

      localStorage.setItem("disableSubscribeForm", "true");

      $(formTitle).addClass('hide');

    })
    .fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');

      // Set the message text.
      if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
      }
    });

  });

});


/* ===========================================================
 * jquery-subscribe-better.js v1
 * ===========================================================
 * Copyright 2014 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Create a better, highly customizable subscription modal or
 * newsletter signup window with jQuery Subscribe Better
 *
 * https://github.com/peachananr/subscribe-better
 *
 * ========================================================== */

!function($){

  var defaults = {
    trigger: "atendpage", // atendpage | onload | onidle
    animation: "fade", // fade | flyInRight | flyInLeft | flyInUp | flyInDown
    delay: 0,
    showOnce: true,
    autoClose: false,
    scrollableModal: false
  };

  $.fn.subscribeBetter = function(options){
    var settings = $.extend({}, defaults, options),
        el = $(this),
        shown = false,
        animating = false;

    el.addClass("sb");

    $.fn.openWindow = function() {
      /* CHANGE BY GB */
      var disableSubscribeForm = localStorage.getItem('disableSubscribeForm');
      if (disableSubscribeForm) { 
        return; 
      }
      /* END CHANGE */

      var el = $(this);
      if(el.is(":hidden") && shown == false && animating == false) {
        animating = true;

        setTimeout(function() {
          if (settings.scrollableModal == true) {
            if($(".sb-overlay").length < 1) {
              $("body").append("<div class='sb-overlay'><div class='sb-close-backdrop'></div><div class='sb sb-withoverlay'>" + $(".sb").html() + "</div></div>");
              $(".sb-close-backdrop, .sb-close-btn").one("click", function() {
                $(".sb.sb-withoverlay").closeWindow();
                /* CHANGE BY GB */localStorage.setItem("disableSubscribeForm", "true");/* END CHANGE */                
                return false;
              });
              $(".sb.sb-withoverlay").removeClass("sb-animation-" + settings.animation.replace('In', 'Out')).addClass("sb-animation-" + settings.animation);
              setTimeout(function(){
                $(".sb.sb-withoverlay").show();
                $("body").addClass("sb-open sb-open-with-overlay");
              }, 300);
            }
          } else {
            if ($(".sb-overlay").length < 1) {
              $("body").append("<div class='sb-overlay'><div class='sb-close-backdrop'></div></div>");
              $(".sb").removeClass("sb-animation-" + settings.animation.replace('In', 'Out')).addClass("sb-animation-" + settings.animation);
              $(".sb-close-backdrop, .sb-close-btn").one("click", function() {
                /* CHANGE BY GB */localStorage.setItem("disableSubscribeForm", "true");/* END CHANGE */                
                $(".sb").closeWindow();
                return false;
              });
              setTimeout(function(){
                $(".sb").show();
                $("body").addClass("sb-open");
              }, 300);
            }

          }
          if (settings.showOnce == true) shown = true;
          animating = false;
        }, settings.delay);
      }
    }

    $.fn.closeWindow = function() {
      var el = $(this);
      if(el.is(":visible") && animating == false) {
        animating = true;
        if (settings.scrollableModal == true) {

          $(".sb.sb-withoverlay").removeClass("sb-animation-" + settings.animation).addClass("sb-animation-" + settings.animation.replace('In', 'Out'));

          setTimeout(function(){
            $(".sb.sb-withoverlay").hide();
            $("body").removeClass("sb-open sb-open-with-overlay");
            setTimeout(function() {
              $(".sb-overlay").remove();
            }, 300);
          }, 300);

        } else {

          $(".sb").removeClass("sb-animation-" + settings.animation).addClass("sb-animation-" + settings.animation.replace('In', 'Out'));
          setTimeout(function(){
            $(".sb").hide();
            $("body").removeClass("sb-open");
            setTimeout(function() {
              $(".sb-overlay").remove();
            }, 300);
          }, 300);
        }
        animating = false;
      }
    }

    $.fn.scrollDetection = function (trigger, onDone) {
      var t, l = (new Date()).getTime();

      $(window).scroll(function(){
          var now = (new Date()).getTime();

          if(now - l > 400){
              $(this).trigger('scrollStart');
              l = now;
          }

          clearTimeout(t);
          t = setTimeout(function(){
              $(window).trigger('scrollEnd');
          }, 300);
      });
      if (trigger == "scrollStart") {
        $(window).bind('scrollStart', function(){
          $(window).unbind('scrollEnd');
          onDone();
        });
      }

      if (trigger == "scrollEnd") {
        $(window).bind('scrollEnd', function(){
          $(window).unbind('scrollStart');
          onDone();
        });
      }
    }

    switch(settings.trigger) {
      case "atendpage":
        $(window).scroll(function(){
          var yPos = $(window).scrollTop();
          if (yPos >= ($(document).height() - $(window).height()) ) {
            el.openWindow();
          } else {
            if (yPos + 300 < ($(document).height() - $(window).height()) ) {
              if(settings.autoClose == true) {
                el.closeWindow();
              }
            }
          }

        });
        break;
      case "onload":

        $(window).load(function(){
          el.openWindow();
          if(settings.autoClose == true) {
            el.scrollDetection("scrollStart", function() {
              el.closeWindow();
            });

          }
        });

        break;
      case "onidle":

        $(window).load(function(){
          el.scrollDetection("scrollEnd", function() {
            el.openWindow();
          });

          if(settings.autoClose == true) {
              el.scrollDetection("scrollStart", function() {
                el.closeWindow();
              });
          }
        });

        break;
    }


  }

}(window.jQuery);


