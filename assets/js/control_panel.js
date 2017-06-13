/* Filename: forms.js
 *  Contains JavaScript statements and functions which are triggered by interacting 
 *  with HTML DOM elements of the webpage.
 * 
 *  --- NOTE! ---
 *  + JavaScript functions which control the layout and  physical appearance of the webpage 
 *    are contained within, 'animations.js'.
 *  + JavaScript functions which assist the page with navigation are located within, 'nav.js'.
 *  + JavaScript functions which are called when a user interacts with a form located 
 *    on the webpage are contained within, 'forms.js'.
 *    
 * ******************************************************************************************** */

var time_value = new Number();
// Holds the length of time, in miliseconds, that animations are to take place.
var window_margin = new Number();
// The distance in pixels that the browser window can lie either above or below 
// a Section and still be considered viewing an individual Section.

var url_string = new String();
var url_hash = new String();

var rate_value_search_string = new String();
// Holds a String which corresponds with a GET variable that appears in the URL 
// once the form, 'FORM TYPE #2', has responded to the form submission.

time_value = 500;
window_margin = 150;

url_string = window.location.href;
url_hash = window.location.hash;

$(document).ready(
  function () {
    
    $("#nav-link").on("mouseover", 
    // Once the user moves the cursor over the "menu icon", the 
    // click-state of the "menu icon" is changed to the "hover" state.
      function () {
        navLinkHoverState("hover", time_value);
      }
    );

    $("#nav-link").on("mouseout", 
    // Once the user moves the cursor away from the "menu icon", the 
    // click-state of the "menu icon" is changed to the "base" state.
      function () {
        navLinkHoverState("base", time_value); 
      }
    );
    
    $("#nav-link").on("click", 
    // Once the user clicks the "menu icon", the inter-section 
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
        nav_element = $(nav_selector);

        nav_left_value = $(nav_element).css("left");

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
    
   $("#options > a").on("mouseenter",
   // If the user moves the cursor over one of the menu options of the 
   // main menu of the browser window, 
   // the click-state of the menu option is changed.
      function () {
        var option_element = new Object();

        option_element = this;

        animateMenuOptions(option_element);
        // "animateMenuOptions" changes the click-state of the menu option.
      }
    );

    $("#options > a").on("mouseleave", 
    // If the user moves the cursor over one of the menu options of the 
    // main menu of the browser window, 
    // the click-state of the menu option is changed.
      function () {
        var option_element = new Object();

        option_element = this;

        animateMenuOptions(option_element);
        // "animateMenuOptions" changes the click-state of the menu option.
      }
    );
    
    $("#options > a").on("click",
    // If the user clicks on one of the menu options, the visible Positions 
    // within the Sections are found and passed on to the URL hash, 
    // the main menu side of the 
    // browser window is made visible, the click-state of the "menu icon" 
    // is changed and the browser window navigates to the Section 
    // that the user wishes to view.
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
            // the user wishes to view.
          }, (time_value * 2.5));
      }
    );

    $("#sctn_1-no_1 > fieldset").mouseenter(
    // Activates when the user moves the cursor over the "first" form question 
    // of 'FORM TYPE #1' within 'SECTION #1'.
      function () {
        validateQuestionField("start", "sctn_1-no_1");
        // The data of the form question is in the process of validation.
      }
    );

    $("#sctn_1-no_1 > fieldset").mouseleave(
    // Activates when the user moves the cursor away from the "first" form question 
    // of 'FORM TYPE #1' within 'SECTION #1'.
      function () {
        validateQuestionField("reset", "sctn_1-no_1");
        // The data of the form question is in the process of validation.
      }
    );

    $("#sctn_1-no_3 > fieldset").mouseenter(
    // Activates when the user moves the cursor over the "third" form question 
    // of 'FORM TYPE #1' within 'SECTION #1'.
      function () {
        validateQuestionField("start", "sctn_1-no_3");
        // The data of the form question is in the process of validation.
      }
    );
    
    $("#sctn_1-no_3 > fieldset").mouseleave(
    // Activates when the user moves the cursor away from the "third" form question 
    // of 'FORM TYPE #1' within 'SECTION #1'.
      function () {
        validateQuestionField("reset", "sctn_1-no_3");
        // The data of the form question is in the process of validation.
      }
    );

    $("#sctn_1-no_4 > fieldset").mouseenter(
    // Activates when the user moves the cursor over the "fourth" form question 
    // of 'FORM TYPE #1' within 'SECTION #1'.
      function () {
        validateQuestionField("start", "sctn_1-no_4");
        // The data of the form question is in the process of validation.
      }
    );

    $("#sctn_1-no_4 > fieldset").mouseleave(
    // Activates when the user moves the cursor away from the "fourth" form question 
    // of 'FORM TYPE #1' within 'SECTION #1'.
      function () {
        validateQuestionField("reset", "sctn_1-no_4");
        // The data of the form question is in the process of validation.
      }
    );

    $("#input-next_step, #input-previous_step").click(
    // Fades in the individual pages of 'FORM TYPE #3' in 'SECTION #6'.
      function () {
        animateForm(time_value);
        // "animateForm" fades in the "second" page of 'FORM TYPE #1'.
      }
    );

    $("#sctn_1-form").submit(
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
          // within the browser window to inform the user that 
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
          wndow_element = $(wndow_selector);

          $(wndow_element).prepend(alert_div_element);
          // The HTML of "alert_div_element" is inserted into the HTML of the webpage.

          $("#alrt").click(
          // Activates when the user clicks on the alert message.
            function () {
              $(this).fadeTo(time_value, 0, 
              // The alert message fades out.
                function () {
                  $(this).detach();
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

    $(window).on("load", 
      function () {
        var url_hash = new String();
        var page_dimensions_Array = new Array();
        // The calculated values for the "width" and "height" of various HTML elements 
        // of the webpage within the browser window are passed on to "page_dimensions_Array".
        var window_width = new Number();
        // Holds the numerical value of the width of the browser window.

        url_hash = window.location.hash;
        page_dimensions_Array = parseWindowDimensions();
        window_width = page_dimensions_Array[0];
        
        setupPage(time_value);
        // "setupPage" prepares for view the HTML elements of the visible Section 

        if (url_hash === "" || 
            url_hash === "#sctn_main")  {
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
    

    $(window).on("scroll", 
      function () {
        var current_position = new Number();
        // Holds a number which matches the vertical position within the webpage that is viewable.
        var url_hash = new String();

        var info_selector = new String();
        var info_element = new Object();

        var info_css_opacity_val = new String();
        // Holds the value of the CSS property, "opacity" for the HTML element 
        // using the selector, "#info".
        
        current_position = $(window).scrollTop();
        url_hash = window.location.hash;

        info_selector = "#info";
        info_element = $(info_selector);

        info_css_opacity_val = $(info_element).css("opacity");
        
        setURL(current_position, url_hash);
        // "setURL" matches the URL hash with the current viewable Section.

        if (current_position < 144) {
        // If the current location of the browser window is above the location of 
        // the logo, this condition is triggered.
          if ($("nav").css("opacity") === "1") {
          // If the main menu is visible, this condition is triggered.
            $("nav").css("opacity", "0");
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
          if ($("nav").css("opacity") === "0")  {
            $("nav").css("opacity", "1");
          }
        } // END of "if" STATEMENT which is triggered if the current location 
          // of the browser window is above the location of the logo.
      } // END of ".on("scroll") Method
    );
    
    $(window).on("hashchange",
      function () {
        var url_hash = new String();

        url_hash = window.location.hash;
        
        if (url_hash.indexOf("copyValues") === -1 && 
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
          
          nav_selector = "nav";
          nav_element = $(nav_selector);
          
          nav_width_string = $(nav_element).css("width");
          nav_left_string = $(nav_element).css("left");
          
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

          if (nav_width_val === nav_left_val) {
          // If the main menu of the 
          // browser window is not visible, this condition is triggered.
            
            var current_position = new Number();
            // Holds a number which matches the vertical position 
            // within the webpage that is viewable.
            
            current_position = $(window).scrollTop();
            
            animatePageElements(time_value);
            // "animatePageElements" is called to animate the blocks 
            // that are contained within an individual "window".
          } // END of "if" STATEMENT which is triggered if the visible Section 
            // is now 'MAIN LANDING SECTION.
        } // END of "if" STATEMENT which is triggered if the main menu is not 
          // visible and the URL hash is not blank.
      } // END of ".on("hashchange")" Method
    );
    
    $(window).on("resize", 
      function () {
        setupPage(time_value);
        // "setupPage" prepares for view the HTML elements of the visible Section 
      } // END of ".on("resize")" Method
    );

  }
);