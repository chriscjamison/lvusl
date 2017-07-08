/* Filename: animations.js
 *  Contains all JavaScript functions and behavior that control the layout 
 *  and physical appearance of the webpage.
 * 
 *  --- NOTE! ---
 *  + JavaScript statements and functions which are triggered by interacting 
 *    with HTML DOM elements of the webpage are contained within, 'control_panel.js'.
 *  + JavaScript functions which assist the page with navigation are located within, 'nav.js'.
 *  + JavaScript functions which are called when a user interacts with a form located 
 *    on the webpage are contained within, 'forms.js'.
 * 
 *  --- FUNCTIONS CONTAINED WITHIN 'animations.js' ---
 *    parseWindowDimensions
 *      Reads the browser width and height and returns numerical values of width and height 
 *      which are used by various functions to layout HTML elements in appropriate places 
 *      within the webpage.
 *      
 *      Called by: 
 *        + setupPage
 *        + animateInfoElement
 *        + animatePageElements
 *        + animateSideNav
 *    
 *    formatHeader
 *      Formats the text contained with header of 'SECTION #1' if a visitor has submitted 
 *      a request for a season ticket.
 *      
 *      Called by: 
 *        + $jQ(window).on("load") (control_panel.js)
 *        + $jQ(window).on("hashchange") (control_panel.js)
 *      
 *    setupPage 
 *      Initializes the layout of various HTML elements once the page has loaded or resized.
 *      
 *      Called by:
 *        + $jQ(window).on("resize") (control_panel.js)
 *        + $jQ(window).on("load") (control_panel.js)
 * 
 *    animateInfoElement
 *      Animates the content of the HTML element using the selector, "#info", which appears 
 *      on the 'MAIN LANDING PAGE'.
 * 
 *      Called by:
 *        + setURL
 *        + interSectionNav (nav.js)
 *        + $jQ(window).on("load") (control_panel.js)
 *        + $jQ(window).on("scroll") (control_panel.js)
 * 
 *    animateFormPanes
 *      Animates HTML elements which are contained within the forms located 
 *      within the web page.
 * 
 *      Called by:
 *        + fadeCopyElements
 * 
 *    animateEmailAlert
 *      Displays and removes the splash page which appears when a visitor requests 
 *      information about receiving email alerts.
 * 
 *      Called by: 
 *        + $jQ("#email a").click() (control_panel.js)
 *        + $jQ(window).on("hashchange") (control_panel.js)
 *      
 *      
 *    animatePageElements
 *      Animates HTML elements of a given Section which has not been 
 *      within the visible browser window. Elements such as the HTML elements 
 *      using the selector, ".headr", are made visible once a user has navigated 
 *      to an unseen Section.
 * 
 *      Called by:
 *        + setupPage
 *        + $jQ(window).on("hashchange") (control_panel.js)
 * 
 *    animateSctnNav
 *        Animates the click-states of the menu-icon for the intra-sectional navigation 
 *        which appears within, 'SECTION #3' and 'SECTION #4'.
 * 
 *        Called by:
 *          + $jQ(".sctn_nav > div > span").on("mouseover") (control_panel.js)
 *          + $jQ(".sctn_nav > div > span").on("mouseout") (control_panel.js)
 *          + $jQ(".sctn_nav > div > span").on("click") (control_panel.js)
 *          + $jQ(".sctn_nav > div > div > a").on("click") (control_panel.js)
 * 
 *    animateSideNav
 *      Animates the movement of the main menu of the browser window.
 *    
 *      Called by:
 *        + $jQ("#nav-link").on("click") (control_panel.js)
 *        + $jQ("#options > a").on("click") (control_panel.js)
 * 
 *    determineCurrentSection
 *      Returns a numerical value which represents the Section which is visible 
 *      within the browser window. 
 *      
 *      Called by:
 *        + animatePageElements
 *        + setURL
 *        + interSectionNav (nav.js)        
 * 
 *    setURL
 *      Sets the hash of the URL to a value which matches the Section and the Position 
 *      within the Section which is viewable.
 * 
 *      Called by:
 *        + $jQ(window).on("scroll") (control_panel.js)
 * 
 *    animateMenuOptions
 *      Animates the appearance of the click-states for the menu-options of the inter-sectional 
 *      navigation which appears on the left hand side of the browser window.
 * 
 *      Called by:
 *        + $jQ("#options > a").on("mouseenter") (control_panel.js)
 *        + $jQ("#options > a").on("mouseleave") (control_panel.js)
 * 
 *    setPageInitialLocation
 *      Once the webpage loads, the scroll-bar is moved to the position within the webpage 
 *      that the Section is viewable. Also, the HTML element, '.copy', that is viewable 
 *      within the Section is made viewable.
 * 
 *      Called by: 
 *        setupPage
 *        
 *    fadeCopyElements
 *      Fades in the HTML elements which are contained within a HTML element, '.copy',
 *      of a given Section which had been invisible. 
 * 
 *      Called by: 
 *        animatePageElements
 * 
 * ******************************************************************************************** */

function parseWindowDimensions() {
  /* **************** **************** **************** **************** **************** 
   *  Reads the browser width and height and returns numerical values of width and height 
   *  which are used by various functions to layout HTML elements in appropriate places 
   *  within the webpage. 
   * 
   *  Once the dimensions are gathered from the browser a numerical value is set 
   *  which corresponds with the background images for the indiviual ".wndow" elements.
   * 
   *  The numerical values of the height and width are passed through to the place 
   *  of the function call using the Array, 'page_dimensions_Array'.
   * **************** **************** **************** **************** **************** */

  var window_width = new Number(); 
  var window_height = new Number();
  
  var page_dimensions_Array = new Array();
  // Holds the calculated values of the width and height of the visible area of the browser. 
  // The value is calculated by the variables "window_width" and "window_height".

  window_width = $jQ(window).width();
  // Equal to the width of the visible area of the browser.
  window_height = $jQ(window).height();
  // Equal to the height of the visible area of the browser.
  
  if (window_width <= 980) {
  // The width of the browser of a iPhone or iPad.
    page_dimensions_Array[0] = 980;
    
    if (window_height <= 1308)  {
    // If the height of the browser is less than or equal to 1308, the browser 
    // has the dimensions of 980x1740px. These dimensions are the same as an iPad.
      page_dimensions_Array[1] = 1740;  
    } else  {
    // Otherwise the browser has the dimensions of 980x1308px.
    // These dimensions are the same as an iPhone.
      page_dimensions_Array[1] = 1308;
    } // END OF if STATEMENT -- height > 1308
  } else {
    if (window_width <= 1024) {
    // The browser has the dimensions of 1024x1500. These dimensions are 
    // the same as an iPad Pro.
      page_dimensions_Array[0] = 1024;
      page_dimensions_Array[1] = 1500;
    } else {
      if (window_width <= 1280) {
      // The width of a browser with a width of 1280px.
        page_dimensions_Array[0] = 1280;
        
        if (window_height <= 800) {
        // If the height of the browser is less than or equal to 800px, the browser has  
        // the dimensions of 1280x800px.
          page_dimensions_Array[1] = 800;
        } else {
        // Otherwise the browser has the dimensions of 1280x1024px.
          page_dimensions_Array[1] = 1024;
        } // END OF if STATEMENT -- height <= 800
      } else  {
        if (window_width <= 1366) {
        // The browser has the dimensions of 1366x768px.
          page_dimensions_Array[0] = 1366;
          page_dimensions_Array[1] = 768;
        } else {
        // The browser has the dimensions of 1600x900px.
          if (window_width <= 1600) {
            page_dimensions_Array[0] = 1600;
            page_dimensions_Array[1] = 900;
          } else {
          // The browser has the dimensions of 1920x1080px.
            page_dimensions_Array[0] = 1920;
            page_dimensions_Array[1] = 1080;
          } // END OF if STATEMENT -- <= 1600
        } // END OF if STATEMENT -- <= 1366
      } // END OF if STATEMENT -- <= 1280
    } // END OF if STATEMENT -- <= 1024 
  } // END OF if STATEMENT -- <= 980

  return page_dimensions_Array;
  // Once the width and height values have been calculated, 
  // this function returns those values in the above Array.

} /* **************** END OF FUNCTION "parseWindowDimensions" **************** */

