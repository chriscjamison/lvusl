/* Filename: nav.js
 *  Contains all JavaScript functions and behavior that controls the 
 *  inter-section navigation of the webpage.
 * 
 *  --- NOTE! ---
 *  + JavaScript statements and functions which are triggered by interacting 
 *    with HTML DOM elements of the webpage are contained within, 'control_panel.js'.
 *  + JavaScript functions which control the layout and  physical appearance of the webpage 
 *    are contained within, 'animations.js'.
 *  + JavaScript functions which are called when a user interacts with a form located 
 *    on the webpage are contained within, 'forms.js'.
 * 
 *  --- FUNCTIONS CONTAINED WITHIN 'nav.js' ---
 *    navLinkHoverState
 *      Animates the click states of the menu icon located in the upper left 
 *      of the browser window.
 *      
 *      Called by: 
 *        + $jQ("#nav-link").on("mouseover") (control_panel.js)
 *        + $jQ("#nav-link").on("mouseout") (control_panel.js)
 *        + $jQ("#nav-link").on("click") (control_panel.js)
 *        + $jQ("#options > a").on("click") (control_panel.js)
 *    
 *    determineVisibleCopyElement
 *      Determines the HTML element using the selector, ".copy", which is visible within 
 *      an individual "window pane". It passes a Number back to, "setURL", the 
 *      function which makes a call to this function.
 *      
 *      Called by:
 *        + assembleURLString
 *        + setURL (animations.js)
 * 
 *    assembleURLString
 *      Passes a URL hash which contains data which defines the currently visible 
 *      "window pane" within each individual Section. That URL hash is then added 
 *      to the URL string currently in the browser window.
 * 
 *      Called by:
 *        + $jQ("#options > a").on("click") (control_panel.js)
 *        + $jQ("#nav-link").on("click") (control_panel.js)
 * 
 *    activateSideNav
 *      Places the browser window at a vertical position which allows for a Section 
 *      to be completely visible once the inter-section navigation which appears 
 *      on the left side of the browser window appears.
 * 
 *      Called by:
 *        + $jQ("#options > a").on("click") (control_panel.js)
 * 
 * ******************************************************************************************** */

function navLinkHoverState(new_class, time_value) {
  /* **************** **************** **************** **************** **************** 
   *  Animates the click states of the menu icon located in the upper left 
   *  of the browser window.
   * 
   *  The click state of the menu icon shifts based upon the value of, "new_class".
   * **************** **************** **************** **************** **************** */

  var nav_link_selector = new String();
  var nav_selector = new String();
  
  var nav_link_element = new Object();
  var nav_element = new Object();

  var current_class = new String();

  var nav_left_value = new String();
  // Holds the value of the CSS property, "left", for the HTML element 
  // using the selector, "nav".

  nav_link_selector = "#nav-link";
  nav_selector = "nav";

  nav_link_element = $jQ(nav_link_selector);
  nav_element = $jQ(nav_selector);

  current_class = $jQ(nav_link_element).attr("class");

  new_class = "nav-" + new_class;

  nav_left_value = $jQ(nav_element).css("left");

  if (new_class === "nav-base") {
  // If the new click state is, "base", this condition is triggered.

    $jQ(nav_link_element).fadeTo((time_value / 4), 0, 
    // The menu icon is faded out from an opacity of 1 to 0.

      function () {
        $jQ(nav_link_element).removeClass();
        // The current class defining the click state is removed.
        $jQ(nav_link_element).addClass("nav-base");
        // The new class defining the "base" click state is added.
        $jQ(nav_link_element).fadeTo((time_value / 8), 1);
        // The menu icon is faded in from an opacity of 0 to 1.
      }
    );
  }
   
  if (new_class === "nav-hover" && 
      nav_left_value !== "0px") {
  // If the new click state is, "hover", and the header is visible, 
  // then this condition is triggered.

    $jQ(nav_link_element).fadeTo((time_value / 4), 0, 
    // The menu icon is faded out from an opacity of 1 to 0.

      function () {
        $jQ(nav_link_element).removeClass();
        // The current class defining the click state is removed.
        $jQ(nav_link_element).addClass("nav-hover");
        // The new class defining the "hover" click state is added.
        $jQ(nav_link_element).fadeTo((time_value / 8), 1);
        // The menu icon is faded in from an opacity of 0 to 1.
      }
    );
  }
  
  if (new_class === "nav-click")  {
  // If the new click state is, "click", then this condition is triggered.

    $jQ(nav_link_element).fadeTo((time_value / 3), 0, 
    // The menu icon is faded out from an opacity of 1 to 0.

      function () {
        $jQ(nav_link_element).removeClass();
        // The current class defining the click state is removed.
        $jQ(nav_link_element).addClass("nav-click_1");
        // The initial "click" click state is added.
        $jQ(nav_link_element).fadeTo((time_value / 3), 1, 
        // The menu icon is faded in from an opacity of 0 to 1.
          function () {
            $jQ(nav_link_element).fadeTo((time_value / 4), 0, 
            // The menu icon is faded out from an opacity of 0 to 1.

              function () {
                $jQ(nav_link_element).removeClass();
                // The class defining the intitial "click" click state is removed.
                $jQ(nav_link_element).addClass("nav-click_2");
                // The final "click" click state is added.
                $jQ(nav_link_element).fadeTo((time_value / 3), 1);
                // The menu icon is faded in from an opacity of 0 to 1.
              }
            );
          }
        ); 
      }
    );
  }
} /* **************** END OF FUNCTION "navLinkHoverState" **************** */

