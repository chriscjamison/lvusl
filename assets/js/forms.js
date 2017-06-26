/* Filename: forms.js
 *  Contains all JavaScript functions and behavior that controls the 
 *  visitor interaction with and submission of HTML forms.
 * 
 *  --- NOTE! ---
 *  + JavaScript statements and functions which are triggered by interacting 
 *    with HTML DOM elements of the webpage are contained within, 'control_panel.js'.
 *  + JavaScript functions which control the layout and  physical appearance of the webpage 
 *    are contained within, 'animations.js'.
 *  + JavaScript functions which assist the page with navigation are located within, 'nav.js'.
 * 
 *  --- FUNCTIONS CONTAINED WITHIN 'nav.js' ---
 *    validateQuestionField
 *      Determines if a visitor has given a proper response to a form question and 
 *      if not an error message is passed to the visitor.
 *      
 *      Called by: 
 * 
 *        + $jQ("#input-email").mouseenter() (control_panel.js)
 *        + $jQ("#input-email").mouseleave() (control_panel.js)
 *        + $jQ("#input-email").focus() (control_panel.js)
 *        + $jQ("#input-email").blur() (control_panel.js)
 *        + $jQ("#input-full_name").mouseenter() (control_panel.js)
 *        + $jQ("#input-full_name").mouseleave() (control_panel.js)
 *        + $jQ("#input-full_name").focus() (control_panel.js)
 *        + $jQ("#input-full_name").blur() (control_panel.js)
 *        + $jQ("#input-address_1").mouseenter() (control_panel.js)
 *        + $jQ("#input-address_1").mouseleave() (control_panel.js)
 *        + $jQ("#input-address_1").focus() (control_panel.js)
 *        + $jQ("#input-address_1").blur() (control_panel.js)
 *        + $jQ("#input-address_2").mouseenter() (control_panel.js)
 *        + $jQ("#input-address_2").mouseleave() (control_panel.js)
 *        + $jQ("#input-address_2").focus() (control_panel.js)
 *        + $jQ("#input-address_2").blur() (control_panel.js)
 *        + $jQ("#input-city").mouseenter() (control_panel.js)
 *        + $jQ("#input-city").mouseleave() (control_panel.js)
 *        + $jQ("#input-city").focus() (control_panel.js)
 *        + $jQ("#input-city").blur() (control_panel.js)
 *        + $jQ("#input-state").mouseenter() (control_panel.js)
 *        + $jQ("#input-state").mouseleave() (control_panel.js)
 *        + $jQ("#input-state").focus() (control_panel.js)
 *        + $jQ("#input-state").blur() (control_panel.js)
 *        + $jQ("#input-zip_code").mouseenter() (control_panel.js)
 *        + $jQ("#input-zip_code").mouseleave() (control_panel.js)
 *        + $jQ("#input-zip_code").focus() (control_panel.js)
 *        + $jQ("#input-zip_code").blur() (control_panel.js)
 *        + $jQ("#input-card_num").mouseenter() (control_panel.js)
 *        + $jQ("#input-card_num").mouseleave() (control_panel.js)
 *        + $jQ("#input-card_num").focus() (control_panel.js)
 *        + $jQ("#input-card_num").blur() (control_panel.js)
 *        + $jQ("#input-security_code").mouseenter() (control_panel.js)
 *        + $jQ("#input-security_code").mouseleave() (control_panel.js)
 *        + $jQ("#input-security_code").focus() (control_panel.js)
 *        + $jQ("#input-security_code").blur() (control_panel.js)
 * 
 *    
 *    validateForm
 *      Determines if the values entered within the HTML forms within the webpage 
 *      is proper. If the values are not proper, the form will not submit.
 * 
 *      Called by:
 * 
 *        + $jQ("#sctn_main-email").submit() (control_panel.js)
 *        + $jQ("#sctn_1-request_tickets").submit() (control_panel.js)
 * 
 *    validateFullname
 *      Determines if a visitor has given a proper response to the question field which 
 *      asks for a full name.
 * 
 *      Called by:
 * 
 *        + validateQuestionField
 * 
 *    formQuestionFocusCheck
 *      Determines if a call to, "validateQuestionField", ought to initialize the 
 *      question field for a visitor to enter their full name or reset that field.
 * 
 *      Called by:
 * 
 *        + $jQ("#input-full_name").focus() (control_panel.js)
 *        + $jQ("#input-full_name").blur() (control_panel.js)
 *
 *    validateAddress
 *      Determines if the value contained in a question field which a visitor enters 
 *      their street address is valid.
 * 
 *      Called by:
 * 
 *        validateQuestionField
 *        + $jQ("#input-full_name").blur() (control_panel.js)
 * 
 * ******************************************************************************************** */

