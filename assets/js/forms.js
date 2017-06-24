/* Filename: forms.js
 *  Contains all JavaScript functions and behavior that controls the 
 *  visitor interaction with and submission of HTML forms contained within 
 *  the 'One Page' template.
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
 *        + $jQ("#input-full_name").mouseenter() (control_panel.js)
 *        + $jQ("#input-full_name").mouseleave() (control_panel.js)
 *        + $jQ("#input-address_1").mouseenter() (control_panel.js)
 *        + $jQ("#input-address_1").mouseleave() (control_panel.js)
 *        + $jQ("#input-address_2").mouseenter() (control_panel.js)
 *        + $jQ("#input-address_2").mouseleave() (control_panel.js)
 *        + $jQ("#input-city").mouseenter() (control_panel.js)
 *        + $jQ("#input-city").mouseleave() (control_panel.js)
 *        + $jQ("#input-state").mouseenter() (control_panel.js)
 *        + $jQ("#input-state").mouseleave() (control_panel.js)
 *        + $jQ("#input-zip_code").mouseenter() (control_panel.js)
 *        + $jQ("#input-zip_code").mouseleave() (control_panel.js)
 *        + $jQ("#input-card_num").mouseenter() (control_panel.js)
 *        + $jQ("#input-card_num").mouseleave() (control_panel.js)
 *        + $jQ("#input-security_code").mouseenter() (control_panel.js)
 *        + $jQ("#input-security_code").mouseleave() (control_panel.js)
 * 
 *    
 *    validateForm
 *      Determines if the values entered within the HTML forms within the webpage 
 *      is proper. If the values are not proper, the form will not submit.
 * 
 *      Called by:
 *        + assembleURLString
 *        + setURL (animations.js)
 * 
 *      Called by:
 *        + $jQ("#sctn_1-request_tickets").submit( (control_panel.js)
 * 
 * ******************************************************************************************** */

function validateFullname(validation_type, question_value, error_border_css, base_border_css) {
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

  field_selector = "#input-" + question_value;
  field_element = $jQ(field_selector);

  field_text = $jQ(field_element).val();
  field_length = field_text.length;

  has_space = false;

  field_text_Array = field_text.split(" ");
  field_text_Array_length = field_text_Array.length;

  if (field_text_Array_length > 1)  {
    has_space = true;
  }

  if (has_space === true)  {
  // If the value contained in the text field contains a space, the value is either 
  // the initial value of "Please enter your full name", or a valid name. When the 
  // value of the text field contains a space, this condition is triggered.
    if ($jQ(field_element).val() === "Please enter your full name")  {
    // If the visitor has moved the mouse over the form question after not entering 
    // proper form data into the text field, this condition is triggered.
      $jQ(field_element).css(base_border_css);
      // The border surrounding the question is returned to its default color.
      $jQ(field_element).css(base_text_css);
      // The color of the text is returned to its default.
      $jQ(field_element).val("");
      // The text, "Please enter your first name", is removed from the text 
      // field.
    } // END of "if" STATEMENT
  } else if (validation_type === "reset" && 
             field_text_Array_length === 1)  {
  // If the visitor has moved the mouse away from the form question and the 
  // name contained in the text field does not include a space, 
  // this condition is triggered.
    $jQ(field_element).css(error_border_css);
    // The border surrounding the question is made to appear red.
    $jQ(field_element).css(error_text_css);
    // The color of the text is made to appear red.
    $jQ(field_element).val("Please include a space in your name");
    // The text, "Please include a space in your name", is placed within the 
    // text field.
  } // END of "if" STATEMENT which is triggered if the visitor has moved the 
    // mouse over the form question after not entering proper form data 
    // into the text field.
} /* **************** END OF FUNCTION "validateFullname" **************** */

function validateCheckbox(validation_type, question_value, error_border_css, base_border_css) {
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
} /* **************** END OF FUNCTION "validateCheckbox" **************** */

