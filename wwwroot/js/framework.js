Framework = {
    UI: {
        loadingOverlay: {
            add: function(options) {
                var mySelector = "body";
                if (options !== undefined) {
                    if (options.selector) {
                        mySelector = options.selector;
                    }
                }
                if ($(".q-loading-overlay").length <= 0) {
                    $(mySelector).prepend(Framework.UI.loadingOverlay.print(options));
                    if (mySelector === "body") {
                        Framework.UI.loadingOverlay.show();
                    } else {
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
                        } else if (options.type === "dot") {
                            myLoaderType = "q-loader-dot";
                        } else if (options.type === "ellipse") {
                            myLoaderType = "q-loader-ellipse";
                        } else {
                            myLoaderType = "q-loader-dots";
                        }
                    } else {
                        myLoaderType = "";
                    }
                    if (options.background !== undefined && typeof options.background === "string") {
                        if (options.background === "blue") {
                            myLoaderBackgroundColor = "b-loader-background-blue";
                        } else if (options.background === "white") {
                            myLoaderBackgroundColor = "b-loader-background-white";
                        } else if (options.background === "green") {
                            myLoaderBackgroundColor = "b-loader-background-green";
                        } else if (options.background === "red") {
                            myLoaderBackgroundColor = "b-loader-background-red";
                        } else if (options.background === "black") {
                            myLoaderBackgroundColor = "b-loader-background-black";
                        } else {
                            myLoaderBackgroundColor = "b-loader-background-blue";
                        }
                    } else {
                        myLoaderBackgroundColor = "b-loader-background-blue";
                    }
                    if (options.color !== undefined && typeof options.color === "string") {
                        if (options.color === "blue") {
                            myLoaderColor = "b-loader-color-blue";
                        } else if (options.color === "white") {
                            myLoaderColor = "b-loader-color-white";
                        } else if (options.color === "green") {
                            myLoaderColor = "b-loader-color-green";
                        } else if (options.color === "red") {
                            myLoaderColor = "b-loader-color-red";
                        } else if (options.color === "black") {
                            myLoaderColor = "b-loader-color-black";
                        } else {
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
                returnHTML += '<div id="q-loading-overlay-' + myLoaderNumber + '" class="q-loading-overlay ' + myLoaderBackgroundColor + " " + myLoaderColor + " " + myLoaderType + " " + myInitialHidden + '">';
                returnHTML += '<div class="q-loader"></div>';
                returnHTML += '<div class="q-loader-text">' + myLoaderText + "</div>";
                returnHTML += "</div>";
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
            }
        },
        UploadProgress: {
            print: function() {
                var myUploadUINumber = $(".q-upload-progress").length + 1;
                var returnHTML = "";
                returnHTML += '<div id="q-upload-progress-' + myUploadUINumber + '" class="q-upload-progress">';
                returnHTML += '<span class="q-upload-progress-message">';
                returnHTML += 'Upload Progress: <span class="bold" data-content="Progress">0</span>% Complete';
                returnHTML += "</span>";
                returnHTML += '<span class="q-upload-progress-meter" style="width:0%"></span>';
                returnHTML += "</div>";
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
    Utilities: {},
    reset: function() {}
};

Framework.reset();

(function($, exports, window, document, undefined) {
    /* -- PLUGIN VARS -- */
    var pluginName = "bPopover", private = {}, _this = {}, _options = {}, _element = {}, _defaults = {
        id: null,
        placement: "top",
        message: "",
        validation: null,
        container: "body",
        offsetX: 0,
        offsetY: 0,
        arrowSize: 8,
        "class": "",
        animation: {
            duration: 250
        },
        handlers: {
            popoverClick: null,
            popoverFocus: null,
            popoverBlur: null,
            elementClick: null,
            elementFocus: null,
            elementBlur: null
        }
    };
    /* -- PRIVATE METHODS -- */
    function bPopover(element, options) {
        _options = $.extend({}, _defaults, options);
        _element = element;
        // console.log(options);
        if (typeof _options !== "object") {
            throw "ArgumentError: Must pass argument 'options' as type 'object'. ";
        }
        if ($(_element).is(":visible") === true) {
            this.init();
        }
    }
    bPopover.prototype.init = function() {
        // console.log("bPopover.prototype.init()");
        var myHTML;
        var myContainer = _options.container || "body";
        var myReturn;
        // Determines and stores popover's ID
        _options.id = _options.id || "q-popover-" + ($(".q-popover").length + 1);
        // _options.container = "body";
        // Determines and stores popover's event handlers.
        _options.handlers.popoverClick = _options.handlers.popoverClick || private.handlerPopoverOnClick;
        _options.handlers.popoverFocus = _options.handlers.popoverFocus || private.handlerPopoverOnFocus;
        _options.handlers.popoverBlur = _options.handlers.popoverBlur || private.handlerPopoverOnBlur;
        _options.handlers.elementClick = _options.handlers.elementClick || private.handlerElementOnClick;
        _options.handlers.elementFocus = _options.handlers.elementFocus || private.handlerElementOnFocus;
        _options.handlers.elementBlur = _options.handlers.elementBlur || private.handlerElementOnBlur;
        // Prepares the popover's HTML and adds it to the DOM.
        // console.log("NEW POPOVER - #q-popover-" + _options.id);
        myHTML = private.print();
        myReturn = $(myContainer).prepend(myHTML);
        // Stores a reference to the popover for later reference.
        _this = $("#" + _options.id);
        $(_this).attr("data-popover-element", "#" + $(_element).attr("id"));
        // Stores info about the popover on its element in the DOM, and in JQuery data.
        $(_element).attr("data-popover", "#" + _options.id);
        $(_element).addClass("q-popover-active");
        $(_element).data("options", _options);
        private.bindEvents();
        private.position();
        private.in();
    };
    bPopover.remove = function() {
        $(_this).remove();
    };
    private.destroy = function() {
        private.unbindEvents();
        $(_element).removeAttr("data-popover");
        $(_element).removeClass("q-popover-active");
        $(_element).removeData();
        $(_this).remove();
    };
    private.bindEvents = function() {
        // console.log("private.bindEvents()");
        // console.log(_this);
        // console.log(_element);
        // console.log(_options);
        $(_this).on("click", _options.handlers.popoverClick);
        $(_this).on("focus", _options.handlers.popoverFocus);
        $(_this).on("blur", _options.handlers.popoverBlur);
        $(_element).on("click", _options.handlers.elementClick);
        $(_element).on("focus", _options.handlers.elementFocus);
        $(_element).on("blur", _options.handlers.elementBlur);
    };
    private.unbindEvents = function() {
        if (typeof _options.handlers.popoverClick !== "undefined") $(_this).off("click", _options.handlers.popoverClick);
        if (typeof _options.handlers.popoverFocus !== "undefined") $(_this).off("focus", _options.handlers.popoverFocus);
        if (typeof _options.handlers.popoverBlur !== "undefined") $(_this).off("blur", _options.handlers.popoverBlur);
        if (typeof _options.handlers.elementClick !== "undefined") $(_element).off("click", _options.handlers.elementClick);
        if (typeof _options.handlers.elementFocus !== "undefined") $(_element).off("focus", _options.handlers.elementFocus);
        if (typeof _options.handlers.elementBlur !== "undefined") $(_element).off("blur", _options.handlers.elementBlur);
    };
    private.handlerPopoverOnClick = function(event) {
        var myElement = $(event.currentTarget).attr("data-popover-element");
        $(myElement).bPopover("hide");
        $(myElement).focus();
    };
    private.handlerPopoverOnFocus = function(event) {};
    private.handlerPopoverOnBlur = function(event) {};
    private.handlerElementOnClick = function(event) {};
    private.handlerElementOnFocus = function(event) {};
    private.handlerElementOnBlur = function(event) {
        // console.log("private.handlerElementOnBlur() - " + _options.id);
        $(event.currentTarget).bPopover("show");
    };
    private.position = function() {
        var myPlacement = _options.placement;
        var myPositionType = "absolute";
        var myOffsetX = _options.offsetX;
        var myOffsetY = _options.offsetY;
        var myPositionX = 0;
        var myPositionY = 0;
        var myHeight = $(_this).outerHeight();
        var myWidth = $(_this).outerWidth();
        var myContainer = $(_options.container);
        var myContainerRect = $(_options.container)[0].getBoundingClientRect();
        var myContainerLeft = myContainerRect.left;
        var myContainerTop = myContainerRect.top;
        var myContainerWidth = $(myContainer).outerWidth();
        var myContainerHeight = $(myContainer).outerHeight();
        var myElement = $(_element);
        var myElementRect = $(_element)[0].getBoundingClientRect();
        var myElementLeft = myElementRect.left;
        var myElementTop = myElementRect.top;
        var myElementWidth = $(myElement).outerWidth();
        var myElementHeight = $(myElement).outerHeight();
        var myArrowSize = _options.arrowSize;
        if (myPlacement === "top") {
            myPositionX = myElementLeft - myContainerLeft + (myElementWidth - myWidth) / 2 + myOffsetX;
            myPositionY = myElementTop - myContainerTop - (myElementHeight + myHeight + myArrowSize) + myOffsetY;
        } else if (myPlacement === "bottom") {
            myPositionX = myElementLeft - myContainerLeft + (myElementWidth - myWidth) / 2 + myOffsetX;
            myPositionY = myElementTop - myContainerTop + myOffsetY;
        } else if (myPlacement === "left") {
            myPositionX = myElementLeft - myContainerLeft - (myWidth + myArrowSize) + myOffsetX;
            myPositionY = myElementTop - myContainerTop - myHeight + (myElementHeight - myHeight) / 2 + myOffsetY;
        } else if (myPlacement === "right") {
            myPositionX = myElementLeft - myContainerLeft + myElementWidth + myOffsetX;
            myPositionY = myElementTop - myContainerTop - myHeight + (myElementHeight - myHeight) / 2 + myOffsetY;
        }
        $(_this).css({
            position: myPositionType,
            left: myPositionX,
            top: myPositionY
        });
    };
    private.print = function() {
        var myHTML = "";
        var myID = _options.id;
        var myPlacementClass = "";
        var myClass = _options.class;
        var myMessage = _options.message;
        var myValidationClass = "";
        var myNumber = $(".q-popover").length + 1;
        // console.log(_options.id);
        if (_options.placement) {
            myPlacementClass = "q-popover-placement-" + _options.placement;
        }
        if (_options.class && typeof _options.class === "string") {
            myClass = _options.class;
        }
        if (_options.validation) {
            myValidationClass = "b-validation-" + validation;
        }
        myHTML += '<span id="' + myID + '" class="q-popover ' + myPlacementClass + " " + myValidationClass + " " + myClass + '">';
        myHTML += '<span class="q-popover-arrow"></span>';
        myHTML += '<span class="q-popover-text">' + myMessage + "</span>";
        myHTML += "</span>";
        return myHTML;
    };
    private.update = function(element, options) {
        // console.log("private.update()");
        // 	This is run if bPopover is run on an element which
        //	already has a popover attached to it.
        if (typeof _options !== "string") {
            return;
        }
        _options = $.extend({}, _defaults, $(element).data().options, {
            update: options
        });
        _element = element;
        _this = $("#" + _options.id);
        // console.log(_this);
        // console.log(_element);
        // console.log(_options);
        // console.log(_this);
        // console.log(_options.update);
        if (_options.update === "hide") {
            private.out();
        }
        if (_options.update === "show") {
            private.in();
        }
        if (_options.update === "remove") {
            private.remove();
        }
    };
    private.in = function() {
        $(_this).addClass("q-popover-in");
    };
    private.out = function() {
        $(_this).removeClass("q-popover-in");
    };
    private.remove = function() {
        // console.log("private.remove()");
        if ($(_this).hasClass("q-popover-in") === true) {
            private.out();
            setTimeout(function() {
                private.destroy();
            }, 250);
        } else {
            private.destroy();
        }
    };
    /* -- Wrapper -- */
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            var _element = $(this);
            var _data = _element.data("bPopover");
            // console.log(_data);
            if (!_data && typeof options === "object") {
                // console.log("MAKE NEW ELEMENT");
                _element.data("bPopover", _data = new bPopover(this, options));
            } else // if (_data && typeof options === "object") {
            // _options = options;
            // private.update(this, "destroy");
            // _element.data('bPopover', (_data = new bPopover(this, options)));
            // }
            // else
            // if (_data && typeof options === "string") {
            {
                _options = options;
                private.update(this, options);
            }
        });
    };
})(jQuery, window, document);
//# sourceMappingURL=framework.js.map