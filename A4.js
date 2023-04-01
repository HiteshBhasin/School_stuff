/**
 * Author : Hitesh Bhasin
 * Student #1167791
 */
// Save the URL
let color_url = new URL('https://acs2909.lusciousorange.com/colors.php');
document.addEventListener("DOMContentLoaded", ()=>(init()));

/**
 *  this function called after the page's content has loaded. 
 * It also add any additional necessary event listeners. 
 */
function init() {
  let form = document.querySelector("#color_form");
  form.addEventListener('submit', processFormSubmit);

}
/**
 * this function calls event handler that is called when the form is submitted. 
 * It process the form values and determine if an XHR request must be called and trigger 
 * the necessary function calls.
 */
function processFormSubmit() {
  event.preventDefault();// prevent form submission from reloading the page
  let newURL = color_url + "?passcode=corny!" + "&username=bhasin-h";
  let color_selector = document.querySelector("#color_selector").value;
  if (color_selector) {
     // setting up the XHR request
    let xhr = new XMLHttpRequest();
    xhr.open("GET", newURL); 
    xhr.addEventListener("load", () => { processXHR(xhr) }); //calling the function
    xhr.send();

  }
}
/**
 * 
 * @param {*} xhr 
 * this function deals with the response from an XHR request. 
 * It accepts an XMLHttpRequest object and is called when the XHR loads. 
 */
function processXHR(xhr) {
  let responceobj; // picked the name of the variable from javascript.info
  responceobj = JSON.parse(xhr.responseText);// converting string value to JSON object
  let color_code = responceobj.code;
  let color_name = responceobj.name;
  createNewSwatchBox(color_code, color_name);// passing the values in to the function
  addColorToSelect(color_code, color_name);// passing the values in to the function
}

/**
 * 
 * @param {*} color_code 
 * @param {*} color_name 
 * this function accepts two parameters and adds that option to the select box. 
 * If this color does not exist in our select box, add it as a new <option> to the <select> box. 
 * 
 */
function addColorToSelect(color_code, color_name) {
  // Check if color already exists in selectbox.
  let selectBox = document.querySelector("#color_selector");
  let option = selectBox.options;
  for (p of option) {
    if (p.value != color_code) {  // Add color as new option
      let newOption = document.createElement("option"); // 
      newOption.value = color_code; // adding the the hex code and the name to the option
      newOption.text = color_name;
      selectBox.add(newOption);
      break;
    }
  }

}
/**
 * 
 * @param {color_code}  
 * @param {color_name} 
 * function generates a new swatch box with the code and name provided.
 * Generate a new swatch which is a <div> that must be added to the swatches container in the HTML file. 
 */
function createNewSwatchBox(color_code, color_name) {
  // Make a request to the server to get a new color code and name
  let Swatch = document.querySelector("#swatches");
  let newSwatch = document.createElement("div");
  newSwatch.id = "swatch";
  newSwatch.style.backgroundColor = color_code; // matching the color from the server color. 
  newSwatch.innerHTML = color_name;
  Swatch.appendChild(newSwatch);

}