function formatHeader(url_hash) {
  /* **************** **************** **************** **************** **************** 
   *  Formats the text contained with header of 'SECTION #1' if a visitor has submitted 
   *  a request for a season ticket.
   * **************** **************** **************** **************** **************** */

  var header_value_selector = new String();
  var header_value_element = new Object();
  var header_string_val = new String();

  var headr_css = new Object();
  
  header_value_selector = ".headr.sctn_1 > span";

  header_value_element = $jQ(header_value_selector);

  if (url_hash === "#sctn_1?pos=1") {
  // If the visitor has submitted a request for a season ticket, 
  // this condition is triggered.

    header_string_val = "Thank You for Your Interest";

    headr_css = {
      width: "17.75em", 
      color: "#9fdd98"
    };
    
  } else if (url_hash === "#sctn_1?pos=0")  {
  // If the visitor has submitted a request for a season ticket, but 
  // used the main menu to navigate to 'SECTION #1', this condition 
  // is triggered.

    header_string_val = "Reserve Season Tickets";

    headr_css = {
      width: "14.75em", 
      color: "#ffe272"
    };
  }
  
  $jQ(header_value_element).css(headr_css);
  $jQ(header_value_element).text(header_string_val);
}

function setupPage(time_value)  {
  /* **************** **************** **************** **************** **************** 
   * setupPage initializes the rendering of the HTML elements 
   * using the selectors, "#cntainr", ".wndow", ".copy", and "#bkgrnd".
   *   
   * This function also initializes the placement of the inter-section 
   * which uses "arrows". These arrows appear on the far-right side of the browser window 
   * within a desktop or laptop display and in the top and bottom middle 
   * of a mobile display .
   * 
   * Based upon the width and height values calculated by, "parseWindowDimensions", 
   * the values of the CSS properties, "width" and "height" are applied 
   * to the HTML elements using the selectors, "#cntainr", ".wndow", ".copy", 
   * and "#bkgrnd". 
   * 
   * The HTML elements, using the selectors, "#bkgrnd > div", has its, "background image", 
   * property set by a jQuery segment of code which loads images based upon the 
   * "width" and "height" values passed on to the Array, "page_dimensions_Array".
   * **************** **************** **************** **************** **************** */

  var page_dimensions_Array = new Array();
  // The calculated values for the "width" and "height" of various HTML elements 
  // of the webpage within the browser window are passed on to "page_dimensions_Array".
  
  var page_height = new Number();
  // Holds the total height of the webpage.
  var wndow_width = new Number();
  // Holds the width of the HTML elements using the selector, ".wndow", 
  // as passed on from the first index of "page_dimensions_Array".
  var wndow_height = new Number();
  // Holds the height of the HTML elements using the selector, ".wndow", 
  // as passed on from the second index of "page_dimensions_Array".
  var num_of_wndow_elements = new Number();
  // Holds the total number of HTML elements using the selector, ".wndow".
  
  var nav_width = new Number();
  var nav_left_val = new Number();
  
  var cntainr_selector = new String();
  var wndow_selector = new String();
  var bkgrnd_selector = new String();
  var nav_selector = new String();
  var video_selector = new String();
  var pdf_selector = new String();
  var bkgrnd_div_sub_selector = new String();
  var wndow_sctn_selector = new String();
  // Holds a selector for an individual Section which is worked on by 
  // a jQuery Loop which cycles through an background image.
  //
  // The value passed to this variable would be "#wndow-sctn_1" when the 
  // Loop works on the first HTML element which is refrerred to by,
  // "#bkgrnd > div".

  var cntainr_element = new Object();
  var wndow_elements = new Object();
  var copy_elements = new Object();
  var bkgrnd_element = new Object();
  var nav_elements = new Object();
  var video_element = new Object();
  var pdf_element = new Object();
  var bkgrnd_div_sub_elements = new Object();
  var wndow_sctn_element = new Object();
  // Holds the jQuery Object that refers to the HTML element 
  // referenced within the selector contained within 
  // the variable, "wndow_sctn_selector".
  //
  // The selector would be, "#wndow-sctn_1", when 
  // the jQuery Loop works on the first HTML element which is referred 
  // to by, "#bkgrnd > div"."

  var cntainr_css = new Object();
  var width_height_css = new Object();
  var nav_css = new Object();
  
  var video_attr = new Object();
  var pdf_attr = new Object();

  var inc_bkgrnd = new Number();
  
  var bkgrnd_img_value = new String();
  var bkgrnd_width = new String();
  var bkgrnd_height = new String();

  page_dimensions_Array = parseWindowDimensions();
  // The calculated values for the "width" and "height" of various 
  // HTML elements of the webpage within the browser window 
  // are passed on to "page_dimensions_Array".

  wndow_width = page_dimensions_Array[0];
  wndow_height = page_dimensions_Array[1];
  // "wndow_width" holds the width of the HTML elements using the selector, ".wndow" and uses the 
  // value held by the first index of the Array, "page_dimensions_Array".
  // "wndow_height" holds the height of the HTML elements using the selector, ".wndow" and 
  // uses the second index of the Array, "page_dimensions_Array".
  
  cntainr_selctor = "#cntainr";
  wndow_selector = ".wndow";
  bkgrnd_selector = "#bkgrnd";
  nav_selector = "nav, #nav-bkgrnd, #nav-brdr";
  video_selector = "#sctn_2-video > video";
  pdf_selector = "#sctn_2-document > a > img"
  bkgrnd_div_sub_selector = "#bkgrnd > div";
  
  cntainr_element = $jQ(cntainr_selector);
  wndow_elements = $jQ(wndow_selector);
  bkgrnd_element = $jQ(bkgrnd_selector);
  nav_elements = $jQ(nav_selector);
  video_element = $jQ(video_selector);
  pdf_element = $jQ(pdf_selector);
  bkgrnd_div_sub_elements = $jQ(bkgrnd_div_sub_selector);

  page_height = $jQ(window).height() * $jQ(wndow_elements).length;
  nav_width = $jQ(nav_elements).width();
  nav_left_val = -nav_width;
  
  cntainr_css = {
    width: page_dimensions_Array[0],
    height: page_height
  };
  
  width_height_css = {
    width: page_dimensions_Array[0],
    height: page_dimensions_Array[1]
  };
  
  nav_css = {
    left: nav_left_val
  }

  if (wndow_width === 1280 || 
      wndow_width === 1366)  {
  // If the width of the browser window is 1280px, this condition 
  // is triggered.

    video_attr = {
      width: "680", 
      height: "382"
    };
    // The width and height attributes of the <video> element in SECTION #2 are 
    // stored in, "video_attr".

    pdf_attr = {
      width: "519", 
      height: "388"
    };
    // The width and height attributes of the <img> element in SECTION #2 are 
    // stored in, "pdf_attr".

    $jQ(video_element).attr(video_attr);
    // The width and height of the <video> element within SECTION #2 are changed to 
    // better fit the browser window
    $jQ(pdf_element).attr(pdf_attr);
    // The width and height of the <img> element within SECTION #2 are changed 
    // to better fit the browser window.

  } // END of "if" STATEMENT which is triggered if the browser window 
    // is 1280px.
  
  $jQ(cntainr_element).css(cntainr_css);
  // The HTML element using the selector, "#cntainr", is formatted to 
  // fit the dimensions of the webpage.
  $jQ(wndow_elements).css(width_height_css);
  // The HTML elements using the selector, ".wndow", is formatted to fit 
  // dimensions of a given "window".
  $jQ(bkgrnd_element).css(width_height_css);
  // The HTML element using the selector, "#bkgrnd", is is formatted to fit 
  // dimensions of a given "window".
  $jQ(nav_elements).css(nav_css);
  // The HTML elements using the selector, "nav, #nav-bkgrnd, #nav-brdr", 
  // are placed off of the left hand side of the browser window.
     
  inc_bkgrnd = 0;
  // "inc_bkgrnd" serves as an incrementer which increases in value as 
  // the jQuery Method, ".each", cycles through the HTML elements defined 
  // by the selector, "#bkgrnd > div".

  $jQ(bkgrnd_div_sub_elements).each(
    function () {
      if (inc_bkgrnd > 0) {
      // If the background being processed is not for 'MAIN LANDING SECTION', this condition
      // is triggered.
  
        wndow_sctn_selector = "#wndow-sctn_" + inc_bkgrnd;
        // "wndow_sctn_selector" now holds a selector which identifies the HTML element 
        // which the loop is processing.
        // 
        // The value of "wndow_sctn_selector" would be "#wndow-sctn_1" if the second <div> 
        // element, within the set of HTML elements referred to by the selector, "#bkgrnd > div".
        wndow_sctn_element = $jQ(wndow_sctn_selector);
        // "wndow_sctn_element" now holds the jQuery Object for the selector which is held by 
        // "wndow_sctn_selector".
       
        num_of_wndow_elements = $jQ(wndow_sctn_element).children(".copy").length
        // "num_of_wndow_elements" holds the number of HTML elements identified by the selector, ".wndow".
        
        if (inc_bkgrnd === 3) {
        // If the background image under processing is the background for 'SECTION #1", this 
        // condition is triggered.

          bkgrnd_width = wndow_width * 2;
          // Since the confirmation message for a request for season tickets appears over 
          // a different background image than that of the form, the value of, "bkgrnd_width", 
          // changes.
        } else {
        // Otherwise, for all other Sections, this condition is triggered.

          bkgrnd_width = wndow_width;
        }

        bkgrnd_height = (wndow_height).toString();
        // "bkgrnd_width" holds a String. The value takes the product of the width of the browser window, 
        // multiplies it by the number of HTML elements using the selector, ".wndow" and making a string 
        // from the product.
        //
        // "bkgrnd_height" holds a String which is made by converting the value of "wndow_height" 
        // to a String.

        bkgrnd_img_value = "url('/lvusl/assets/img/bkgrnd/" + 
                            inc_bkgrnd + "/" + bkgrnd_width + "x" + bkgrnd_height + 
                            ".jpg')";      
        // "bkgrnd_img_value" holds a string which refers to the value of the CSS property, 'backgroundImage'.
        // 
        // The value of "bkgrnd_img_value" would be "url('/lvusl/assets/img/bkgrnd/1/1920x1020.jpg')" 
        // while the Loop is processing the first HTML element using the selector, "#bkgrnd > div" for 
        // a browser window which had a width of 1920px and a height of 1020px.

        width_height_css.backgroundImage = bkgrnd_img_value;
        // The value held by, "bkgrnd_img_value", is added to the Object, "width_height_css". 
        // This adds the CSS property, "backgroundImage", to the CSS properties already held by the variable.
      } else  {
      // Otherwise, if the background image under processing is for 'MAIN LANDING SECTION',
      // this condition is triggered.

        bkgrnd_width = wndow_width.toString();
        bkgrnd_height = wndow_height.toString();
        // "bkgrnd_width" holds a String which is made by converting the value of "wndow_width" 
        // to a String.
        //
        // "bkgrnd_height" holds a String which is made by converting the value of "wndow_height" 
        // to a String.

        width_height_css.backgroundImage = "url('/lvusl/assets/img/bkgrnd/main/" + bkgrnd_width +
                                           "x" + bkgrnd_height + ".jpg')";
         // The value held by, "bkgrnd_img_value", is added to the Object, "width_height_css". 
        // This adds the CSS property, "backgroundImage", to the CSS properties already held by the variable.
      } // END OF if STATEMENT
      
      $jQ(this).css(width_height_css);
      // The <div> element which this loop is processing has its CSS formatted to fit the width and 
      // height of the browser window along with its background image.
      
      inc_bkgrnd++;
      // "inc_bkgrnd", or the number representing the <div> element that this Loop is processed 
      // is incremented.
    } 
  );
  
  animatePageElements();
  // "animatePageElements" is called to animate the blocks that are contained within an individual 
  // "window".

} /* **************** END OF FUNCTION "setupPage" **************** */


