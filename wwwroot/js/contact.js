ContactForm = {

	Storage: {

		GoogleMapsStyles: [
		    {
		        "featureType": "administrative",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#444444"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#f2f2f2"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "saturation": "-36"
		            },
		            {
		                "lightness": "5"
		            },
		            {
		                "color": "#f1f1f1"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.man_made",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#ff0000"
		            },
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.natural",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "saturation": "-18"
		            },
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.natural",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#1b1111"
		            },
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.natural.landcover",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#ce3535"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.natural.terrain",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#ff0000"
		            },
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "all",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "lightness": 45
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "lightness": "8"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#fad3b7"
		            },
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#0f89ca"
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    }
		]

	},

	Forms: {

		validateFormContactForm: function(){

			$("#q-form-contact").validate({

				rules: {
					"q-form-contact-name": {
						required: true
					},
					"q-form-contact-email": {
						required: true
					},
					"q-form-contact-mobile": {
						required: true
					},
					"q-form-contact-subject": {
						required: true
					},
					"q-form-contact-message": {
						required: true
					},
				},

				messages: {
					"q-form-contact-name": {
						required: "Please enter your name."
					},
					"q-form-contact-email": {
						required: "Please enter your email address."
					},
					"q-form-contact-mobile": {
						required: "Please enter your mobile number."
					},
					"q-form-contact-subject": {
						required: "Please enter your message subject."
					},
					"q-form-contact-message": {
						required: "Please enter your message."
					},
				},

				errorClass: "q-validation-error",
				validClass: "q-validation-success",
				showErrors: Site.UI.showErrors,

				submitHandler: function(){
					// console.log("Submit");
					ContactForm.API.postFormContact();
				}

			});

		}

	},
	
	API: {

		postFormContact: function() {

			var myData = {
				"q-form-contact-name": $("#q-form-contact-name").val(),
				"q-form-contact-email": $("#q-form-contact-email").val(),
				"q-form-contact-mobile": $("#q-form-contact-mobile").val(),
				"q-form-contact-subject": $("#q-form-contact-subject").val(),
				"q-form-contact-message": $("#q-form-contact-message").val(),
			};

			console.log(myData);

			$.ajax({
				// url: "",
				url: "/php/contact.php",
				method: "post",
				data: myData,
				beforeSend: function() {
					
					Framework.UI.loadingOverlay.add({
						type: "dots",
						text: "Sending Message..."
					});

				},
				success: function() {

					$("#q-form-contact")[0].reset();

					var n = noty({
					    theme: "relax",
					    type: "success",
					    layout: "bottomCenter",
					    text: "Thank you! Your application has been sent.",
					    timeout: 5000
					});

				},
				error: function() {
					
					var n = noty({
					    theme: "relax",
					    type: "error",
					    layout: "bottomCenter",
					    text: "Whoops! Something went wrong. Please try again, or check back later.",
					    timeout: 5000
					});

				},
				complete: function() {
					Framework.UI.loadingOverlay.hide();
				}
			});

		},

	},

	reset: function() {
		ContactForm.Forms.validateFormContactForm();
	}

};

ContactForm.reset();