function determineVisibleCopyElement(wndow_selector)  {
  /* **************** **************** **************** **************** **************** 
   *   Determines the HTML element using the selector, ".copy", which is visible within 
   *   an individual "window pane". It passes a Number back to, "setURL", the 
   *   function which makes a call to this function.
   * **************** **************** **************** **************** **************** */

  var wndow_element = new Object();
  var copy_elements = new Array();
  
  var wndow_element_copy_length = new Number();
  // Holds the number of HTML elements using the selector, ".copy", that are contained 
  // within an element using the selector, "#wndow_sctn-X".
  // 
  // The selector of the element that contains the ".copy" elements 
  // would be, "#wndow-sctn_1", if the visible Section was 'SECTION #1'.
  var visible_copy_element_val = new Number();
  // Holds a Number which allows for the function to cycle through the HTML elements 
  // using the selector, ".copy", that lie within a given visible Section.
  // 
  // This number matches the "child" index that ".copy" elements are given that lie 
  // within elements using selectors similary to "#wndow-sctn_X".

  var copy_selector = new String();

  var copy_element_visible_flag = new Boolean();
  // This Boolean is made true once the "while" loop finds a visible element using the 
  // selector, ".copy", that lies within an visible Section.
      
  wndow_element = $jQ(wndow_selector);   

  wndow_element_copy_length = $jQ(wndow_element).children(".copy").length;
  
  visible_copy_element_val = 2;
  copy_element_visible_flag = false;
  
  if (wndow_selector !== "#wndow-sctn_main")  {
  // If the visible Section is not the 'MAIN LANDING SECTION', this condition is triggered.

    while (visible_copy_element_val < (wndow_element_copy_length + 2) && 
           copy_element_visible_flag === false) {
    // This loop runs while there are elements using the selector, ".copy", within a 
    // visible Section that remain to process and the visible ".copy" element has 
    // not been located.

      copy_selector = ".copy:nth-child(" + visible_copy_element_val.toString() + ")";
      // "copy_selector" is made to refer to a ".copy" element which matches the "child" 
      // index within the DOM of the webpage.
      
      if ($jQ(wndow_element).children(copy_selector).css("display") === "none" || 
          $jQ(wndow_element).children(copy_selector).css("display") === undefined) {
      // If the element using the selector, ".copy" is not visible, this condition 
      // is triggered.

        visible_copy_element_val++;
        // The value of the "index" is incremented.
      } else  {
      // Otherwise, if the visible element using the selector, ".copy" is located 
      // this condition is triggered.

        copy_element_visible_flag = true;
        // The current element using the selector, ".copy", is flagged to be 
        // visible.
      }
    }

    if (visible_copy_element_val === (wndow_element_copy_length + 2) && 
        copy_element_visible_flag === false)  {
    // If all of the ".copy" elements have been processed and a visible element 
    // has not been found, this condition is triggered.

      visible_copy_element_val = -1;
      // Since all of the ".copy" elements have been cycled through, this Section 
      // is passed a value to note that this Section has never been visible.
    } else {
    // Otherwise, if a visible ".copy" element has been found, this condition 
    // is triggered.

      visible_copy_element_val = visible_copy_element_val - 2;
      // A value which matches the index of the child element in the DOM is 
      // passed to "visible_copy_element_val".
    }
  }

  return visible_copy_element_val;
  // A value noting the element using the selector, ".copy", which is visible 
  // is passed on.
} /* **************** END OF FUNCTION "determineVisibleCopyElement" **************** */