function animateInfoElement(time_value) {
  /* **************** **************** **************** **************** **************** 
   * animateInfoElement animates the content of the HTML element 
   * defined by the selector, "#info".
   * 
   * If a browser runs on a mobile device and has a width of "980px", 
   * the contents of, "#info", are animated using different CSS values than those same 
   * contents run within a desktop or laptop browser, or with a larger browser width.
   * **************** *************** **************** **************** **************** */

  var wndow_selector = new String();
  var info_selector = new String();
  var info_img_selector = new String();
  var info_a_selector = new String();
  var info_div_selector = new String();
  var info_p_selector = new String();
  var wndow_footer_span_selector = new String();

  var wndow_element = new Object();
  var info_element = new Object();
  var info_img_element = new Object();
  var info_a_element = new Object();
  var info_div_element = new Object();
  var info_p_element = new Object();
  var wndow_footer_span_element = new Object();

  var display_block_css = new Object();
  var opacity_css = new Object();
  var display_inherit_css = new Object();
  
  wndow_selector = "#wndow-sctn_main";
  info_selector = "#info";
  info_img_selector = "#info > img";
  info_a_selector = "#info > div > a";
  info_div_selector = "#info > div > div";
  info_p_selector = "#info > div > p";
  wndow_footer_selector = "#wndow_footer-main";

  wndow_element = $jQ(wndow_selector);
  info_element = $jQ(info_selector);
  info_img_element = $jQ(info_img_selector);
  info_a_element = $jQ(info_a_selector);
  info_div_element = $jQ(info_div_selector);
  info_p_element = $jQ(info_p_selector);
  wndow_footer_span_element = $jQ(wndow_span_selector);

  display_block_css = {
    display: "block"
  };
  
  opacity_css = {
    opacity: "1"
  };
  
  display_inherit_css = {
    display: "inherit"
  };
      
  time_value_longer = time_value * 2;
  time_value_long = time_value * 1.5;

  $jQ(wndow_element).show("drop", time_value_longer);
  // This jQuery Method, "show", "drops" or animates the panel which serves 
  // as the background of the logo and other items on the landing page 
  // down from the top of the browser window.
  // 
  // This animation occurs over an interval which is twice the time of 
  // a "menu" HTML element to animate.
  $jQ(info_element).css(opacity_css);
  // Allow the HTML element, which uses the selctor, "#info", to be visible 
  // within a browser window. The "display" CSS property is set to "display" 
  // and the "opacity" of "#info" is set to "1".
  //
  // The CSS values are applied using the jQuery Method, ".css".
  //
  // The jQuery Method, ".css", is used twice because using both variables 
  // within one ".css" call would make the HTML element, "#info" visibly flash. 
  // $jQ(info_img_element).css(display_block_css);
  // The HTML element using the selctor, "#info > img" is made visible by 
  // setting the "display" CSS property to "block".
  //
  // The CSS values are applied using the jQuery Method, ".css".

  $jQ(info_img_element).delay(time_value).fadeTo(time_value_long, 1, 
  // Fade the HTML element, using the selector, "#info > img" 
  // from an opacity of "0" to "1".
    function () {
      $jQ(info_a_element).fadeTo(time_value, 1, 
      // Fade in the links which appear to the right of the logo.
        function () {
          $jQ(info_div_element).fadeTo(time_value, 1);
          // Fade in the line which appears below the links near the top of the browser window.
          $jQ(info_p_element).fadeTo(time_value, 1, 
          // Fade in the text which appears below the link near the top of the browser window.
            function () {
              $jQ(wndow_footer_element).fadeTo(time_value, 1);
            }
          );
        }
      );
    }
  );
} /* **************** END OF FUNCTION "animateInfoElement" **************** */