function validateRadioInput(validation_type, question_value, error_border_css, base_border_css) {
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
}

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

  switch (question_value) {
  // This routes the input of the form to be correctly processed by this function.
    case "full_name":
      validateFullname(validation_type, question_value, error_border_css, base_border_css);
      // The text field which contains the full name is checked for validity.
    break;  
    // END of condition for the form question which contains the full name 
    // of the visitor.

    case "address_1":
      validateAddress(validation_type, question_value, error_border_css, base_border_css);
      // The text field which contains the street name and street number is checked for 
      // validity.
    break;  // END of condition for the "third" question of 'FORM TYPE #1'

    case "sctn_1-no_4":
      var option_selector = new String();
      var option_element = new Object();

      option_selector = fieldset_selector + " > div > select > option:selected";
      option_element = $jQ(option_selector);
            
      if (validation_type === "reset" && 
          $jQ(option_element).val() === "default") {
        $jQ(fieldset_element).css(error_border_css);
      } else if (validation_type === "start" && 
                 $jQ(fieldset_element).css("borderColor") === "rgb(151, 27, 30)") {
        $jQ(fieldset_element).css(base_border_css);
      }
    break;  // END of condition for the "fourth" question of 'FORM TYPE #1'

    case "sctn_5-no_1":
    // If the form question being validated is the "first" question 
    // of 'FORM TYPE #2', this condition is triggered.
      var checked_selector = new String();
      var checked_element = new Object(); 

      checked_selector = "#" + question_value + " > span + fieldset > p > input:checked";
      checked_element = $jQ(checked_selector);
        
      if (validation_type === "reset" && 
          ($jQ(checked_element).attr("name") === undefined ||  
           $jQ(checked_element).attr("name") === "monthly_income")) {
      // If the mouse moves from the form question and the visitor has not entered a 
      // response, this condition is triggered.
        $jQ(fieldset_element).css(error_border_css);
        // The border surrounding the question is made to appear red.
      } else if (validation_type === "start" && 
                 $jQ(fieldset_element).css("borderColor") === "rgb(151, 27, 30)") {
        $jQ(fieldset_element).css(base_border_css);
        // The border surrounding the question is returned to the default color.
      }
    break;  // END of condition for the "first" question of 'FORM TYPE #1'

    case "sctn_5-no_2":
    // If the form question being validated is the "second" question 
    // of 'FORM TYPE #2', this condition is triggered.
      var checked_selector = new String();
      var checked_element = new Object(); 
 
      checked_selector = "#" + question_value + " > span + fieldset > p > input:checked";
      checked_element = $jQ(checked_selector);
      
      if (validation_type === "reset" && 
          $jQ(checked_element).attr("name") === undefined) {
      // If the mouse moves from the form question and the visitor has not entered a 
      // response, this condition is triggered.
        $jQ(fieldset_element).css(error_border_css);
        // The border surrounding the question is made to appear red.
      } else if (validation_type === "start" && 
                 $jQ(fieldset_element).css("borderColor") === "rgb(151, 27, 30)") {
        // The border surrounding the question is made to appear red.
        $jQ(fieldset_element).css(base_border_css);
        // The border surrounding the question is returned to the default color.
      }
    break;  // END of condition for the "second" question of 'FORM TYPE #2'
    
    case "sctn_6-no_1":
    // If the form question undergoing validation is the "first" question 
    // of 'FORM TYPE #3', this condition is triggered.
      var field_selector = new String();
      var field_element = new Object();

      field_selector = fieldset_selector + " > input";
      field_element = $jQ(field_selector);
      
      if ($jQ(field_element).val() === "Please enter your first name")  {
      // If the visitor has moved the mouse over the form question after not entering 
      // proper form data into the text field, this condition is triggered.
        $jQ(fieldset_element).css(base_border_css);
        // The border surrounding the question is returned to its default color.
        $jQ(field_element).css(base_text_css);
        // The color of the text is returned to its default.
        $jQ(field_element).val("");
        // The text, "Please enter your first name", is removed from the text 
        // field.
      } else if (validation_type === "reset" && 
                 $jQ(field_element).val().length <= 2)  {
      // If the visitor has moved the mouse away from the form question and the visitor 
      // has entered an improper response, a response of two or less characters, 
      // this condition is triggered.
        $jQ(fieldset_element).css(error_border_css);
        // The border surrounding the question is made to appear red.
        $jQ(field_element).css(error_text_css);
        // The color of the text is made to appear red.
        $jQ(field_element).val("Please enter your first name");
        // The text, "Please enter your first name", is placed within the 
        // text field.
      } // END of "if" STATEMENT which is triggered if the visitor has moved the 
        // mouse over the form question after not entering proper form data 
        // into the text field.
    break;  // END of condition for the "first" question of 'FORM TYPE #3'

    case "sctn_6-no_2":
    // If the form question undergoing validation is the "second" question 
    // of 'FORM TYPE #3', this condition is triggered.
      var checked_selector = new String();
      var checked_element = new Object();

      field_selector = "#sctn_6-field-email";
      field_element = $jQ(field_selector);

      checked_selector = "#" + question_value + " > span + fieldset > p > input:checked";
      checked_element = $jQ(checked_selector);
      
      if ($jQ(checked_element).attr("id") === "sctn_6-email") {
      // If the radio button offering the option to a visitor to enter their email 
      // is selected, this condition is triggered.
        if (validation_type === "start" && 
            $jQ(field_element).val() === "Please enter a valid email address") {
        // If the visitor moves the cursor over the form question after not 
        // entering proper form data into the text field, this condition 
        // is triggered. 
          $jQ(fieldset_element).css(base_border_css);
          // The border is returned to its default color.
          $jQ(field_element).css(base_text_css);
          // The color of the text is returned to its default color.
          $jQ(field_element).val("");
          // The text, "Please enter a valid email address", is removed from 
          // the text field.
        } else {
        // Otherwise, if the form data in the text field does not include the text 
        // "Please enter a valid email address", this condition is triggered.
          if (validation_type === "reset" && 
              ($jQ(field_element).val().length === 0) ||  
              ($jQ(field_element).val().indexOf("@") === -1 || 
              ($jQ(field_element).val().indexOf(".com") === -1 && 
               $jQ(field_element).val().indexOf(".net") === -1 && 
               $jQ(field_element).val().indexOf(".org") === -1 && 
               $jQ(field_element).val().indexOf(".edu") === -1 && 
               $jQ(field_element).val().indexOf(".mil") === -1)))  {
          // If the visitor has moved the cursor away from the form question 
          // and there is not a value within the text field or the value 
          // within the text field does not include an "@" symbol or a valid 
          // domain, this condition is triggered.
            $jQ(fieldset_element).css(error_border_css);
            // The border surrounding the question is made to appear red.
            $jQ(field_element).css(error_text_css);
            // The color of the text is made to appear red.
            $jQ(field_element).val("Please enter a valid email address");
            // The text, "Please enter a valid email address", is placed within 
            // the text field.
          } // END of "if" STATEMENT which is triggered if the data contained within 
            // the text field is improper.
        } // END of "if" STATEMENT which is triggered if the visitor moves the cursor 
          // over the form question after not entering proper form data.
      } else if ($jQ(checked_element).attr("id") === "sctn_6-phone") {
      // If the radio button offering the option to a visitor to enter a phone number 
      // is selected, this condition is triggered.
        var phone_number_val = new String();
        // Holds the value of the data contained within the text field.
        var search_char_index_num = new Number();
        // Holds the location within the given phone number that improper 
        // form data appears.
        var phone_number_search_vals_Array = new Array();
        // Holds a set of characters that appear in properly formatted 
        // phone numbers.
        
        var inc = new Number();
        // An incrementer that counts the number of proper characters 
        // that are contained within the phone number.

        phone_number_val = $jQ(field_element).val();
        
        phone_number_search_vals_Array = [
          "(", 
          ")", 
          "-", 
          " "
        ];

        while (inc < phone_number_search_vals_Array.length)  {
        // This loop searches throughout the phone number for characters 
        // that appear in properly formatted phone numbers.
          search_char_index_num = phone_number_val.indexOf(phone_number_search_vals_Array[inc], search_char_index_num);
          // The phone number is searched for a character contained 
          // within, "phone_number_search_vals_Array". The location of the 
          // value is passed to, "search_char_index_num".
          phone_number_val = phone_number_val.replace(phone_number_search_vals_Array[inc], "");
          // The found character is removed from the phone number.

          if (search_char_index_num === -1) {
          // If the character that this loop searches for is not found, 
          // this condition is triggered.
            inc++;
            // The loop will move on to the next character.
          } // END of "if" STATEMENT which is triggered if the character 
            // this loop searches for is not found.
        } // END of "while" LOOP which searches throughout the phone number for 
          // characters that appear in properly formatted phone numbers.
        
        if ($jQ(field_element).val() === "Please enter your phone number") {
        // If the value of the text field is, "Please enter your phone number", 
        // then this condition is triggered.
          $jQ(fieldset_element).css(base_border_css);
          // The border is returned to its default color.
          $jQ(field_element).css(base_text_css);
          // The color of the text is returned to its default color.
          $jQ(field_element).val("");
          // The text, "Please enter a valid email address", is removed from 
          // the text field.
        } else if (validation_type === "reset" && 
                   (phone_number_val.length === 0 ||  
                   (phone_number_val.length < 10 || 
                    phone_number_val.length > 10))) {
        // If the visitor has moved the cursor away from the form question and 
        // the phone number does not have a proper number of digits, 
        // then this condition is triggered.
          $jQ(fieldset_element).css(error_border_css);
          // The border surrounding the question is made to appear red.
          $jQ(field_element).css(error_text_css);
          // The color of the text is made to appear red.
          $jQ(field_element).val("Please enter your phone number");
          // The text, "Please enter a valid email address", is placed within 
          // the text field.
        } // END of "if" STATEMENT which is triggered if the value of the text 
          // field is "Please enter your phone number".
      } // END of "if" STATEMENT which is triggered if the radio button offering 
        // the option to a visitor to enter their email is selected.
    break;  // END of condition for the "second" question of 'FORM TYPE #2'

    case "sctn_6-no_3":
    // If the form question undergoing validation is the "third" question 
    // of 'FORM TYPE #3', this condition is triggered.
      var checked_selector = new String();
      var checked_element = new Object(); 

      checked_selector = "#" + question_value + " > span + fieldset > p > input:checked";
      checked_element = $jQ(checked_selector);
      
      if (validation_type === "reset" && 
          $jQ(checked_element).attr("name") === undefined) {
      // If the mouse moves from the form question and the visitor has not entered a 
      // response, this condition is triggered.
        $jQ(fieldset_element).css(error_border_css);
        // The border surrounding the question is made to appear red.
      } else if (validation_type === "start" && 
                 $jQ(fieldset_element).css("borderColor") === "rgb(151, 27, 30)") {
      // The border surrounding the question is made to appear red.
        $jQ(fieldset_element).css(base_border_css);
        // The border surrounding the question is returned to the default color.
      } // END of "if" STATEMENT which is triggered if the visitor moves the cursor 
        // from the form question and has not entered a response.
    break;  // END of condition for the "third" question of 'FORM TYPE #3'
  } // END of "switch" STATEMENT which routes the input of the form to 
    // be correctly process by this function.
} /* **************** END OF FUNCTION "validateQuestionField" **************** */

