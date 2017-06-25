/* Filename: forms.js
 *  Contains JavaScript statements and functions which are triggered by interacting 
 *  with HTML DOM elements of the webpage.
 * 
 *  --- NOTE! ---
 *  + JavaScript functions which control the layout and  physical appearance of the webpage 
 *    are contained within, 'animations.js'.
 *  + JavaScript functions which assist the page with navigation are located within, 'nav.js'.
 *  + JavaScript functions which are called when a visitor interacts with a form located 
 *    on the webpage are contained within, 'forms.js'.
 *    
 * ******************************************************************************************** */

var $jQ = jQuery.noConflict();

var time_value = new Number();
// Holds the length of time, in miliseconds, that animations are to take place.
var window_margin = new Number();
// The distance in pixels that the browser window can lie either above or below 
// a Section and still be considered viewing an individual Section.

var url_hash = new String();

time_value = 500;
window_margin = 150;

url_hash = window.location.hash;

$jQ(document).ready(
  function () {
    
    $jQ("#nav-link").on("mouseover", 
    // Once the visitor moves the cursor over the "menu icon", the 
    // click-state of the "menu icon" is changed to the "hover" state.
      function () {
        navLinkHoverState("hover", time_value);
      }
    );

    $jQ("#nav-link").on("mouseout", 
    // Once the visitor moves the cursor away from the "menu icon", the 
    // click-state of the "menu icon" is changed to the "base" state.
      function () {
        var nav_selector = new String();
        var nav_element = new Object();

        var nav_left_val = new String();
        // Holds the value of the CSS property, "left", for the HTML 
        // element using the selector, "nav".

        nav_selector = "nav";
        nav_element = $jQ(nav_selector);

        nav_left_val = $jQ(nav_element).css("left");

        if (nav_left_val !== "0px") {
        // If the main menu is not visible, this condition is triggered.
          navLinkHoverState("base", time_value); 
        }
      }
    );
    
    $jQ("#nav-link").on("click", 
    // Once the visitor clicks the "menu icon", the inter-section 
    // navigation that appears on the left side of the browser window 
    // is made visible and the click-state of the "menu icon" is changed 
    // to the "first" "click" state.
      function () {
        var nav_selector = new String();
        var nav_element = new Object();
        
        var nav_left_value = new String();
        // Holds the value of the CSS property, "left", of the 
        // HTML element using the selector, "nav".

        nav_selector = "nav";
        nav_element = $jQ(nav_selector);

        nav_left_value = $jQ(nav_element).css("left");

        if (nav_left_value === "0px") {
        // If the main menu of the 
        // browser window, this condition is triggered.
          setTimeout(
            function () {
              navLinkHoverState("base", time_value);
              // The click-state of the "menu icon" is changed to the "base" 
              // state.
            }, (time_value * 2.5)
          );
        } else {
        // Otherwise, if the navigation is not viewable, this condition is 
        // triggered.
          navLinkHoverState("click", time_value);
          // The click-state of the "menu icon" is changed to the "first" 
          // "click" state.
        }
        
        assembleURLString(time_value);
        // "assembleURLString" determines the Positions of the ".copy" elements 
        // contained in the various Sections.
        
        animateSideNav(time_value);
        // "animateSideNav" animates the inter-section navigation that appears 
        // on the left of the browser window into view.
      }
    );
    
   $jQ("#options > a").on("mouseenter",
   // If the visitor moves the cursor over one of the menu options of the 
   // main menu of the browser window, 
   // the click-state of the menu option is changed.
      function () {
        var option_element = new Object();

        option_element = this;

        animateMenuOptions(option_element);
        // "animateMenuOptions" changes the click-state of the menu option.
      }
    );

    $jQ("#options > a").on("mouseleave", 
    // If the visitor moves the cursor over one of the menu options of the 
    // main menu of the browser window, 
    // the click-state of the menu option is changed.
      function () {
        var option_element = new Object();

        option_element = this;

        animateMenuOptions(option_element);
        // "animateMenuOptions" changes the click-state of the menu option.
      }
    );
    
    $jQ("#options > a").on("click",
    // If the visitor clicks on one of the menu options, the visible Positions 
    // within the Sections are found and passed on to the URL hash, 
    // the main menu side of the 
    // browser window is made visible, the click-state of the "menu icon" 
    // is changed and the browser window navigates to the Section 
    // that the visitor wishes to view.
      function () {
        var option_element = new Object();

        option_element = this;
        
        assembleURLString(time_value);
        // "assembleURLString" determines the Positions of the ".copy" elements 
        // contained in the various Sections.
        animateSideNav(time_value);
        // "animateSideNav" animates the inter-section navigation that appears 
        // on the left of the browser window into view.
        
        setTimeout(
          function () {
            navLinkHoverState("base", time_value);
            // The click-state of the "menu icon" is changed to "base".
            activateSideNav(option_element);
            // "activateSideNav" navigates the browser window to the Section 
            // the visitor wishes to view.
          }, (time_value * 2.5));
      }
    );

    $jQ("#input-full_name").mouseenter(
    // Activates when the visitor moves the cursor over the form questions which 
    // this visitor enters their full name.
      function () {
        validateQuestionField("start", "full_name");
        // The form question is initialized.
      }
    ).mouseleave(
    // Activates when the visitor moves the cursor away from the form question which 
    // this visitor enters their full name.
      function () {
        validateQuestionField("reset", "full_name");
        // The data of the form question is checked for validity.
      }
    ).focus(
      function () {
        var input_element = this;

        var question_value = new String();
        // Holds a String which identifies the form question in which the visitor 
        // enters their full name.

        var full_name_default_value = new String();
        // Holds a String which matches the default value for the form question 
        // which contains the full name.
        var full_name_error_value = new String();
        // Holds a String which matches the error message which appears if 
        // the visitor enters invalid data.

        full_name_default_value = "Please enter your full name";
        full_name_error_value = "Please include a space in your full name";

        question_value = $jQ(input_element).attr("id").slice(6);
        
        formQuestionFocusCheck(question_value, full_name_default_value, full_name_error_value);
      }
    ).blur(
      function () {
          var input_element = this;

          var question_value = new String();
          // Holds a String which identifies the form question in which the visitor 
          // enters their full name.

          var full_name_default_value = new String();
          // Holds a String which matches the default value for the form question 
          // which contains the full name.
          var full_name_error_value = new String();
          // Holds a String which matches the error message which appears if 
          // the visitor enters invalid data.

          full_name_default_value = "Please enter your full name";
          full_name_error_value = "Please include a space in your full name";

          question_value = $jQ(input_element).attr("id").slice(6);
          
          formQuestionFocusCheck(question_value, full_name_default_value, full_name_error_value);
        }
      );

    $jQ("#input-address_1").mouseenter(
    // Activates when the visitor moves the cursor over the form questions which 
    // this visitor enters their street number and street.
      function () {
        validateQuestionField("start", "address_1");
        // The data of the form question is in the process of validation.
      }
    ).mouseleave(
      function () {
        validateQuestionField("reset", "address_1");
      }
    ).focus(
      function () {
        validateQuestionField("start", "address_1");
      }
    ).blur(
      function () {
        validateQuestionField("reset", "address_1");
      }
    );
    
     $jQ("#input-address_2").mouseenter(
    // Activates when the visitor moves the cursor over the form questions which 
    // this visitor enters an apartment number.
      function () {
        validateQuestionField("start", "address_2");
        // The data of the form question is in the process of validation.
      }
    ).mouseleave(
      function () {
        validateQuestionField("reset", "address_2");
      }
    ).focus(
      function () {
        validateQuestionField("start", "address_2");
      }
    ).blur(
      function () {
        validateQuestionField("reset", "address_2");
      }
    );

    $jQ("#input-city").mouseenter(
    // Activates when the visitor moves the cursor over the form question which 
    // the visitor would enter their city name.
      function () {
        validateQuestionField("start", "city");
        // The data of the form question is in the process of validation.
      }
    ).mouseleave(function () {
        validateQuestionField("reset", "city");
      }
    ).focus(function () {
        validateQuestionField("start", "city");
      }
    ).blur(function () {
        validateQuestionField("reset", "city");
      }
    );
;

    $jQ("#input-state").mouseenter(
    // Activates when the visitor moves the cursor over the form question which 
    // the visitor would enter the state name.
      function () {
        validateQuestionField("start", "state");
        // The data of the form question is in the process of validation.
      }
    );

    $jQ("#input-state").mouseleave(
    // Activates when the visitor moves the cursor away from the form question which 
    // the visitor would enter the state name.
      function () {
        validateQuestionField("reset", "state");
        // The data of the form question is in the process of validation.
      }
    );

    $jQ("#input-zip_code").mouseenter(
    // Activates when the visitor moves the cursor over the form question which 
    // the visitor would enter their zip code.
      function () {
        validateQuestionField("start", "zip_code");
        // The data of the form question is in the process of validation.
      }
    );

    $jQ("#input-zip_code").mouseleave(
    // Activates when the visitor moves the cursor away from the form question which 
    // the visitor would enter their zip code.
      function () {
        validateQuestionField("reset", "zip_code");
        // The data of the form question is in the process of validation.
      }
    );

    $jQ("#input-card_num").mouseenter(
    // Activates when the visitor moves the cursor over the form question which 
    // the visitor would enter their credit card number.
      function () {
        validateQuestionField("start", "card_num");
        // The data of the form question is in the process of validation.
      }
    );

    $jQ("#input-card_num").mouseleave(
    // Activates when the visitor moves the cursor away from the form question which 
    // the visitor would enter their credit card number.
      function () {
        validateQuestionField("reset", "card_num");
        // The data of the form question is in the process of validation.
      }
    );

    $jQ("#input-security_code").mouseenter(
    // Activates when the visitor moves the cursor over the form question which 
    // the visitor would enter the 3 digit security code of their credit card number.
      function () {
        validateQuestionField("start", "security_code");
        // The data of the form question is in the process of validation.
      }
    );

    $jQ("#input-security_code").mouseleave(
    // Activates when the visitor moves the cursor away from the form question which 
    // the visitor would enter the 3 digit security code of their credit card number.
      function () {
        validateQuestionField("reset", "security_code");
        // The data of the form question is in the process of validation.
      }
    );

    $jQ("#input-next_step, #input-previous_step").click(
    // Fades in the individual pages of 'FORM TYPE #3' in 'SECTION #6'.
      function () {
        animateForm(time_value);
        // "animateForm" fades in the "second" page of 'FORM TYPE #1'.
      }
    );

    $jQ("#sctn_1-request_tickets").submit(
    // Validates the data contained with either 'FORM TYPE #1', 
    // 'FORM TYPE #2', or 'FORM TYPE #3'.
      function (event) {
        var form_complete_flag = new Boolean;
        // A Boolean which is set to true if the all of the data 
        // of a form is proper.
        
        var wndow_selector = new String();
        var wndow_element = new Object();

        form_complete_flag = validateForm();
        // If the data of the form is proper, the value 
        // of "form_complete_flag" will be "true". 
        // 
        // If any of the data of the form is improper, 
        // the value of "form_complete_flag" will be 
        // false.
        if (form_complete_flag === false) {
        // If the form that this function processes contains 
        // improper data, then this condition is triggered.
          
          var alert_div_element = new String();
          // Holds HTML which makes up an alert which appears 
          // within the browser window to inform the visitor that 
          // input withing the form needs to change.

          var alrt_selector = new String();
          var alrt_element = new Object();

          alert_div_element = 
            "<div id=\"alrt\">" + 
            "  <div>" + 
            "    <div>" + 
            "      <span>Alert</span>" + 
            "      <p>This form needs more information than you provided.</p>" +
            "      <p>Please check the question fields that are surrounded by red borders.</p>" +  
            "      <p>Click the screen to close this alert.</p></div>" + 
            "    </div>" + 
            "  </div>" + 
            "</div>";

          wndow_selector = "#wndow-sctn_2";
          wndow_element = $jQ(wndow_selector);

          $jQ(wndow_element).prepend(alert_div_element);
          // The HTML of "alert_div_element" is inserted into the HTML of the webpage.

          $jQ("#alrt").click(
          // Activates when the visitor clicks on the alert message.
            function () {
              $jQ(this).fadeTo(time_value, 0, 
              // The alert message fades out.
                function () {
                  $jQ(this).detach();
                  // The HTML code is removed from the webpage.
                }
              );
            }
          );

          event.preventDefault();
          // Code which validates the Method.
        }
      }
    );

    $jQ(window).on("load", 
      function () {
        var url_hash = new String();
        
        var page_dimensions_Array = new Array();
        // The calculated values for the "width" and "height" of various HTML elements 
        // of the webpage within the browser window are passed on to "page_dimensions_Array".
        var window_width = new Number();
        // Holds the numerical value of the width of the browser window.

        var sctn_main_string = new String();

        url_hash = window.location.hash;
        
        page_dimensions_Array = parseWindowDimensions();
        window_width = page_dimensions_Array[0];
        
        sctn_main_string = "#sctn_main";

        setupPage(time_value);
        // "setupPage" prepares for view the HTML elements of the visible Section 

        if (url_hash === "" || 
            url_hash === sctn_main_string)  {
        // If the URL hash is blank or is "#sctn_main", this condition 
        // is triggered.
          if (window_width > 980) {
          // If the width of the browser window is greater than 980px, 
          // this condition is triggered.
            animateInfoElement(time_value);
            // The HTML content contained within 'MAIN LANDING SECTION' is 
            // faded into view.
          } // END of "if" STATEMENT which is triggered if the browser 
            // window is greater than 980px.
        } // END of "if" STATEMENT which is triggered if the URL hash 
          // is blank or is "#sctn_main".

        
      } // END of ".on("load")" Method
    );
    

    $jQ(window).on("scroll", 
      function () {
        var current_position = new Number();
        // Holds a number which matches the vertical position within the webpage that is viewable.
        var url_hash = new String();

        var info_selector = new String();
        var nav_selector = new String();

        var info_element = new Object();
        var nav_element = new Object();

        var info_css_opacity_val = new String();
        // Holds the value of the CSS property, "opacity" for the HTML element 
        // using the selector, "#info".
        
        current_position = $jQ(window).scrollTop();
        url_hash = window.location.hash;

        info_selector = "#info";
        nav_selector = "nav";

        info_element = $jQ(info_selector);
        nav_element = $jQ(nav_selector);

        info_css_opacity_val = $jQ(info_element).css("opacity");
        
        setURL(current_position, url_hash);
        // "setURL" matches the URL hash with the current viewable Section.

        if (current_position < 144) {
        // If the current location of the browser window is above the location of 
        // the logo, this condition is triggered.
          if ($jQ(nav_element).css("opacity") === "1") {
          // If the main menu is visible, this condition is triggered.
            $jQ(nav_element).css("opacity", "0");
            // The opacity of the main menu is changed to 0.
          } // END of "if" STATEMENT which is triggered if the main menu 
            // is visible.

          if (current_position === 0 && 
              info_css_opacity_val === "0") {
          // If the current location of the browser window is 0 and the 
          // HTML content contained within 'MAIN LANDING SECTION' has an 
          // opacity of 0, then this condition is triggered.
            animateInfoElement(time_value);
            // The HTML content contained within 'MAIN LANDING SECTION' is 
            // faded into view.
          } // END of "if" STATEMENT which is triggered if the current 
            // location of the browser window is 0 and the HTML content 
            // within 'MAIN LANDING SECTION' has an opacity of 0.
        } else {
          if ($jQ(nav_element).css("opacity") === "0")  {
            $jQ(nav_element).css("opacity", "1");
          }
        } // END of "if" STATEMENT which is triggered if the current location 
          // of the browser window is above the location of the logo.
      } // END of ".on("scroll") Method
    );
    
    $jQ(window).on("hashchange",
      function () {
        var url_hash = new String();

        var nav_visible_search_string = new String();
        // Holds the String, "copyValues=", which is searched for in the value of, 
        // "url_hash".
        var sctn_blank_search_string = new String();
        // Holds a blank String, which is used to determine if the browser has 
        // just loaded the webpage from the top.

        url_hash = window.location.hash;
          
        nav_visible_search_string = "copyValues=";
        sctn_blank_search_string = "";

        if (url_hash.indexOf(nav_visible_search_string) === -1 && 
            url_hash !== "") {
        // If the inter-section navigation which appears on the left 
        // of the browser window is not visible and the URL hash 
        // is not blank, then this condition is triggered.
          
          var nav_selector = new String();
          var nav_element = new Object();

          var nav_width_string = new String();
          // Holds the value of the CSS property, "width", of the HTML element 
          // using the selector, "nav".
          var nav_left_string = new String();
          // Holds the value of the CSS property, "left", of the HTML element 
          // using the selector, "nav".

          var px_search_string = new String();
          // Holds a String which is searched for within the value of 
          // "nav_width_string."
          var px_search_index_num = new Number();
          // Holds the location within the value of, "nav_width_string", that 
          // the value, "px_search_index_num", appears.
          var nav_width_val = new Number();
          // Holds the numeric value of the width of the HTML element, "nav".
          var nav_left_val = new Number();
          // Holds the numeric value of the CSS property, "left", of the 
          // HTML element, "nav".

          var section_value_search_string = new String();
          // Holds the String, "sctn_", which is searched for in the value of, 
          // "url_hash".
          var section_value_search_index_num = new Number();
          // Holds the location within, "url_hash", that the String, "sctn_", is 
          // located.

          var section_value = new String();
          
          nav_selector = "nav";
          nav_element = $jQ(nav_selector);
          
          nav_width_string = $jQ(nav_element).css("width");
          nav_left_string = $jQ(nav_element).css("left");
          
          px_search_string = "px";
          px_search_index_num = nav_width_string.indexOf(px_search_string);

          nav_width_val = nav_width_string.substring(0, px_search_index_num);
          // The numeric value of the width of the HTML element, "nav", is 
          // extracted from the value of "nav_width_string".
          nav_width_val = parseFloat(nav_width_val);
          // The value of "nav_width_val" is changed to an Number.
          nav_width_val = Math.round(nav_width_val);
          // The value of "nav_width_val" is rounded up to the nearest Integer.

          px_search_index_num = nav_left_string.indexOf(px_search_string);
          nav_left_val = nav_left_string.substring(1, px_search_index_num);
          // The numberic value of the CSS property, "left", of the HTML element 
          // "nav", is extracted from the value of "nav_left_val".
          // 
          // The "-" character is not included so that the absolute value of the 
          // CSS property, "left", is taken.
          nav_left_val = parseFloat(nav_left_val);
          // The value of "nav_left_val" is changed to a Number.
          nav_left_val = Math.round(nav_left_val);
          // The numeric value of "nav_left_val" is rounded to an integer.

          section_value_search_string = "sctn_";

          section_value_search_index_num = url_hash.indexOf(section_value_search_string);
          section_value_search_index_num = section_value_search_index_num + section_value_search_string.length;

          section_value = url_hash.charAt(section_value_search_index_num);

          if (nav_width_val === nav_left_val) {
          // If the main menu of the 
          // browser window is not visible, this condition is triggered.
            
            var current_position = new Number();
            // Holds a number which matches the vertical position 
            // within the webpage that is viewable.
            
            current_position = $jQ(window).scrollTop();

            if (section_value === "5")  {
            // If the viewable section is SECTION #5, then this condition 
            // is triggered.

              var listing_search_string = new String();
              // Holds the String, "listing=" which will be searched for in the value of,  
              // "url_hash".

              listing_search_string = "listing=";

              if (url_hash.indexOf(listing_search_string) !== -1) {
              // If the visitor has made a request to view a job listing, this condition 
              // is triggered.

                var listing_val = new String();
                // Holds a Character representing the listing the link within the <a> element 
                // refers to.
                var url_hash_length = new Number();
                // Holds the total number of characters contained in the "src" attribute of the 
                // <a> element.

                var listing_selector = new String();
                var listings_selector = new String();

                var listing_element = new Object();
                var listings_elements = new Object();

                var not_visible_css = new Object();
                var visible_css = new Object();

                var time_value_short = new Number();
                              
                url_hash_length = url_hash.length;

                listing_val = url_hash.charAt(url_hash_length - 1);

                listing_selector = "#sctn_5-job_listing-" + listing_val;
                listings_selector = ".sctn_5-listing";

                listing_element = $jQ(listing_selector);
                listings_elements = $jQ(listings_selector);

                not_visible_css = {
                  display: "none"
                };

                visible_css = {
                  display: "block", 
                  opacity: "0"
                };

                time_value_short = time_value / 1.25;

                $jQ(listings_elements).css(not_visible_css);
                $jQ(listings_elements).removeClass();
                $jQ(listings_elements).addClass("sctn_5-listing not_visible");

                $jQ(listing_element).removeClass();
                $jQ(listing_element).addClass("sctn_5-listing visible");
                $jQ(listing_element).css(visible_css);
                $jQ(listing_element).fadeTo(time_value_short, 1);

              }// END of "if" STATEMENT which is triggered if the visible Section 
              // is now 'MAIN LANDING SECTION.
            }
            
            animatePageElements(time_value);
            // "animatePageElements" is called to animate the blocks 
            // that are contained within an individual "window".
          }
        } // END of "if" STATEMENT which is triggered if the main menu is not 
          // visible and the URL hash is not blank.
      } // END of ".on("hashchange")" Method
    );
    
    $jQ(window).on("resize", 
      function () {
        setupPage(time_value);
        // "setupPage" prepares for view the HTML elements of the visible Section 
      } // END of ".on("resize")" Method
    );

  }
);