function animateForm(time_value) {
  /* **************** **************** **************** **************** **************** 
   *  Animates the content of the 'pages' of form questions for the 
   *  form which a visitor can request season tickets.
   * **************** *************** **************** **************** **************** */

  var page_1_selector = new String();
  var page_2_selector = new String();
  var page_1_element = new Object();
  var page_2_element = new Object();
  
  var page_off_css = new Object();
  var page_on_css = new Object();
  var opacity_zero_css = new Object();
 
  page_1_selector = "#sctn_1-form > form > span + div";
  page_2_selector = "#sctn_1-form > form > span + div + div";
  // "page_1_selector" now holds the selector used by the HTML element which contains 
  // the "first page" of the form this function is processing.
  //
  // "page_2_selector" now holds the selector used by the HTML element which contains 
  // the "second page" of the form this function is processing.

  page_1_element = $jQ(page_1_selector);
  page_2_element = $jQ(page_2_selector);
  // "page_1_element" now holds the jQuery Object for the HTML element referred 
  // by the selector which defines the "first page" of the form this function 
  // is processing.
  //
  // "page_2_element" now holds the jQuery Object for the HTML element referred 
  // by the selector which defines the "second page" of the form this function 
  // is processing.

  page_off_css = {
    display: "none"
  };

  page_on_css = {
    display: "block"
  };

  opacity_zero_css = {
    opacity: "0"
  };

  if ($jQ(page_1_element).hasClass("visible") === true)  {
  // If the second page is not visible, this condition is triggered.

    $jQ(page_1_element).fadeTo(time_value, 0);
    // The opacity of the first page is moved over time from 1 to 0.
    $jQ(page_1_element).css(page_off_css);
    // The first page is no longer visible.
    $jQ(page_1_element).removeClass();
    // The <div> containing the first page is stripped of the class, 'visible'.
    $jQ(page_1_element).addClass("not_visible");
    // The <div> containing the first page has the class, 'not_visible', added.
    
    $jQ(page_2_element).css(page_off_css);
    // The second page is no longer visible.
    $jQ(page_2_element).removeClass();
    // The <div> containing the second page is stripped of the class, 'not_visible'.
    $jQ(page_2_element).addClass("visible");
    // The <div> containing the second page has the class, 'visible', added, 
    // preparing it to be made visible.
    $jQ(page_2_element).css(opacity_zero_css);
    // The <div> containing the second page has its opacity changed to 0.
    $jQ(page_2_element).css(page_on_css);
    // The second page is now able to be displayed.
    $jQ(page_2_element).fadeTo(time_value, 1);
    // The opacity of the second page is moved over time from 0 to 1.
  } else {
  // Otherwise the second page is visible and the first 
  // page needs to be made visible.

    $jQ(page_2_element).fadeTo(time_value, 0);
    // The opacity of the second page is moved over time from 1 to 0.
    $jQ(page_2_element).css(page_off_css);
    // The second page is no longer visible.
    $jQ(page_2_element).removeClass();
    // The <div> containing the second page is stripped of the class, 'visible'.
    $jQ(page_2_element).addClass("not_visible");
    // The <div> containing the second page has the class, 'not_visible', added.
    
    $jQ(page_1_element).css(page_off_css);
    // The first page is no longer visible.
    $jQ(page_1_element).removeClass();
    // The <div> containing the first page is stripped of the class, 'not_visible'.
    $jQ(page_1_element).addClass("visible");
    // The <div> containing the first page has the class, 'visible', added, 
    // preparing it to be made visible.
    $jQ(page_1_element).css(opacity_zero_css);
    // The <div> containing the first page has its opacity changed to 0.
    $jQ(page_1_element).css(page_on_css);
    // The first page is now able to be displayed.
    $jQ(page_1_element).fadeTo(time_value, 1);
    // The opacity of the first page is moved over time from 0 to 1.
  } // END OF if STATEMENT which is triggered if the second page is not 
    // visible.
  
} /* **************** END OF FUNCTION "animateFormPanes" **************** */

function animateEmailAlert(url_hash, time_value)  {
  /* **************** **************** **************** **************** **************** 
   *  Displays and removes the splash page which appears when a visitor requests 
   *  information about receiving email alerts.
   * **************** *************** **************** **************** **************** */
  var time_value_short = new Number();
  
  var email_selector = new String();
  var info_selector = new String();

  var email_element = new Object();
  var info_element = new Object();

  var email_visibility_css = new Object();
  var opacity_zero_css = new Object();

  var email_display_value = new String();

  time_value_short = Math.round(time_value / 2);

  email_selector = "#email";
  info_selector = "#info, #wndow_footer-main";

  email_element = $jQ(email_selector);
  info_element = $jQ(info_selector);

  opacity_zero_css = {
    opacity: "0"
  };

  email_display_value = $jQ(email_element).css("display");

  if (email_display_value === "none") {
  // If the splash page is not visible, this condition is triggered.

    $jQ(email_element).css(opacity_zero_css);
    // Set the opacity of the <div> element holding the Email Alert content to 0.
    $jQ(email_element).css(email_visibility_css);
    // Make the <div> element holding the Email Alert content able to be visible.

    $jQ(info_element).fadeTo(time_value_short, 0);
    // Fade out the content in 'MAIN LANDING SECTION'.
    $jQ(email_element).fadeTo(time_value, 1);
    // Fade in the Email Alert content.

  } else {
  // Otherwise, if the splash page is visible, this condition is triggered.

    var email_section_search_string = new String();
    // Holds the String, "pos=email", which is searched for in, 
    // "url_hash".
    var email_section_index_num = new Number();
    // Holds the location within, "url_hash", that "pos=email" is 
    // found.

    email_section_search_string = "#email?pos=1";
    email_section_index_num = url_hash.indexOf(email_section_search_string);
    
    if (email_section_index_num !== -1) {
    // If the URL hash reflects the event of a visitor wishing 
    // to enter their information into the form, this condition is triggered.
      
      var div_selector = new String();
      var div_2_selector = new String();

      var div_1_element = new Object();
      var div_2_element = new Object();

      var div_block_css = new Object();
      var div_none_css = new Object();

      div_1_selector = "#email-copy";
      div_2_selector = "#email-form";

      div_1_element = $jQ(div_1_selector);
      div_2_element = $jQ(div_2_selector);

      div_block_css = {
        display: "block"
      };
      
      div_none_css = {
        display: "none"
      };

      $jQ(div_1_element).fadeTo(time_value_short, 0);
      
      $jQ(div_1_element).css(div_none_css);
      $jQ(div_2_element).css(div_block_css);

      $jQ(div_1_element).removeClass();
      $jQ(div_1_element).addClass("not_visible");

      $jQ(div_2_element).removeClass();
      $jQ(div_2_element).addClass("visible");

      $jQ(div_2_element).fadeTo(time_value, 1);
    } else {
    // Otherwise, if the visitor has either submitted their information 
    // or declined to enter their email address, this condition is triggered.
      var time_value_short = new Number();

      email_visibility_css = {
        display: "none"
      };

      time_value_short = Math.round(time_value / 2);

      $jQ(email_element).fadeTo(time_value, 0, 
      // The splash page is faded out.

        function () {
          $jQ(info_element).fadeTo(time_value_short, 1);
          $jQ(email_element).css(email_visibility_css);
        }
      );
    } // END of "if" STATEMENT which is triggered if the visitor wishes to enter 
      // the email address into the form.
  } // END of "if" STATEMENT which is triggered if the Email Alert content is 
    // not visible.

} /* **************** END OF FUNCTION "animateEmailAlert" **************** */