function validateForm(section_value)  {
  /* **************** **************** **************** **************** **************** 
   *  Determines if the values entered within the HTML forms within the webpage 
   *  is proper. If the values are not proper, the form will not submit.
   * **************** **************** **************** **************** **************** */

  var form_questions_selector = new String();
  var form_questions_elements = new Object();

  var fieldset_element = new Object();
  var input_elements = new Object();
  var textarea_element = new Object();
  var range_element = new Object();
  var select_element = new Object();

  var inc = new Number();

  var complete_field_flag = new Boolean;
  // A Boolean which marks a text field which contains proper data.
  var input_element_checked_flag = new Boolean;
  // A Boolean which marks an input which contains proper data.

  var complete_field_flag_Array = new Array();
  // Holds a set of Booleans which correspond with each input 
  // or text field. 
  //
  // If one of the Booleans is false, the form will pass an 
  // error message to the visitor.

  form_questions_selector = "#form-" + section_value + " .form_cntnt";
  form_questions_elements = $jQ(form_questions_selector);
  
  inc = 0;
  // An incrementer that counts the number of form fields with proper 
  // data.
  
  $jQ(form_questions_elements).each(
  // This loop runs through every input type contained within an 
  // individual form type.
    function () {
      complete_field_flag = false;
      input_element_checked_flag = false;
      // The value of each variable defaults to improper form data 
      // that the "if" statements try to prove are proper.
      
      input_elements = $jQ(this).find("fieldset").find("input");
      textarea_element = $jQ(this).find("textarea");
      select_element = $jQ(this).find("select");
      
      $jQ(input_elements).each(
      // This loop runs for each input field type.
        function () {
          var input_element = new Object();

          var input_element_val = new String();
          // Holds the value of a given text field.
          var input_element_type = new String();   
          // Holds the datatype of a given text field.               
          
          input_element = this;
          // Holds the current input this loop processes.
          
          input_element_val = $jQ(input_element).val();
          input_element_type = $jQ(input_element).attr("type");

          if ((input_element_type === "text" || 
              input_element_type === "email" ||
              input_element_type === "tel") && 
              (input_element_val.length > 0) && 
              (input_element_val !== "Please enter your first name" && 
               input_element_val !== "Please enter a valid email address" &&
               input_element_val !== "Please enter your phone number")) {
          // If the text field is of "text", "email", or a "tel" datatype, the 
          // number of characters contained in the text field is greater than 0, 
          // and the value of the text field does not contain an error message, 
          // this condition is triggered.
            complete_field_flag = true;
            // The text field has proper data.
          } else if (input_element_type === "radio")  {
          // Otherwise, if the input element has a datatype of "radio", 
          // this condition is triggered.
            var radio_element_property = new String();

            radio_element_property = $jQ(input_element).prop("checked");
            
            if (radio_element_property === true) {
            // If the input element has been checked by the visitor, 
            // this condition is triggered.
              input_element_checked_flag = true;
              // The input element contains proper data.
            } // END of "if" STATEMENT which is triggered if the input element 
              // has been checked.
          } else if (input_element_type === "checkbox") {
          // Otherwise, if the input element has a datatype of "checkbox", 
          // this condition is triggered.
            var checkbox_element_property = new String();

            checkbox_element_property = $jQ(input_element).prop("checked");

            if (checkbox_element_property === true)  {
            // If the input element has been checked by the visitor, 
            // this condition is triggered.
              input_element_checked_flag = true;
              // The input element contains proper data.
            } // END of "if" STATEMENT that is triggered if the input element 
              // has been checked.
          } else if (input_element_type === "range") {
          // Otherwise, if the input element has a datatype of "range", 
          // this condition is triggered.
            complete_field_flag = true; 
            // Input elements of datatype, "range", can only have proper data.
          } // END of "if" STATEMENT which is triggered if the text field is of 
            // "text", "email", or a "tel" datatype, the 
            // number of characters contained in the text field is greater than 0, 
            // and the value of the text field does not contain an error message, 
            // this condition is triggered.
        } // END of ".each()" Method.
      );
      
      if ($jQ(textarea_element).val() !== undefined) {
      // If the input element is a "textarea" and has data, 
      // this condition is triggered.
        complete_field_flag = true;
        // The textarea contains proper data.
      } else if ($jQ(select_element).val() !== undefined)  {
      // Otherwise, if the input element is a "select" element, 
      // this condition is triggered.
        if ($jQ(select_element).val() !== "default")  {
        // If the "select" element has been clicked and an option 
        // selected, this condition is triggered.
          complete_field_flag = true;
          // The "select" element contains proper data.
        } // END of "if" STATEMENT which is triggered if a "select" 
          // element is clicked and an option is selected.
      } // END of "if" STATEMENT which is triggered if the input 
        // element is a "textarea" and has data.

      if (input_element_checked_flag === true)  {
      // If only the input element has been shown to have proper 
      // data, than this condition is triggered.
        complete_field_flag = true;
        // The form question has proper data.
      } // END of "if" STATEMENT which is triggered if only the 
        // input element has been shown to have proper data.

      complete_field_flag_Array[inc] = complete_field_flag;
      // The type of data of the text field or input element, 
      // proper or improper, is passed onto the Array.

      inc++;
      // The "index" corresponding with the input element or 
      // text field that this loop processes is incremented.
    } // END of ".each()" Method
  );

  for (inc = 0; inc < complete_field_flag_Array.length; inc++)  {
  // Loop which cycles through the Array which holds Boolean values 
  // for each input type which correspond with an input type 
  // holding proper or improper data.
    if (complete_field_flag_Array[inc] === false) {
    // If the Boolean this loop is processing is false, the input 
    // element or text field holds improper data, and this condition 
    // is triggered.
      complete_field_flag = false;
      // The form holds improper data.
    } // END of "if" STATEMENT that is triggered if the Boolean 
      // this loop is processing holds improper data.
  } // END of "for" LOOP

  return complete_field_flag;
  // If the form contains proper data, the value of, "true", will be 
  // passed on. Otherwise, the form holds improper data and this value 
  // will be "false".
} /* **************** END OF FUNCTION "validateForm" **************** */

