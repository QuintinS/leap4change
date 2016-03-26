Framework = {

    UI: {

        loadingOverlay: {

            add: function(options) {

                var mySelector = "body";

                if (options !== undefined) {
                    if (options.selector){
                        mySelector = options.selector;
                    }
                }

                if ($(".q-loading-overlay").length <= 0) {
                    $(mySelector).prepend(Framework.UI.loadingOverlay.print(options));
                    if (mySelector === "body") {
                        Framework.UI.loadingOverlay.show();
                    }
                    else
                    {
                        $(mySelector + " > .q-loading-overlay").fadeIn(500);
                    }
                } else {
                    if (options !== undefined && options.text !== undefined && typeof options.text === "string") {
                        Framework.UI.loadingOverlay.text(options.text);
                    }
                }
            },

            show: function() {
                $("body > .q-loading-overlay").fadeIn(500);
            },

            hide: function() {
                $("body > .q-loading-overlay").fadeOut(500, Framework.UI.loadingOverlay.remove);
            },

            remove: function() {
                $("body > .q-loading-overlay").remove();
            },

            text: function(string) {
                $(".loader-text").text(string);
            },

            print: function(options) {

                var myLoaderText;
                var myLoaderNumber;
                var myLoaderType;
                var myLoaderBackgroundColor;
                var myLoaderColor;
                var myInitialHidden = "";

                if (options !== undefined) {

                    if (options.hidden !== undefined && options.hidden === true) {
                        myInitialHidden = "style='display:none'";
                    }

                    if (options.text !== undefined && typeof options.text === "string") {
                        myLoaderText = options.text;
                    } else {
                        myLoaderText = "";
                    }

                    if (options.type !== undefined && typeof options.type === "string") {
                        if (options.type === "dots") {
                            myLoaderType = "q-loader-dots";
                        }
                        else
                        if (options.type === "dot") {
                            myLoaderType = "q-loader-dot";
                        }
                        else
                        if (options.type === "ellipse") {
                            myLoaderType = "q-loader-ellipse";
                        }
                        else
                        {
                            myLoaderType = "q-loader-dots";
                        }

                    } else {
                        myLoaderType = "";
                    }

                    if (options.background !== undefined && typeof options.background === "string") {
                        if (options.background === "blue") {
                            myLoaderBackgroundColor = "b-loader-background-blue";
                        }
                        else
                        if (options.background === "white") {
                            myLoaderBackgroundColor = "b-loader-background-white";
                        }
                        else
                        if (options.background === "green") {
                            myLoaderBackgroundColor = "b-loader-background-green";
                        }
                        else
                        if (options.background === "red") {
                            myLoaderBackgroundColor = "b-loader-background-red";
                        }
                        else
                        if (options.background === "black") {
                            myLoaderBackgroundColor = "b-loader-background-black";
                        }
                        else
                        {
                            myLoaderBackgroundColor = "b-loader-background-blue";
                        }
                    } else {
                        myLoaderBackgroundColor = "b-loader-background-blue";
                    }

                    if (options.color !== undefined && typeof options.color === "string") {
                        if (options.color === "blue") {
                            myLoaderColor = "b-loader-color-blue";
                        }
                        else
                        if (options.color === "white") {
                            myLoaderColor = "b-loader-color-white";
                        }
                        else
                        if (options.color === "green") {
                            myLoaderColor = "b-loader-color-green";
                        }
                        else
                        if (options.color === "red") {
                            myLoaderColor = "b-loader-color-red";
                        }
                        else
                        if (options.color === "black") {
                            myLoaderColor = "b-loader-color-black";
                        }
                        else
                        {
                            myLoaderColor = "b-loader-color-blue";
                        }
                    } else {
                        myLoaderColor = "b-loader-color-blue";
                    }

                } else {
                    myLoaderText = "";
                }

                myLoaderNumber = $(".q-loading-overlay").length + 1;

                returnHTML = "";
                returnHTML +=   '<div id="q-loading-overlay-' + myLoaderNumber + '" class="q-loading-overlay ' + myLoaderBackgroundColor + ' ' + myLoaderColor + ' ' + myLoaderType + ' ' + myInitialHidden + '">';
                returnHTML +=       '<div class="q-loader"></div>';
                returnHTML +=       '<div class="q-loader-text">' + myLoaderText + "</div>";
                returnHTML +=   "</div>";

                return returnHTML;
            }

        },

        tooltips: {

            add: function() {
                $(".holygrail-container > .content .tooltip").tooltipster({
                    position: "bottom",
                    theme: "tooltipster-omarket",
                    delay: 0,
                    offsetY: 10
                });
                $(".sidebar-menu .tooltip").tooltipster({
                    position: "right",
                    theme: "tooltipster-omarket",
                    delay: 0
                });
            },

        },

        UploadProgress: {

            print: function() {

                var myUploadUINumber = $(".q-upload-progress").length + 1;
                var returnHTML = "";
                returnHTML +=   '<div id="q-upload-progress-' + myUploadUINumber + '" class="q-upload-progress">';
                returnHTML +=       '<span class="q-upload-progress-message">';
                returnHTML +=           'Upload Progress: <span class="bold" data-content="Progress">0</span>% Complete';
                returnHTML +=       "</span>";
                returnHTML +=       '<span class="q-upload-progress-meter" style="width:0%"></span>';
                returnHTML +=   "</div>";
                return returnHTML;

            }

        }

    },

    Functions: {

        showGenericErrorBanner: function() {
            Framework.UI.NotificationBanner.fire({
                type: "error"
            });
        },

        showGenericSuccessBanner: function() {
            Framework.UI.NotificationBanner.fire({
                type: "success"
            });
        }

    },

    Utilities: {

        

    },

    reset: function(){


    }

};

Framework.reset();