function animatePageElements(time_value)  {
  /* **************** **************** **************** **************** **************** 
   * Triggers a sequence of modifications of CSS values and 
   * properties and animations of various HTML elements which fire when a user 
   * activates a menu option, intra-section, or intrasection option.
   *  
   * The function has a number of purposes.
   *    1. Determine the hash of the URL, if there is one.
   *    2  Allow for the page elements to be rendered within the browser.
   *    3. Make the Sections within the page invisible while the menu is activated 
   *    4. Make the invisible sections of the page visible 
   *       after a menu option is activated.
   * **************** *************** **************** **************** **************** */
  
  var nav_selector = new String();
  var wndow_selector = new String();
  var all_copy_selector = new String();
  var single_copy_selector = new String();
  var headr_selector = new String();
  var wndow_footer_selector = new String();
  var sub_nav_selector = new String();
  var div_selector = new String();
  var bkgrnd_selector = new Object();
  // Holds the String value of the selector, "#bkgrnd-sctn_X".

  var nav_element = new Object();
  var cntainr_element = new Object();
  var wndow_elements = new Array();
  var wndow_element = new Object();
  var all_copy_element = new Object();
  // Holds the contents of the HTML element identified by the selector, ".copy".
  var single_copy_element = new Object();
  // Holds the contents of the HTML element identified by the selector, ".copy:nth-child(X)".
  var headr_element = new Object();
  // Holds the contents of the HTML element identified by the selector, ".headr.sctn_X".
  var wndow_footer_element = new Object();
  // Holds the contents of the HTML element identified by the selector, "#wndow-sctn_X .wndow_footer".
  var bkgrnd_element = new Object();
  // Holds the contents of the HTML element identified by the selector, "#bkgrnd-sctn_X".
  var sub_nav_element = new Object();
  // Holds the contents of the HTML element identified by the selector, "#nav-sctn_X".

  var section_search_string = new String();
  // Holds a String, "#sctn_", which is searched for within the URL hash.
  var position_search_string = new String();
  // Holds a String, "pos=", which is searched for within the URL hash.
  
  var url_hash = new String();
  // Holds the String value of the URL hash

  var current_position = new Number();
  // Holds a number which matches the vertical position within the webpage that is viewable.
  
  var position_value_index_num = new Number();
  // Holds a Number representing the location within the URL hash where the 
  // Position Valueis listed.
    
  var section_value = new String();
  // Holds the String value of the Section Value listed in the URL hash.
  var position_value = new String();
  // Holds the String value of the Position Value listed in the URL hash.
  
  var element_off_css = new Object();
  var element_on_css = new Object();
  
  var page_dimensions_Array = new Array();
  // The calculated values for the "width" and "height" of various HTML elements 
  // of the webpage within the browser window are passed on to "page_dimensions_Array".

  var window_width = new Number();
  // Holds the numerical value of the width of the browser window.

  var bkgrnd_element_width_val = new Number();
  // Holds a number which is the product of the width of the browser window 
  // and "position_value".
  var bkgrnd_element_x_position = new String();
  // Holds a String which the product of the calculated width of the browser window 
  // and "position_value", which is contained by, "bkgrnd_element_width_val".
  // 
  // This value is used to determine the CSS value of the property, "left", 
  // of the background of a Section.
  
  nav_selector = "nav";
  nav_element = $jQ(nav_selector);
  
  section_search_string = "sctn_main";
  // "section_search_string" holds a string that is looked for within "url_hash".
  // 
  // NOTE: If the variable names within the URL are changed, the value of 
  // "section_search_string" needs to be updated.
  url_hash = window.location.hash;
  
  if ($jQ(nav_element).css("left") !== "0px" && 
      url_hash !== "" && 
      url_hash.indexOf(section_search_string) === -1) {
  // If the HTML element, "<nav>", is not viewable, the URL does not include a hash of any kind 
  // and the string held by, "section_search_string", is not contained within "url_hash", 
  // this condition is triggered.
  
    current_position = $jQ(window).scrollTop();

    section_value = determineCurrentSection(current_position);
    // Based upon the vertical position of the viewable portion of the webpage 
    // within the browser window, a number representing the current Section 
    // is passed along to "section_value".

    position_search_string = "pos=";
    // "position_search_string" holds a string that is looked for within "url_hash".
    // 
    // NOTE: If the variable names within the URL are changed, the value of 
    // "position_search_string" needs to be updated.
    position_value_index_num = url_hash.indexOf(position_search_string);
    // "position_value_index_num" equals the "location" within the "url_hash" 
    // that the beginning of the value of "position_search_string" occurs.

    if (position_value_index_num === -1)  {
    // If the value of "url_hash" is "#sctn_main", this condition is triggered.
      position_value = "0";
      // If the value of "url_hash" does not include a Position value, the webpage 
      // has just been loaded and therefore the next section which will be viewed 
      // will default to the "first window pane".
    } else {
      position_value = url_hash.charAt(position_value_index_num + position_search_string.length);
      // If the value of "url_hash" contains a Position value, it is passed 
      // on to "position_value".
    }
    
    position_value = parseInt(position_value);
    // The String datatype of "position_value" is changed to a Number.

    all_copy_selector = "#wndow-sctn_" + section_value.toString() + " > .copy";
    single_copy_selector = "#wndow-sctn_" + section_value.toString() + " > .copy:nth-child(" + (position_value + 2).toString() + ")";
    headr_selector = ".headr.sctn_" + section_value.toString();
    wndow_footer_selector = "#wndow-sctn_" + section_value.toString() + " .wndow_footer";
    div_selector = "div";
    sub_nav_selector = "#nav-sctn_" + section_value.toString();
    bkgrnd_selector = "#bkgrnd-sctn_" + section_value.toString();

    all_copy_element = $jQ(all_copy_selector);
    single_copy_element = $jQ(single_copy_selector);
    headr_element = $jQ(headr_selector);
    wndow_footer_element = $jQ(wndow_footer_selector);
    sub_nav_element = $jQ(sub_nav_selector);
    bkgrnd_element = $jQ(bkgrnd_selector);

    element_off_css = {
      display: "none"
    };

    element_on_css = {
      display: "block"
    };
    
    page_dimensions_Array = parseWindowDimensions();
    // The calculated values for the "width" and "height" of various HTML elements 
    // of the webpage within the browser window are passed on to "page_dimensions_Array".

    window_width = page_dimensions_Array[0];
    // The width, held by, "page_dimensions_Array", is passed to "window_width".

    if (section_value === 3)  {
    // If the Section which is under processing is 'SECTION #1', this condition is 
    // triggered.

      bkgrnd_element_width_val = window_width * position_value;
      // "bkgrnd_element_width_val" holds the product of "window_width" and "position_value".
      // It is also the horizontal position within a background for a Section that matches 
      // up with the viewable "window pane".
    } else {
    // Otherwise, for any other Section, this condition is triggered.

      bkgrnd_element_width_val = 0;
    }
    
    bkgrnd_element_x_position =  "-" + bkgrnd_element_width_val.toString() + "px 0px";
    // "bkgrnd_element_x_position" holds the value for the CSS property, "backgroundPosition" 
    // for the Section that this function is processing.

    $jQ(bkgrnd_element).css("backgroundPosition", bkgrnd_element_x_position);
    // The background of the current Section that this function is processing 
    // is made to now match the viewable window pane.

    $jQ(all_copy_element).css(element_off_css);
    $jQ(single_copy_element).css(element_on_css);

    if ($jQ(sub_nav_element) !== undefined) {
    // If the Section this function is processing contains intra-sectional navigation 
    // this condition is triggered.
      
      $jQ(sub_nav_element).css(element_on_css);
    }
    
    $jQ(headr_element).fadeTo(time_value, 1, 
    // The contents of the window pane of the Section this function is processing are faded 
    // into view, starting with the HTML element serving as the header.  

      function () {
        fadeCopyElements(single_copy_element, div_selector, section_value, position_value, sub_nav_element, wndow_footer_element, time_value);
        // "fadeCopyElements" is triggered to fade in the various content of the Section this
        // function is processing.
      }
    );
  }
} /* **************** END OF FUNCTION "animatePageElements" **************** */