function validateFullname(validation_type, question_value, appearance_css_Array) {
  /* **************** **************** **************** **************** **************** 
   *  Determines if a visitor has given a proper response to the question field which 
   *  asks for a full name.
   * **************** **************** **************** **************** **************** */

  var field_selector = new String();
  var field_element = new Object();

  var field_text = new String();
  // Holds the value of the form field identified by, "question_value".
  var field_length = new Number();
  // Holds the length, in characters, of the value of the form field.
  var has_space = new Boolean();
  // Holds a Boolean which is, "true", if the value of the form field contains 
  // spaces.
  var field_text_Array = new Array();
  // Holds the individual names contained in the value of the form field 
  // which are seperated by spaces.
  var field_text_Array_length = new Number();
  // Holds the length, in indices, of, "field_text_Array".

  var error_border_css = new Object();
  var error_text_css = new Object();
  var base_border_css = new Object();
  var base_text_css = new Object();

  var border_color_rgb = new String();

  field_selector = "#input-" + question_value;
  field_element = $jQ(field_selector);

  field_text = $jQ(field_element).val();
  field_length = field_text.length;

  has_space = false;

  field_text_Array = field_text.split(" ");
  field_text_Array_length = field_text_Array.length;

  error_border_css = appearance_css_Array[0];
  error_text_css = appearance_css_Array[1];
  base_border_css = appearance_css_Array[2];
  base_text_css = appearance_css_Array[3];

  if (field_text_Array_length > 1)  {
  // If the value of the question field is not one continuous string, 
  // this condition is triggered.

    has_space = true;
  }

  if (validation_type === "start")  {
    // If the mouse moves over the text field for a visitor to enter their full name 
    // or the cursor enters the same text field, this condition is triggered.

    if (has_space === true)  {
    // If the value contained in the text field contains a space, the value is either 
    // the initial value of "Please enter your full name", or a valid name. When the 
    // value of the text field contains a space, this condition is triggered.
    
      if ($jQ(field_element).val() === "Please enter your full name" || 
          $jQ(field_element).val() === "Please include a space in your full name")  {
      // If the visitor has moved the mouse over the form question after not entering 
      // proper form data into the text field, this condition is triggered.

        $jQ(field_element).css(base_border_css);
        // The border surrounding the question is returned to its default color.
        $jQ(field_element).css(base_text_css);
        // The color of the text is returned to its default.
        $jQ(field_element).val("");
        // The text, "Please enter your first name", is removed from the text 
        // field.
      }
    }
  } else {
  // Otherwise, if the mouse moves away from the text field for a visitor to enter 
  // their full name or the cursor moves away from the same text field, this condition 
  // is triggered.
  
    if (field_length === 0 || 
        field_text_Array_length === 1)  {
      // If the visitor has moved the mouse away from the form question and the 
      // name contained in the text field does not include a space, 
      // this condition is triggered.

      $jQ(field_element).css(error_border_css);
      // The border surrounding the question is made to appear red.
      $jQ(field_element).css(error_text_css);
      // The color of the text is made to appear red.
      
      if (field_length === 0) {
      // If the text field is empty, this condition is triggered.

        $jQ(field_element).val("Please enter your full name");
        // The text, "Please include a space in your name", is placed within the 
        // text field.
      } else {
      // Otherwise, if there are no spaces in the data contained within the 
      // text field, this condition is triggered.

        $jQ(field_element).val("Please include a space in your full name");
        // The text, "Please include a space in your name", is placed within the 
        // text field.
      }
    }  
  }

} /* **************** END OF FUNCTION "validateFullname" **************** */