function assembleURLString(time_value)  {
  /* **************** **************** **************** **************** **************** 
   *  Passes a URL hash which contains data which defines the currently visible 
   *  "window pane" within each individual Section. That URL hash is then added 
   *  to the URL string currently in the browser window.
   * **************** **************** **************** **************** **************** */

  var url_hash = new String();
   
  var wndow_elements = new Object();
  var copy_elements = new Object();
  
  var copy_values_string = new String();
  // Holds the value for each HTML element using the selector, ".copy", 
  // within a parent HTML element using the selector, "#wndow_sctn-X", 
  // within a String which becomes the URL Hash for this webpage once 
  // this function is complete.
  var visible_element_val = new String();
  // Holds a character or String which represents the HTML element 
  // using the selector, ".copy", within an individual Section 
  // which is visible.

  var inc = new Number();

  wndow_elements = $jQ(".wndow");
  
  copy_values_string = "copyValues=";
  
  url_hash = window.location.hash;
  
  if (url_hash.indexOf(copy_values_string) === -1)  {
  // If the inter-section navigation on the left side of the browser is not 
  // visible, this condition is triggered.

    $jQ(wndow_elements).each(
    // For each HTML element using the selector, ".wndow", this 
    // loop runs.

      function () {
        wndow_element = this;

        current_window_id = "#" + $jQ(wndow_element).attr("id");
        // A selector is formed using the "id" of an individual 
        // ".wndow", element.

        if (current_window_id !== "#wndow-sctn_main")  {
        // If the ".wndow" element is not, 'MAIN LANDING SECTION',
        // this condition is triggered.
          visible_copy_element_num = determineVisibleCopyElement(current_window_id);
          // The index within the DOM, of the visible element using the selector, 
          // ".copy", of this Section, is passed to "visible_copy_element_num".

          if (copy_values_string.charAt(copy_values_string.length - 1) === "=") {
          // If the value this loop attaches to the URL hash is the first value within 
          // the string, this condition is triggered.

            if (visible_copy_element_num === -1)  {
            // If there is not a visible ".copy" element, this condition 
            // is triggered.
              visible_element_val = "-";
            } else  {
            // Otherwise, if a ".copy" element is visible, this condition 
            // is triggered.
              visible_element_val = visible_copy_element_num.toString();
            } 
          } else  {
          // Otherwise, if the value this loop attaches to the URL hash is not the first 
          // value within the string, this condition is triggered.

            if (visible_copy_element_num === -1)  {
            // If there is not a visible ".copy" element, this condition 
            // is triggered.

              visible_element_val = ",-";
            } else  {
            // Otherwise, if there is a visible ".copy" element, this condition 
            // is triggered.

              visible_element_val = "," + visible_copy_element_num.toString();
            }
          }
          
          copy_values_string = copy_values_string + visible_element_val;
          // The value representing the ".copy" element which is visible, 
          // or not visible, is added to the string.
        }
      }
    );

    if (url_hash.indexOf("#") === -1) {
    // If the hash of the URL is blank, this condition is triggered.

      copy_values_string = "#" + copy_values_string;
    } else  {
    // Otherwise, if the hash of the URL contains a value, 
    // this condition is triggered.

      if (url_hash.indexOf("?") === -1) {
      // If the URL does not contain a GET variable, this condition is triggered.

        copy_values_string = "?" + copy_values_string;
      } else {
      // Otherwise, if the URL does contain a GET variable, 
      // this condition is triggered.

        copy_values_string = "&" + copy_values_string;
      }
    }
    
    copy_values_string = window.location.hash + copy_values_string;
    // The value representing the ".copy" element which is visible, 
    // or not visible, is added to the string.

    window.location.hash = copy_values_string;
 
  } else  {
  // Otherwise, if the inter-section navigation on the left side of the 
  // browser window is visible, this condition is triggered.

    var url_hash_data_Array = new Array();
    // Holds the raw values contained with the GET variable, "copyValues".
    var url_hash_values_Array = new Array();
    // Holds the remains, aside from the commas, of the GET variable, "copyValues".
    
    var copy_selector = new String();
    var wndow_selector = new String();

    var wndow_elements = new Array();
    var copy_elements = new Array();
    var wndow_element = new Object();
    var copy_element = new Object();

    var element_visible_css = new Object();

    var url_hash_data_array_value = new Number();

    var inc = new Number();

    wndow_selector = ".wndow";

    wndow_elements = $jQ(wndow_selector);

    element_visible_css = {
      display: "block"
    };
    
    url_hash_data_Array = url_hash.split("=");
    // The raw GET variables contained within "url_hash_data_Array" are seperated 
    // from the names of their variables.

    if (url_hash_data_Array[0].indexOf("copyValues") === -1)  {
    // If the first index of "url_hash_data_Array" does not contain, "copyValues", 
    // there are other GET variables. If there are other GET variables, this 
    // condition is triggered.

      url_hash_data_array_value = 2;
      // If there are other GET variables, the index that contains the raw data 
      // for "copyValues", is contained in index 2.
    } else {
    // Otherwise if the first index of "url_hash_data_Array" does contain "copyValues", 
    // there are not other GET variables. If there are not other GET variables, 
    // this condition is triggered.

      url_hash_data_array_value = 1;
      // If there are not other GET variables, the index that contains the raw data 
      // for "copyValues", is contained in index 1.
    }

    url_hash_values_Array = url_hash_data_Array[url_hash_data_array_value].split(",");
    // The numerical and character values describing the visible, or not visible, ".copy" 
    // elements are passed into "url_hash_values_Array".

    inc = 0;

    $jQ(wndow_elements).each(
    // For each HTML element using the selector, ".wndow", this 
    // loop runs.

      function () {
        wndow_element = this;
    
        if ($jQ(wndow_element).attr("id") !== "wndow-sctn_main") {
        // If the ".wndow" element is not, 'MAIN LANDING SECTION',
        // this condition is triggered.

          if (url_hash_values_Array[inc] !== "-") {
          // If the value contained within the index represented by, "inc", is visible, 
          // this condition is triggered.

            copy_selector = "#" + $jQ(wndow_element).attr("id") + " > .copy:nth-child(" + (parseInt(url_hash_values_Array[inc]) + 3) + ")";
            // A selector is formed using the "id" of an individual ".wndow" element 
            // this loop processes and the value held within "url_hash_values_Array" 
            // that is represented by, "inc".

            setTimeout(
              function () {
                $jQ(copy_selector).css(element_visible_css);
                // The "window pane" of the Section this loop processes is now visible.
              }, (time_value * 2)
            );

            if (($jQ(wndow_element).attr("id")).charAt($jQ(wndow_element).attr("id").length - 1) === "3" ||
                ($jQ(wndow_element).attr("id")).charAt($jQ(wndow_element).attr("id").length - 1) === "4")  {
            // If the ".wndow" element this loop processes contains intrasection navigation, 
            // this condition is triggered.

              var sub_nav_selector = new String();
              // A selector is made using the "id" of the ".wndow" element 
              // this loop processes.

              sub_nav_selector = "#nav-sctn_" + ($jQ(wndow_element).attr("id")).charAt($jQ(wndow_element).attr("id").length - 1);
              
              setTimeout(
                function () {
                  $jQ(sub_nav_selector).css(element_visible_css);
                  // The intrasection navigation in this Section is now visible.
                }, (time_value * 2)
              );
            }
          }
          
          inc++;
        }
      }
    );

    url_hash_data_Array = url_hash.split("copyValues");
    // The value of GET variable, "copyValues", are seperated from other GET variables.
    
    window.location.hash = url_hash_data_Array[0].substring(0, (url_hash_data_Array[0].length - 1));
    // The remaining GET variables are removed from the hash of the URL.
  }
} /* **************** END OF FUNCTION "assembleURLString" **************** */