function animateSideNav(time_value) {
  /* **************** **************** **************** **************** **************** 
   * Animates the visibility and layout of the HTML elements contained within the webpage 
   * when the main intersection navigation menu that appears on the left of the webpage 
   * is clicked.
   * 
   * The HTML elements using the selectors, "nav", "#nav-brdr", "#nav-bkgrnd", 
   * "#options", "#cntainr", ".wndow", ".headr", ".copy", ".sctn_nav" 
   * all have their layout altered by this function.
   * **************** **************** **************** **************** **************** */

  var nav_selector = new String();
  var options_selector = new String();
  var nav_bkgrnd_selector = new String();
  var nav_brdr_selector = new String();
  var cntainr_selector = new String();
  var wndow_selector = new String();
  var headr_selector = new String();
  var copy_selector = new String();
  var info_selector = new String();
  var sctn_nav_selector = new String();
  var prev_next_sctn_selector = new String();
  var bkgrnd_selector = new String();
  
  var nav_element = new Object();
  var options_element = new Object();
  var nav_bkgrnd_element = new Object();
  var nav_brdr_element = new Object();
  var cntainr_element = new Object();
  var wndow_element = new Object();
  var wndow_elements = new Array();
  var headr_elements = new Array();
  var info_element = new Object();
  var copy_elements = new Array();
  var bkgrnd_element = new Object();
  var sctn_nav_element = new Object();
  var prev_next_sctn_element = new Object();

  var nav_width = new Number();
  // Holds the numerical value of the width of the HTML element 
  // identified by the selector, "nav".
  var element_width = new Number();
  // Holds the numerical value of the calculated width of HTML elements 
  // identified by the selectors, "#cntainr" and #bkgrnd".
  // 
  // Both of the HTML elements, "#cntainr" and "#bkgrnd" have the value 
  // of their widths changed to the difference of the total width 
  // of the browser window and the width of the HTML element identified 
  // by the selector, "nav".
  var window_width = new Number();
  // Holds the numerical value of the width of the browser window.
  var wndow_width = new Number();
  // Holds the numerical value of the width of the HTML element using 
  // the selector, ".wndow".
  
  var page_dimensions_Array = new Array();
  // The calculated values for the "width" and "height" of various HTML elements 
  // of the webpage within the browser window are passed on to "page_dimensions_Array".

  nav_selector = "nav";
  options_selector = "#options";
  nav_bkgrnd_selector = "#nav-bkgrnd";
  nav_brdr_selector = "#nav-brdr";
  cntainr_selector = "#cntainr";
  wndow_selector = ".wndow";
  headr_selector = ".headr";
  copy_selector = ".copy";
  info_selector = "#info";
  sctn_nav_selector = ".sctn_nav";
  prev_next_sctn_selector = "#prev-sctn, #next-sctn";
  bkgrnd_selector = "#bkgrnd, #bkgrnd > div";

  nav_element = $jQ(nav_selector);
  options_element = $jQ(options_selector);
  nav_bkgrnd_element = $jQ(nav_bkgrnd_selector);
  nav_brdr_element = $jQ(nav_brdr_selector);
  cntainr_element = $jQ(cntainr_selector);
  wndow_elements = $jQ(wndow_selector);
  headr_elements = $jQ(headr_selector);
  copy_elements = $jQ(copy_selector);
  info_element = $jQ(info_selector);
  sctn_nav_element = $jQ(sctn_nav_selector);
  prev_next_sctn_element = $jQ(prev_next_sctn_selector);
  bkgrnd_element = $jQ(bkgrnd_selector);

  nav_width = $jQ(nav_element).width();
  // The width of the HTML element using the selector, "#nav" is 
  // calculated using the jQuery Method, ".width();
  // 
  // That value is passed onto the variable, "nav_width".
  
  window_width = $jQ(window).width();
  page_dimensions_Array = parseWindowDimensions();
  // The calculated values for the "width" and "height" of various HTML elements 
    // of the webpage within the browser window are passed on to "page_dimensions_Array".
  wndow_width = page_dimensions_Array[0];

  if ($jQ(nav_element).css("left") !== "0px")  {
  // If the intersection navigation that appears on the left side of the webpage 
  // is visible, this condition is triggered.
    
    element_width = window_width - nav_width;
    // The difference of the width of the browser window and the value held ]
    // by "nav_width" is passed onto the variable "element_width".
    //
    // The value contained by, "element_width", is used to resize the HTML elements 
    // containing the HTML content of the entire webpage, "#cntainr", 
    // the background images of the webpage, "#bkgrnd", and the HTML elements 
    // held within each Section of the webpage, ".wndow".

    var nav_visible_css = new Object();
    var nav_mobile_visible_css = new Object();
    var options_staging_css = new Object();
    var element_shifted_right_css = new Object();
    var element_extended_css = new Object();
    var element_invisible_css = new Object();

    nav_visible_css = {
      left: "0px", 
      opacity: "1"
    };

    nav_mobile_visible_css = {
      display: "block"
    };

    options_staging_css = {
      display: "block", 
      left: -nav_width, 
      opacity: "1"
    };

    element_shifted_right_css = {
      left: nav_width
    };

    element_extended_css = {
      width: (wndow_width - nav_width),
      left: nav_width
    };

    element_invisible_css = {
      display: "none"
    };
    
    $jQ(info_element).css(element_invisible_css);
    // The block of HTML content that appears in the 'MAIN LANDING SECTION' 
    // is made invisible.

    $jQ(headr_elements).css(element_invisible_css);
    $jQ(copy_elements).css(element_invisible_css);
    $jQ(sctn_nav_element).css(element_invisible_css);
    // The visible headers, HTML content, and intrasection navigation is
    // made invisible.
    
    $jQ(options_element).css(options_staging_css);
    // The menu options of the intersection navigation are ready to be viewed 
    // once the panel containing the intersection navigation scrolls in 
    // from the left.

    $jQ(nav_element).animate(nav_visible_css, time_value)
    $jQ(nav_bkgrnd_element).animate(nav_visible_css, time_value);
    $jQ(nav_brdr_element).animate(nav_visible_css, time_value);
    $jQ(options_element).animate(nav_visible_css, time_value);
    // The main intersection that appears on the left of the webpage scrolls 
    // in from the left to the right.
    //
    // The HTML elements affected by these statements are: "nav", 
    // "#nav-bkgrnd", "#nav-brdr", "#options".

    if (wndow_width === 980 || 
        wndow_width === 1024)  {
    // If the width of a HTML element using the selector, ".wndow", is 
    // 980 or 1024, or fits a mobile device, this condition is triggered.

      $jQ(nav_element).css(nav_mobile_visible_css);
      $jQ(nav_bkgrnd_element).css(nav_mobile_visible_css);
      $jQ(nav_brdr_element).css(nav_mobile_visible_css);
      $jQ(bkgrnd_element).css(element_extended_css);
      // The intersection navigation is now visible. Also the background 
      // is shifted to the right, out of view.

      element_extended_css = element_extended_css + element_invisible_css;
      // The CSS properties and values held by "element_extended_css" are 
      // combined with the CSS properties and values held by "element_invisible_css".

      $jQ(cntainr_element).css(element_extended_css);
      $jQ(wndow_elements).css(element_extended_css);
      $jQ(prev_next_sctn_element).css(element_invisible_css);
      // The visible content of the webpage is made invisible.
    } else {
    // Otherwise, if the browser is a desktop browser, this condition 
    // is triggered.
      $jQ(cntainr_element).animate(element_shifted_right_css, time_value);
      $jQ(bkgrnd_element).animate(element_shifted_right_css, time_value);
      // The HTML content and the background is shifted to the right, out of view.
    }
  } else  {
  // Otherwise, if the intersection navigation that appears on the left hand 
  // of the webpage is invisible, this condition is triggered.

    var nav_invisible_css = new Object();
    var element_shifted_left_css = new Object();
    var element_visible_css = new Object();
    var headr_visible = new Object();

    window_width = $jQ(window).width();
    
    nav_invisible_css = {
      left: -nav_width
    };

    element_shifted_left_css = {
      left: "0px"
    };

    element_visible_css = {
      display: "block"
    };

    headr_visible = {
      display: "table"
    };

    $jQ(options_element).animate(nav_invisible_css, time_value, 
    // The individual menu options of the intersection navigation is made invisible 
    // by scrolling the options to the left, out of view.
      function () {
        $jQ(nav_element).animate(nav_invisible_css, time_value);
        $jQ(nav_bkgrnd_element).animate(nav_invisible_css, time_value);
        $jQ(nav_brdr_element).animate(nav_invisible_css, time_value);
        // The background of the intersection navigation is made invisible 
        // by scrolling the HTML elements to the left, out of view.

        if (wndow_width === 980)  {
        // If the browser is a mobile browser, this condition is triggered.
          $jQ(cntainr_element).css(element_visible_css);
          $jQ(wndow_elements).css(element_shifted_left_css);
          $jQ(bkgrnd_element).css(element_visible_css);
          $jQ(prev_next_sctn_element).css(element_visible_css);
          // The HTML content, backgrounds, and intersection navigation that 
          // appears in the middle of the webpage is made visible.
        }

        $jQ(cntainr_element).animate(element_shifted_left_css, time_value);
        // The HTML element which contains the HTML content and other forms 
        // of content is scrolled back to the left, into view.
        $jQ(bkgrnd_element).animate(element_shifted_left_css, time_value, 
          function () {
            $jQ(cntainr_element).width(window_width);
            $jQ(sctn_nav_element).width(window_width);
            $jQ(bkgrnd_element).width(window_width);
            $jQ(wndow_elements).width(window_width);
            $jQ(headr_elements).css(headr_visible);
            $jQ(copy_elements).css(element_visible_css);
            $jQ(info_element).css(element_visible_css);
            // Once the background is made visible, the visible HTML element 
            // containing content, intrasection navigation, headers, 
            // and other content is made visible.
          }
        );
      }
    );    
  }
} /* **************** END OF FUNCTION "animateSideNav" **************** */