/*
function validateCheckbox(validation_type, question_value, appearance_css_Array) {
  /* **************** **************** **************** **************** **************** 
   *  Determines if a visitor has given a proper response to the question field which 
   *  asks for a full name.
   * **************** **************** **************** **************** **************** 
  
  var checked_selector = new String();
  var field_selector = new String();

  var checked_element = new Object(); 
  var field_element = new Object();

  checked_selector = "#input-" + question_value + " input:checked";
  field_selector = "#input-" + question_value;

  checked_element = $jQ(checked_selector);
  field_element = $jQ(field_selector);

  if (validation_type === "reset" && 
      $jQ(checked_element).attr("name") === undefined) {

  // If the visitor moves the cursor from the form question 
  // and the visitor has not entered a response, this condition is triggered.
    $jQ(field_element).css(error_border_css);
    // The border surrounding the question is made to appear red.
  } else if (validation_type === "start" && 
              $jQ(field_element).css("borderColor") === "rgb(151, 27, 30)") {
  // If the visitor has moved the mouse into the form question and the border is red, 
  // this condition is triggered.
    $jQ(fieldset_element).css(base_border_css);
    // The border surrounding the question is returned to the default color.
  } // END of "if" STATEMENT which is triggered if the visitor moves the cursor 
    // from the form question and has not entered a response.
} /* **************** END OF FUNCTION "validateCheckbox" **************** 

function validateRadioInput(validation_type, question_value, appearance_css_Array) {
  // If the form question undergoing validation is the "third" question 
  // of 'FORM TYPE #1', this condition is triggered.
  var checked_selector = new String();
  var checked_element = new Object(); 

  checked_selector = fieldset_selector + " > p > input:checked";
  checked_element = $jQ(checked_selector);
    
  if (validation_type === "reset" && 
      $jQ(checked_element).attr("name") === undefined) {
  // If the mouse moves from the form question and the visitor has not entered a 
  // response, this condition is triggered.
    $jQ(fieldset_element).css(error_border_css);
    // The border surrounding the question is made to appear red.
  } else if (validation_type === "start" && 
             $jQ(fieldset_element).css("borderColor") === "rgb(151, 27, 30)") {
  // If the visitor has moved the mouse into the form question and the border is red, 
  // this condition is triggered.
    $jQ(fieldset_element).css(base_border_css);
    // The border surrounding the question is returned to the default color.
  }
} /* **************** END OF FUNCTION "validateRadioInput" **************** */

function formQuestionFocusCheck(question_value, default_text, error_text) {
  /* **************** **************** **************** **************** **************** 
   *  Determines if a call to, "validateQuestionField", ought to initialize the 
   *  question field for a visitor to enter their full name or reset that field.
   * **************** **************** **************** **************** **************** */

  var question_selector = new String();
  var question_element = new Object();

  var form_field_value = new String();
  // Holds the value of the form field this function processes.

  question_selector = "#input-" + question_value;
  question_element = $jQ(question_selector);

  form_field_value = $jQ(question_element).val();
  
  if (form_field_value === default_text || 
      form_field_value === error_text || 
      form_field_value === "")  {
  // If the cursor enters the form question and the default value of the question 
  // has not been changed, this condition is triggered.

    validateQuestionField("start", question_value);
    // The form question is initialized.
  } else {
    validateQuestionField("reset", question_value); 
    // The data of the form question is checked for validity.
  } // END of "if" STATEMENT
} /* **************** END OF FUNCTION "formQuestionFocusCheck" **************** */

