var Site = {

	Menu: {

		expand: function(event) {
			var myMenuVisible = $(".sf-menu").is(":visible");
			if (myMenuVisible === true) {
				$(".sf-menu").slideUp();
			}
			else
			{
				$(".sf-menu").slideDown();
			}
		}

	},

	Forms: {
		Contact: {
			validate: function(){

				$("#contact-form").validate({
					rules: {
						contactName: {
							required: true,
						},
						contactEmail: {
							required: true,
							email: true
						},
						contactTelephone: {
							required: true,
						},
						contactMessage: {
							required: true,
						},
					},
					messages: {
						contactName: {
							required: "Please enter your name",
						},
						contactEmail: {
							required: "Please enter your e-mail address.",
							email: "Please enter a valid e-mail address."
						},
						contactTelephone: {
							required: "Please enter your telephone number.",
						},
						contactMessage: {
							required: "Please enter your message.",
						},
					},
					submitHandler: function(form){

						var myData = {
							contactName: $("#contactName").val(),
							contactEmail: $("#contactEmail").val(),
							contactTelephone: $("#contactTelephone").val(),
							contactMessage: $("#contactMessage").val()
						};

						$.ajax({
							// url: "/json/generic-success.json",
							url: "/scripts/Contact.asp",
							method: "POST",
							data: myData,
							success: function(data){
								if (data.ResponseStatus === "success") {
									$("#contact-form .success").fadeIn(500, function(){
										$(this).delay(5000).fadeOut(500);
									});
								}
								else
								{
									console.log("Could not send e-mail.");
								}
							},
							error: function(){
								console.log("Could not send e-mail.");
							}
						});

					}
				});

			}
		}
	},

	ScrollMagic: {
		controller: new ScrollMagic.Controller(),
		init: function(){
			new ScrollMagic.Scene({
			        duration: 100,    // the scene should last for a scroll distance of 100px
			        offset: 50        // start this scene after scrolling for 50px
			})
			.setPin("#my-sticky-element") // pins the element for the the scene's duration
			.addTo(controller); // assign the scene to the controller
		}
	},

	assignEventListeners: function(){
		$('a[href*=#]:not([href=#])').on("click", Site.functions.scrollTo);
		$('#q-menu-button').on("click", Site.Menu.expand);
	},

	functions: {

		scrollTo: function(HashOrEvent){

			if (typeof HashOrEvent === "string") {
				
			}
			else
			if (typeof HashOrEvent === "object") {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top - 400
						}, 1000);
						return false;
					}
				}
			}

			var myLocation = $(event.currentTarget).attr("href").replace("#", "");
			var anchorExists = $("[name='" + myLocation + "']").length >= 1;
			console.log(anchorExists);

			if (anchorExists === true) {

			}

		},

		getLinkScroll: function(){
			if(window.location.hash) {
			  // Fragment exists
			} else {
			  // Fragment doesn't exist
			}
		}

	},

	reset: function(){
		Site.assignEventListeners();
		Site.Forms.Contact.validate();
		Site.functions.getLinkScroll();
	}

};

$(document).ready(function(){
	// Site.reset();
});

scroll(0,0);
Site.functions.getLinkScroll();
Site.reset();