function determineCurrentSection(current_position)  {
  /* **************** **************** **************** **************** **************** 
   * Determines the vertical position of the browser and passes the Section that is 
   * currently visible back to the URL.
   * 
   * This function runs while the page is loading.
   * **************** **************** **************** **************** **************** */

  var cntainr_height = new Number();
  // Holds a Number which represents the value of the CSS property, "height"
  // for the HTML element using the selector, "#cntainr".
  var wndow_height = new Number();
  // Holds a Number which represents the value of the CSS property, "height" 
  // for an single instance of the HTML element using the selector, ".wndow".
  var section_value_num = new Number();
  // Holds a Number representing the location within the URL hash where the 
  // Section Value is listed.
  var window_margin = new Number();
  // Holds a Number which is used to determine a range of values which 
  // the location can fall into and still be considered to be within a Section.

  var cntainr_selector = new String();
  var wndows_selector = new String();
  
  var cntainr_element = new Object();
  var wndows_elements = new Array();

  cntainr_selector = "#cntainr";
  wndows_selector = ".wndow";

  cntainr_element = $jQ(cntainr_selector);
  wndows_elements = $jQ(wndows_selector);

  cntainr_height = $jQ(cntainr_element).height();
  wndow_height = $jQ(wndows_elements).height();

  window_margin = 0.05;

  section_value_num = Math.floor(current_position / wndow_height + window_margin); 
  // To get the Section value for the current section which is viewable, the number 
  // which is the result of dividing the current location of the browser along the 
  // webpage by the sum of height of the HTML element using the selector, ".wndow", 
  // and the value of window margin is rounded down to the nearest integer.

  return section_value_num;
  // The Section value is returned to setURL.   
} /* **************** END OF FUNCTION "determineSectionValue" **************** */

