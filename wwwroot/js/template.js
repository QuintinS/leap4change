var Site = {
    UI: {
        Storage: {
            distanceFromTop: 0
        },
        EventHandlers: {
            onPageScroll: function() {
                Site.UI.Storage.distanceFromTop = parseInt($(window).scrollTop());
                if (Site.UI.Storage.distanceFromTop > 200) {
                    $("#q-header").addClass("q-header-scrolled");
                } else {
                    $("#q-header").removeClass("q-header-scrolled");
                }
            }
        },
        distanceFromTop: 0,
        showErrors: function(errorMap, errorList) {
            // console.log(errorMap);
            // console.log(errorList);
            $.each(errorList, function(index, value) {
                $(value.element).bPopover({
                    message: value.message,
                    placement: "bottom",
                    "class": "q-validation-error"
                });
            });
            $.each(this.successList, function(index, value) {
                $(value).bPopover("remove");
            });
        }
    },
    API: {
        postFormContactFooter: function() {
            var myData = {
                "q-form-footer-contact-email": $("#q-form-footer-contact-email").val(),
                "q-form-footer-contact-message": $("#q-form-footer-contact-message").val()
            };
            console.log(myData);
            $.ajax({
                url: "/php/contact-footer.php",
                // url: "",
                // url: "/php/error.php",
                method: "post",
                data: myData,
                beforeSend: function() {
                    Framework.UI.loadingOverlay.add({
                        type: "dots",
                        text: "Sending Message..."
                    });
                },
                success: function(data) {
                    $("#q-form-footer-contact-email").val("");
                    $("#q-form-footer-contact-message").val("");
                    var n = noty({
                        theme: "relax",
                        type: "success",
                        layout: "bottomCenter",
                        text: "Thank you! Your message has been sent.",
                        timeout: 5e3
                    });
                },
                error: function() {
                    var n = noty({
                        theme: "relax",
                        type: "error",
                        layout: "bottomCenter",
                        text: "Whoops! Something went wrong. Please try again, or check back later.",
                        timeout: 5e3
                    });
                },
                complete: function() {
                    Framework.UI.loadingOverlay.hide();
                }
            });
        }
    },
    Menu: {
        expand: function(event) {
            var myMenuVisible = $(".sf-menu").is(":visible");
            if (myMenuVisible === true) {
                $(".sf-menu").slideUp();
            } else {
                $(".sf-menu").slideDown();
            }
        }
    },
    Forms: {
        validateFormFooterContact: function() {
            $("#q-form-footer-contact").validate({
                rules: {
                    "q-form-footer-contact-email": {
                        required: true,
                        email: true
                    },
                    "q-form-footer-contact-message": {
                        required: true
                    }
                },
                messages: {
                    "email-email": {
                        required: "Please enter your e-mail address.",
                        email: "Please enter a valid e-mail address."
                    },
                    "email-message": {
                        required: "Please enter a message."
                    }
                },
                errorClass: "q-validation-error",
                validClass: "q-validation-success",
                showErrors: Site.UI.showErrors,
                submitHandler: function() {
                    // console.log("Submit");
                    Site.API.postFormContactFooter();
                }
            });
        }
    },
    assignEventListeners: function() {
        $('a[href*="#"]:not([href="#"])').on("click", Site.functions.scrollTo);
        $("#q-menu-button").on("click", Site.Menu.expand);
    },
    functions: {
        scrollTo: function(HashOrEvent) {
            if (typeof HashOrEvent === "string") {} else if (typeof HashOrEvent === "object") {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                    if (target.length) {
                        $("html,body").animate({
                            scrollTop: target.offset().top - 50
                        }, 1e3);
                        return false;
                    }
                }
            }
            var myLocation = $(event.currentTarget).attr("href").replace("#", "");
            var anchorExists = $("[name='" + myLocation + "']").length >= 1;
            console.log(anchorExists);
            if (anchorExists === true) {}
        },
        getLinkScroll: function() {
            if (window.location.hash) {} else {}
        }
    },
    reset: function() {
        Site.assignEventListeners();
        Site.Forms.validateFormFooterContact();
        Site.functions.getLinkScroll();
        scroll(0, 0);
        $("img").error(function() {
            $(this).attr("src", "/images/image-notfound.jpg");
        });
        $(".flexslider").flexslider({
            animation: "slide"
        });
    }
};

Site.reset();

$(document).on("scroll", function() {
    Site.UI.EventHandlers.onPageScroll();
});

$(document).ready(function() {
    jQuery("ul.sf-menu").superfish({
        popUpSelector: "ul,.sf-mega",
        // selector within menu context to define the submenu element to be revealed
        hoverClass: "sfHover",
        // the class applied to hovered list items
        delay: 800,
        // the delay in milliseconds that the mouse can remain outside a submenu without it closing
        animation: {
            height: "show"
        },
        // an object equivalent to first parameter of jQuery’s .animate() method. Used to animate the submenu open
        animationOut: {
            opacity: "hide"
        },
        // an object equivalent to first parameter of jQuery’s .animate() method Used to animate the submenu closed
        speed: "normal",
        // speed of the opening animation. Equivalent to second parameter of jQuery’s .animate() method
        speedOut: "fast",
        // speed of the closing animation. Equivalent to second parameter of jQuery’s .animate() method
        cssArrows: true,
        // set to false if you want to remove the CSS-based arrow triangles
        disableHI: false
    });
});

// Can also be used with $(document).ready()
$(window).load(function() {
    $('[data-parallax="scroll"]').parallax({
        iosFix: true
    });
});
//# sourceMappingURL=template.js.map