function setRateValue(rate_value_search_string) {
  /* **************** **************** **************** **************** **************** 
   *  Passes the value of the GET variable, "rateValue", which appears when 'FORM TYPE #3' 
   *  is submitted to a HTML element using the selector, 
   *  "#sctn_5-desc-6 > span > span:first-of-type" 
   *  or "#sctn_5-desc-6 > span > span > sup + span"
   * **************** **************** **************** **************** **************** */

  var rate_value_index_num = new Number();
  // Holds the location within the URL string that the value of the GET 
  // variable, "rateValue", lies within, "rate_value_search_string".

  var rate_value_val = new String();
  // Holds the value of the GET variable, "rateValue".

  var url_string = new String();

  url_string = window.location.href;
  
  rate_value_index_num = url_string.indexOf(rate_value_search_string) + rate_value_search_string.length;
  // The location of the search string within the URL string is added 
  // to the length, in characters, of the search string.
  rate_value_val = url_string.slice(rate_value_index_num, url_string.length);
  // The value of "rateValue", is extracted from the URL string.

  if (rate_value_val === "0")  {
  // If the value of "rateValue" is 0, then this condition is triggered.
    var blok_selector = new String();
    var blok_element = new Object();

    var bold_white_css = new Object();
    
    blok_selector = "#sctn_5-desc-6 > span > span:first-of-type";

    blok_element = $jQ(blok_selector);
    
    bold_white_css = {
      color: "#fff",
      fontSize: "6em", 
      fontWeight: "600", 
    }

    $jQ(blok_element).text("No Cost");
    // The value of the HTML element identified by the selector, 
    // "#sctn_5-desc-6 > span > span:first-of-type", is removed and 
    // "No Cost" is added in its place.

    $jQ(blok_element).css(bold_white_css);
    // The style of the text is now larger and in bold. The color 
    // of the text is white.
  } else  {
  // Otherwise, if the value of "rateValue" is not 0, then this 
  // condition is triggered.
    var span_selector = new String();
    var span_element = new Object();

    span_selector = "#sctn_5-desc-6 > span > span > sup + span";
  
    span_element = $jQ(span_selector);
    
    $jQ(span_element).text(url_string.slice(rate_value_index_num, url_string.length));
    // The value of the HTML element using the selector, 
    // "#sctn_5-desc-6 > span > span > sup + span", is replaced with 
    // the value of the variable, "rateValue".
  } // END of "if" STATEMENT which is triggered if the value of "rateValue", 
    // is 0.
} /* **************** END OF FUNCTION "setRateValue" **************** */
