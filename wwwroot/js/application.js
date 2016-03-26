Application = {

	Forms: {

		validateFormApplication: function(){

			$("#q-form-application").validate({

				rules: {
					"q-form-application-name": {
						required: true,
					},
					"q-form-application-email": {
						required: true,
						email: true
					},
					"q-form-application-mobile": {
						required: true,
					},
					"q-form-application-nationality": {
						required: true,
					},
					"q-form-application-age": {
						required: true,
					},
					"q-form-application-interests": {
						required: true,
					},
					"q-form-application-startdate": {
						required: true,
					},
					"q-form-application-duration": {
						required: true,
					},
					"q-form-application-motivation": {
						required: true,
					},
				},

				messages: {
					"q-form-application-name": {
						required: "Please enter your name.",
					},
					"q-form-application-email": {
						required: "Please enter your e-mail address.",
						email: "Please enter a valid e-mail address."
					},
					"q-form-application-mobile": {
						required: "Please enter your mobile number.",
					},
					"q-form-application-nationality": {
						required: "Please select your nationality.",
					},
					"q-form-application-age": {
						required: "Please enter your age.",
					},
					"q-form-application-interests": {
						required: "Please enter your interests.",
					},
					"q-form-application-startdate": {
						required: "Please tell us when you want to start your programme.",
					},
					"q-form-application-duration": {
						required: "Please select the duration of your programme.",
					},
					"q-form-application-motivation": {
						required: "Please enter a motivating letter.",
					},
				},

				errorClass: "q-validation-error",
				validClass: "q-validation-success",
				showErrors: Site.UI.showErrors,

				submitHandler: function(){
					// console.log("Submit");
					Application.API.postFormAppliction();
				}

			});

		}

	},
	
	API: {

		postFormAppliction: function() {

			var myData = {
				"q-form-application-name": $("#q-form-application-name").val(),
				"q-form-application-email": $("#q-form-application-email").val(),
				"q-form-application-mobile": $("#q-form-application-mobile").val(),
				"q-form-application-nationality": $("#q-form-application-nationality").find("option:selected").val(),
				"q-form-application-age": $("#q-form-application-age").val(),
				"q-form-application-interests": $("#q-form-application-interests").val(),
				"q-form-application-startdate": $("#q-form-application-startdate").val(),
				"q-form-application-duration": $("[name='q-form-application-duration']").filter(":checked").val(),
				"q-form-application-motivation": $("#q-form-application-motivation").val(),
			};

			console.log(myData);

			$.ajax({
				// url: "",
				url: "/php/application.php",
				method: "post",
				data: myData,
				beforeSend: function() {
					
					Framework.UI.loadingOverlay.add({
						type: "dots",
						text: "Sending Application..."
					});

				},
				success: function() {

					$("#q-form-application")[0].reset();

					var n = noty({
					    theme: "relax",
					    type: "success",
					    layout: "bottomCenter",
					    text: "Thank you! Your application has been sent.",
					    timeout: 5000
					});

				},
				error: function(data) {

					console.log(data);
					
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

		

		Application.Forms.validateFormApplication();


	}

};

Application.reset();