function setURL(current_position, url_hash)  {
  /* **************** **************** **************** **************** **************** 
   * Passes on data to the URL that controls the animation of various content within 
   * the webpage.
   * 
   * This function operates as the webpage loads.
   * **************** **************** **************** **************** **************** */

  var wndow_height = new Number();
  // Holds a Number which represents the value of the CSS property, "height" 
  // for an single instance of the HTML element using the selector, ".wndow".
  var window_margin = new Number();
  // Holds a Number which is used to determine a range of values which 
  // the location can fall into and still be considered to be within a Section.
  
  var wndow_selector = new String();
  var info_selector = new String();
  
  var wndow_elements = new Object();
  var info_element = new Object();

  var info_opacity_value = new String();
  // The opacity of the HTML element using the selector, "#info", 
  // at the time that this function begins is passed to "info_opacity_value".

  var section_value = new String();
  // Holds the String value of the selector for the HTML element using the 
  // selector, "#wndow-sctn_X".
  // 
  // The value of "section_value" would be "#wndow-sctn_1" if the visible 
  // Section was 'SECTION #1'.
  var position_value = new String();
  // Holds the String value of the Position Value listed in the URL hash.

  var section_value_num = new Number();
  // Holds a Number which is returned by the execution of the function, 
  // "determineCurrentSection". It represents the Section.

  wndow_selector = ".wndow";
  info_selector = "#info";
  
  wndow_elements = $jQ(wndow_selector);
  info_element = $jQ(info_selector);

  wndow_height = $jQ(wndow_elements).height(); 
  window_margin = 150;
  // "wndow_margin" is given a range of 150 pixels that the current location of the 
  // browser window can fall into and still be considered part of the previous section.
  info_opacity_value = $jQ(info_element).css("opacity");

  if ((current_position === 0) && 
      (url_hash.indexOf("sctn_main") === -1) && 
      (info_opacity_value === "0")) {
  // If the browser window is at the top of the webpage, the URL does not include the hash, 
  // "#sctn_main", and the opacity of the HTML element using the selector, "#info" is 0, 
  // this condition is triggered.
      
      url_hash = "#sctn_main";     
  } else {
  // Otherwise, if the webpage appears in a different location from the top, this condition 
  // is triggered.
    
    section_value_num = determineCurrentSection(current_position);
    // "section_value_num" is passed a Number from the function, "determineCurrentSection", 
    // which represents the Section which is currently visible.

    if (section_value_num !== Infinity) {
    // This condition validates the Section value that the function, "determineCurrentSection", 
    // passes back to this function. If the value of, "section_value_num" lies between a range 
    // of 1 - 6, this condition is triggered.
      
      section_value = "#wndow-sctn_" + section_value_num;
      
      if (current_position >= (wndow_height - window_margin)) {
      // If the current position of the browser window lies below the 'MAIN LANDING SECTION', 
      // this condition is triggered.
        
        position_value = (determineVisibleCopyElement(section_value)).toString();;  
      } else  {
      // Otherwise, if the browser window lies within the 'MAIN LANDING SECTION', 
      // this condition is triggered.
        
        position_value = "0";
      }

      if (position_value === "-1")  {
      // If the value passed to, "position_value", is an unknown value, '-1', this 
      // condition is triggered.

        position_value = "0";
        // If an unknown value, "-1", is passed on to, "position_value", the "first" 
        // window pane ought to be shown. The Position value for the "first" 
        // window pane is "0".
      }

      url_hash = "#sctn_" + section_value.charAt(section_value.length - 1) + "?pos=" + position_value;

      if (url_hash === "#sctn_0?pos=0") {
      // If there has been an error with the Section value, which has its value set to, "0", 
      // this condition is triggered.

        url_hash = "#sctn_main";
        // The value of, "url_hash", is now made to set the hash as, "#sctn_main".
      }
    }
  }

  if (url_hash !== window.location.hash)  {
  // If the current hash of the URL has changed, this condition is triggered.

    window.location.hash = url_hash;
  } 
}  /* **************** END OF FUNCTION "setURL" **************** */

function animateMenuOptions(option_element) {
  /* **************** **************** **************** **************** **************** 
   * Animates the click states of the menu options contained within the intersection 
   * navigation that appears on the left side of the browser window.
   * **************** **************** **************** **************** **************** */

  var base_css = new Object();
  var hover_css = new Object();

  var time_value_long = new Number();
  var time_value_short = new Number();
 
  hover_css = {
    "backgroundColor": "#ccc", 
    "color": "#000"
  };

  base_css = {
    "backgroundColor": "#000", 
    "color": "#fff"
  };
  
  time_value_long = time_value / 2;
  time_value_short = time_value / 4;
  
  if ($jQ(option_element).css("backgroundColor") === "rgb(0, 0, 0)") {
  // If the click state of the menu option is in its "base" state, 
  // this condition is triggered.

    $jQ(option_element).animate(hover_css, time_value_long);
    // The click state of the menu option is changed to its "hover" state.
  } else {
    
  // Otherwise if the click state of the menu option is in its "hover" state 
  // this condition is triggered.
    $jQ(option_element).animate(base_css, time_value_short);
    // The click state of the menu option is changed to its "base" state.
  }
} /* **************** END OF FUNCTION "animateMenuOptions" **************** */

function setPageInitialLocation(url_hash)  {
  /* **************** **************** **************** **************** **************** 
   * Navigates the browser window to the location that allows for the full window 
   * of the visible section to be displayed.
   * **************** **************** **************** **************** **************** */

  var section_value = new String();
  // Holds the String value of the Section Value listed in the URL hash.
  var position_value = new String();
  // Holds the String value of the Position Value listed in the URL hash.
  
  var wndow_selector = new String();
  var copy_selector = new String();
  
  var wndow_element = new Object();
  var copy_element = new Object();

  var wndow_height = new Number();
  // Holds a Number which represents the value of the CSS property, "height" 
  // for an single instance of the HTML element using the selector, ".wndow".

  var copy_visible_css = new Object();

  scroll_to_value = new Number();
  // Holds a value which matches the vertical location, in pixels.

  section_value = url_hash.charAt(6);
  position_value = url_hash.charAt(12);

  copy_visible_css = {
    display: "block"
  };

  if (section_value !== "m" &&  
      section_value !== "")  {
  // If the current visible section is not 'MAIN LANDING SECTION', this condition 
  // is triggered.

    position_value = parseInt(position_value);
    // "position_value" is converted to a Number datatype so that it can be adjusted 
    // by a mathematical statement.

    wndow_selector = ".wndow";
    copy_selector = "#wndow-sctn_" + section_value.toString() + " > .copy:nth-child(" + (position_value + 2).toString() + ")";
    
    wndow_element = $jQ(wndow_selector);
    copy_element = $jQ(copy_selector);

    wndow_height = $jQ(wndow_element).height();
    
    scroll_to_value = section_value * wndow_height;
    // The vertical location of the visible window is set. 

    $jQ(copy_element).css(copy_visible_css);
    
    $jQ(window).scrollTop(scroll_to_value);
    // The browser window is placed to view the complete window pane of the 
    // visible Section .
  } else  {
  // Otherwise, if the current visible Section is 'MAIN LANDING SECTION', 
  // this condition is triggered.
    $jQ(window).scrollTop(0);
  }
} /* **************** END OF FUNCTION "setInitialLocation" **************** */

function fadeCopyElements(single_copy_element, div_selector, section_value, position_value, sub_nav_element, wndow_footer_element, time_value)  {
  /* **************** **************** **************** **************** **************** 
   * The content of the visible Section are made visible by fading their opacity 
   * from 0 to 1.
   * **************** **************** **************** **************** **************** */
  
  $jQ(single_copy_element).children(div_selector).fadeTo(time_value, 1, 
    function () {
      if (section_value === 1)  {
      // If the current visible Section contains intrasection navigation, 
      // this condition is triggered.
 
        $jQ(sub_nav_element).fadeTo(time_value, 1);
      }

      if (section_value !== "sctn_main")  {
        $jQ(wndow_footer_element).fadeTo(time_value, 1);
      }
    }
  );
} /* **************** END OF FUNCTION "fadeCopyElements" **************** */