function activateSideNav(option_element)  {
  /* **************** **************** **************** **************** **************** 
   *  Fades in the HTML elements which are contained within a HTML element, '.copy',
   *  of a given Section which had been invisible. 
   * **************** *************** **************** **************** **************** */
  
  var section_value = new String();
  // This variable holds a number which represents the Section which is viewable and contains 
  // the form this function processes.
  var scroll_to_value = new Number();
    
  section_value = $jQ(option_element).attr("id");
  // Holds a value which matches the vertical location, in pixels.

  if (section_value === "sctn_main") {
  // If the Section to be navigated to is 'MAIN LANDING SECTION', 
  // this condition is triggered.

    scroll_to_value = 0;
    // The vertical location to be navigated to is 0.
  } else {
  // Otherwise, if the Section to be navigated to is not 'MAIN LANDING SECTION', 
  // this condition is triggered.

    var wndow_selector = new String();
    var wndow_elements = new Object();

    var wndow_height = new Number();

    wndow_selector = ".wndow";
    wndow_elements = $jQ(wndow_selector);

    wndow_height = $jQ(wndow_elements).height();
    
    scroll_to_value = parseInt(section_value.charAt(section_value.length - 1)) * wndow_height;
    // The vertical location to be navigated to is equal to the product 
    // of multiplying the number representing the Section Value multiplied by
    // the height of a HTML element using the selector, ".wndow". 
  }
  
  $jQ(window).scrollTop(scroll_to_value);
  // The browser window is navigated to the vertical location of the Section 
  // being navigated to.
} /* **************** END OF FUNCTION "activateSideNav" **************** */