function validateAddress(validation_type, question_value, appearance_css_Array) {
  /* **************** **************** **************** **************** **************** 
   *  Determines if the value contained in a question field which a visitor enters 
   *  their street address is valid.
   * **************** **************** **************** **************** **************** */

  var address_1_selector = new String();
  var address_2_selector = new String();

  var address_1_element = new Object();
  var address_2_element = new Object();

  var address_1_element_value = new String();
  var address_2_element_value = new String();
  
  var address_value = new String();
  // Holds the text data contained within the question field which the visitor 
  // enters in their address.

  var address_1_element_value_Array = new Array();
  // Holds the individual terms of the data contained by the first address 
  // field.
  var address_1_element_value_Array_length = new Number();
  // Holds the number of individual indicies which make up, 
  // "address_1_element_value_Array".
  var address_2_element_value_Array = new Array();
  // Holds the individual terms of the data contained by the second address field.
  var address_2_element_value_Array_length = new Number();
  // Holds the number of the individual indicies which make up, 
  // "other_adress_element_value_Array".
  
  var street_num_regexp = new RegExp();
  // Holds a Object which contains a regular expression that searches for integers 
  // at the beginning of the text for, "input-address_1" and the end of the 
  // the text for, "input-address_2".
  var street_suffix_regexp = new RegExp();
  // Holds a Object which contains a regular expression that searches for street 
  // suffixes which may be misspelled or mispuncutated within the text 
  // for, "input-address_1".
  var apartment_abbrv_regexp = new RegExp();
  // Holds a Object which contains a regular expression that searches for the 
  // proper spellings of mailboxes for PO Boxes, Apartments and Suites.
  var apartment_num_regexp = new RegExp();
  // Holds a Object which contains a regular expression that searches for 
  // integers at the end of the data entered in the text field.

  var error_border_css = new Object();
  var error_text_css = new Object();
  var base_border_css = new Object();
  var base_text_css = new Object();

  var is_valid = new Boolean;
  // Holds the value, "true", if one of the regular expressions matches the values 
  // contained by, "address_1_element_value" or "address_2_element_value".
  
  address_1_selector = "#input-" + question_value;
  
  if (address_1_selector = "#input-address_1")  {
  // If the question field under processing is, "Address #1", then this 
  // condition is triggered.

    address_2_selector = "#input-address_2";
  } else {
  // Otherwise, if the question field under processing is, "Address #2", then 
  // this condition is triggered.
  
    address_1_selector = "#input-address_1";
    address_2_selector = "#input-address_2";
  }

  address_1_element = $jQ(address_1_selector);
  address_2_element = $jQ(address_2_selector);

  address_1_element_value = $jQ(address_1_element).val();
  // The value of the text field this function processes is passed on.
  address_2_element_value = $jQ(address_2_element).val();
  // The value of the other text field is passed on.

  address_1_element_value_Array = address_1_element_value.split(" ");
  // The value of the text field this function processes 
  // is split up according to the number of spaces in between 
  // terms.
  
  street_num_regexp = /[0-99999]\b/;
  street_location_regexp = /(North|N|South|S|East|E|West)/; 
  street_suffix_regexp = /(Street|St|Drive|Dr|Road|Rd|Avenue|Ave|Court|Ct|Boulevard|Blvd)/;
  apartment_abbv_regexp = /(Apartment|Apt|#|PO Box|P.O. Box|Suite|Ste)/;
  apartment_num_regexp = /[0-9999]|[a-z]\i/;  

  address_1_element_value_Array_length = address_1_element_value_Array.length;
  // The number of indicies within, "address_1_element_value_Array" 
  // is passed on.

  error_border_css = appearance_css_Array[0];
  error_text_css = appearance_css_Array[1];
  base_border_css = appearance_css_Array[2];
  base_text_css = appearance_css_Array[3];

  is_valid = false;

  if (street_num_regexp.test(address_1_element_value_Array[0]) === true)  {
  // If the first term of the address is a number, this 
  // condition is triggered.

    if (address_1_element_value_Array_length === 3) {
    // If the address only has three terms - a street number, 
    // a street name, and a street suffix, this condition is triggered.

      if (street_num_regexp.test(address_1_element_value_Array[0]) === true)  {
      // If the first term in the first term of the first address field 
      // contains digits, this condition will trigger.

        if (street_suffix_regexp.test(address_1_element_value_Array[address_1_element_value_Array_length - 1]) === true) {
        // If the last term of the address is the street suffix, 
        // this condition is triggered.
  
          is_valid = true;
          // The address is in a valid format.
        }       
      } 
    } else {
    // If the address has more than a street number, street name, 
    // and street suffix, this condition is triggered.

      if (apartment_num_regexp.test(address_1_element_value_Array[address_1_element_value_Array_length - 1]) === true) {
      // Otherwise, if the last term of the address is an apartment number, 
      // this condition is triggered.
        if (apartment_abbv_regexp.test(address_1_element_value_Array[address_1_element_value_Array_length - 2]))  {
        // If the next to the last term is an apartment number, 
        // this condition is triggered.

          if (street_num_regexp.test(address_1_element_value_Array[0]) === true)  {
          // If the first term in the first term of the first address field 
          // contains digits, this condition will trigger.

            is_valid = true;
            // The address is in a valid format.
          }
        }
      } else if (street_suffix_regexp.test(address_1_element_value_Array[address_1_element_value_Array_length - 1]) === true) {
        if (street_num_regexp.test(address_1_element_value_Array[0]) === true)  {
        // If the first term in the first term of the first address field 
        // contains digits, this condition will trigger.

          is_valid = true;
          // The address is in a valid format.
        }
      }
    }
  }

  if (validation_type === "reset")  {
  // If the mouse has moved away from either of the two address fields or the cursor 
  // has moved out of the two address fields, this condition is triggered.
    
    if (is_valid === false) {
    // If the value contained in either address field is invalid, this 
    // condition is triggered.

      if (question_value === "address_1") {
      // If the value contained in the first address field is invalid, 
      // this condition is triggered.

        $jQ(address_1_element).css(error_border_css);
        // The border surrounding the question is made to appear red.
        $jQ(address_1_element).css(error_text_css);
        // The color of the text is made to appear red.
        $jQ(address_1_element).val("Please enter your address again");
        // The error message is passed to the first address field.
      } else if (question_value === "address_1" && 
                 address_1_element_value === "") {
      // Otherwise, if the value does not contain data, 
      // this condition is triggered.
        $jQ(address_1_element).css(error_border_css);
        // The border surrounding the question is made to appear red.
        $jQ(address_1_element).css(error_text_css);
        // The color of the text is made to appear red.
        $jQ(address_1_element).val("Please enter your address");
        // The error message is passed to the first address field.
      } else if (question_value === "address_2") {
        
        if (address_2_element_value !== "If needed, enter Address Line #2") {
        // If the value contained in the second address field has changed, 
        // this condition is triggered.

          if (address_2_element_value !== "" && 
              (apartment_abbv_regexp.test(address_2_element_value) === false || 
               apartment_num_regexp.test(address_2_element_value) === false)) {
          // If the value contained in the second address field contains an 
          // apartment prefix, this condition is triggered.

            $jQ(address_2_element).css(error_border_css);
            // The border surrounding the question is made to appear red.
            $jQ(address_2_element).css(error_text_css);
            // The color of the text is made to appear red.
            $jQ(address_2_element).val("Please enter your address again");
          }
        }
      }
    }
  } else if (validation_type === "start") {
  // Otherwise, if the mouse has moved over either of the two address 
  // fields or the cursor has moved into one of the two address fields, 
  // this condition is triggered.

    if (question_value === "address_1" && 
        (address_1_element_value === "Address Line #1" || 
         address_1_element_value === "Please enter your address" || 
         address_1_element_value === "Please enter your address again"))  {
    // If the first address field contains a preset value, 
    // this condition is triggered.

      $jQ(address_1_element).css(base_border_css);
      // The border surrounding the question is reset to its default color.
      $jQ(address_1_element).css(base_text_css);
      // The color of the text is reset to its default color.
      $jQ(address_1_element).val("");
    // The first address field is initalized.
    } else if (question_value === "address_2" && 
               (address_2_element_value === "If needed, enter Address Line #2" || 
               address_2_element_value === "Please enter your address again"))  {
      $jQ(address_2_element).css(base_border_css);
      // The border surrounding the question is reset to its default color.
      $jQ(address_2_element).css(base_text_css);
      // The color of the text is reset to its default color.
      $jQ(address_2_element).val("");
      // The second address field is initalized.
    }
  }
}  /* **************** END OF FUNCTION "validateAddress" **************** */

function validateQuestionField(validation_type, question_value)  {
  /* **************** **************** **************** **************** **************** 
   *  Determines if a visitor has given a proper response to a form question and 
   *  if not an error message is passed to the visitor.
   * **************** **************** **************** **************** **************** */

  var field_selector = new String();
  var field_element = new Object();
  
  var error_border_css = new Object();
  var base_border_css = new Object();
  var base_text_css = new Object();
  var error_text_css = new Object();

  var appearance_css_Array = new Array();
  // An Array which holds variables containing CSS properties and values.

  var base_value = new String();
  // Holds the default value of an individual question field.
  
  field_selector = "#input-" + question_value;
  field_element = $jQ(field_selector);

  error_border_css = {
    borderColor: "rgb(151, 27, 30)"
  };

  base_border_css = {
    borderColor: "#cfd7a3"
  };
    
  base_text_css = {
    color: "#000"
  };

  error_text_css = {
    color: "rgb(151, 27, 30)"
  };

  appearance_css_Array = [
    error_border_css, 
    error_text_css, 
    base_border_css, 
    base_text_css
  ];

  if (question_value === "full_name") {
  // If the data of the question field asking for a full name is under 
  // processing for validity, this condition is triggered.

    validateFullname(validation_type, question_value, appearance_css_Array);
    // The text field which contains the full name is checked for validity.
  } else if (question_value === "address_1" || 
             question_value === "address_2")  {
  // If the data of the question field asking for an street address or 
  // apartment number is under processing for validity, this condition 
  // is triggered.

    validateAddress(validation_type, question_value, appearance_css_Array);
  } else {
  // If the data of the question field asking for a city, state, 
  // or zip code, is under processing for validity, this condition 
  // is triggered. 
    
    var field_selector = new String();
    var field_element = new Object();

    var field_val = new String();

    var error_message = new String();
    // Holds a String which contains an error message for an 
    // individual question field.
    var error_length = new Number();
    // Holds a Number which contains the length of an 
    // invalid piece of data.

    field_selector = "#input-" + question_value;
    field_element = $jQ(field_selector);

    field_val = $jQ(field_element).val();

    switch (question_value) {
    // The error message for an individual question field 
    // is assigned to the variable, "error_message", based 
    // upon the value of, "question_value".
    // 
    // Also, the length of an invalid piece of data is 
    // is passed to, "error_length".

      case "city":
        base_value = "City";
        error_message = "Please enter a city";
        error_length = 5;
      break;  

      case "state":
        base_value = "ST";
        error_message = "XX";
        error_length = 2;
      break;

      case "zip_code":
        base_value = "Zip Code";
        error_message = "XXXXX";
        error_length = 5;
      break;

      case "card_num":
        base_value = "XXXX XXXX XXXX XXXX";
        error_message = "Please reenter your card number"
        error_length = 16;
      break;

      case "security_code": 
        base_value = "XXX";
        error_message = "XXX";
        error_length = 3;
      break;

      case "email":
        base_value = "you@lvusl.com";
        error_message = "XXX@XXXXX.XXX";
        error_length = 10;
      break;
    }

    if (validation_type === "start") {
    // If the mouse is now over the field or the cursor is now 
    // in the field, this condition is triggered.

      if ((field_val === error_message || 
           field_val === base_value) || 
          (question_value === "card_num" && 
           field_val === base_value))  {
      // If the field contains an error message, this condition 
      // is triggered.

        $jQ(field_element).css(base_border_css);
        // The border surrounding the question is made to appear red.
        $jQ(field_element).css(base_text_css);
        // The color of the text is made to appear red.
        $jQ(field_element).val("");
        // The error message is removed from the field.
      }
    } else {
      var field_val_length = new Number();
      // Holds the number of characters contained in, "field_val".
      
      field_val_length = field_val.length;
      
      if (field_val_length < error_length || 
          (((question_value === "zip_code" || 
             question_value === "security_code") && 
            field_val_length !== error_length))) {
      // If the length of the value contained in the question field, 
      // is less than the length of, "error_length", or if the 
      // question field under processing is the zip code field 
      // or security code field and the length of that piece of data 
      // is not equal to the length of, "error_length", 
      // this condition is triggered.
      
        $jQ(field_element).css(error_border_css);
        // The border surrounding the question is made to appear red.
        $jQ(field_element).css(error_text_css);
        // The color of the text is made to appear red.
        $jQ(field_element).val(error_message);
        // The error message is passed on to the field.
      } else if (question_value === "card_num") {
        // If the data entered into the question field is invalid, 
        // this condition is triggered.
          
        if (question_value === "card_num" && 
            (field_val_length !== error_length &&  
             field_val_length !== error_length + 4))  {

          $jQ(field_element).css(error_border_css);
          // The border surrounding the question is made to appear red.
          $jQ(field_element).css(error_text_css);
          // The color of the text is made to appear red.
          $jQ(field_element).val(error_message);
          // The error message is passed on to the field.
        } else if (question_value === "card_num" && 
                   field_val_length === error_length) {

          var card_number_data_Array = new Array;
          // Holds four sets of four numbers making up the card number.
          
          var card_number_data = new String();
          // Holds a String which will contain the data from the 
          // question field, seperated into four sets of four 
          // numbers. 
          
          var inc = new Number();
          // Loop incrementer.

          card_number_data_Array = field_val.split("");
          
          var inc = 0;

          while (inc <= 15)  {
          // This loop runs until three spaces have been placed 
          // between four sets of four numbers.

            card_number_data = card_number_data + card_number_data_Array[inc];
            
            if ((inc + 1) % 4 === 0) {
            // If, "inc", is greater than 0, and the value of, "inc", 
            // is a multiple of 4, this condition is triggered.

              card_number_data = card_number_data + " ";
              // If a set of four number have been added to the 
              // value of, "card_number_data", a space is added 
              // to the end of, "card_number_data".
            }

            inc++;
          }

          $jQ(field_element).val(card_number_data);
        } 
      } else if (question_value === "email")  {
        if (field_val_length < error_length ||  
            field_val.indexOf(".") === -1 ||  
            field_val.indexOf("@") === -1 || 
            (field_val.indexOf(".com") === -1 && 
              field_val.indexOf(".net") === -1 && 
              field_val.indexOf(".org") === -1 && 
              field_val.indexOf(".edu") === -1 && 
              field_val.indexOf(".mil") === -1))  {
          
          $jQ(field_element).css(error_border_css);
          // The border surrounding the question is made to appear red.
          $jQ(field_element).css(error_text_css);
          // The color of the text is made to appear red.
          $jQ(field_element).val(error_message);
          // The error message is passed on to the field.
        }
      }
    }
  }
} /* **************** END OF FUNCTION "validateQuestionField" **************** */

function validateForm(form_element)  {
  /* **************** **************** **************** **************** **************** 
   *  Determines if the values entered within the HTML forms within the webpage 
   *  is proper. If the values are not proper, the form will not submit.
   * **************** **************** **************** **************** **************** */
  
  var form_questions_selector = new String();
  var form_questions_elements = new Object();

  var form_questions_elements_length = new Number();
  // Holds the number of <input> elements contained in the form.

  var inc = new Number();

  var complete_field_flag = new Boolean;
  // A Boolean which marks a text field which contains proper data.
  var current_input_flag = new Boolean;

  var complete_field_flag_Array = new Array();
  // Holds a set of Booleans which correspond with each input 
  // or text field. 
  //
  // If one of the Booleans is false, the form will pass an 
  // error message to the visitor.

  form_questions_selector = "#" + $jQ(form_element).attr("id") + " input[type=text]";
  form_questions_elements = $jQ(form_questions_selector);
  
  form_questions_elements_length = form_questions_elements.length;

  inc = 0;
  // An incrementer that counts the number of form fields with proper 
  // data.
  
  $jQ(form_questions_elements).each(
  // This loop runs through every input type contained within an 
  // individual form type.
    function () {
      var form_question = new Object();

      var form_question_element_val = new String();
      var form_question_element_val_length = new Number();
      // Holds the number of characters contained in the value held 
      // by, "input_element_val".

      var form_question_element_border_color = new String();
      // Holds the value of the CSS property, "borderColor", 
      // for each individual question field.

      form_question = this;
            
      form_question_element_val = $jQ(form_question).val();
      form_question_element_val_length = form_question_element_val.length;
      form_question_element_border_color = $jQ(form_question).css("borderColor");
      
      if ((form_question_element_val.length > 0 || 
           (form_question_element_val === "" && 
            inc === 2)) && 
          form_question_element_border_color !== "rgb(151, 27, 30)")  {
      // If the question field has data and the border of the question 
      // field is not red, this condition is triggered.   
     
        complete_field_flag_Array[inc] = true;
        // An Array which contains a flag for each question field 
        // has a value of, "true", passed to it.
      } else {
        complete_field_flag_Array[inc] = false;
      }
    
      inc++;
    } 
  );

  inc = 0;
  complete_field_flag = true;

  while (inc < form_questions_elements_length)  {
  // This loop runs while there are question fields to process.

    current_input_flag = complete_field_flag_Array[inc];

    if (current_input_flag === false) {
    // If the current index contained by, "complete_field_flag_Array", 
    // is "false", the this condition is triggered.

      complete_field_flag = false;
    }

    inc++;
  }

  return complete_field_flag;
  // If the form contains proper data, the value of, "true", will be 
  // passed on. Otherwise, the form holds improper data and this value 
  // will be "false".
} /* **************** END OF FUNCTION "validateForm" **************** */