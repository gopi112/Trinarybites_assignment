// hello-world-2.js
import { addClass, removeClass } from './utils.js';

export const rpage2 = () => {

  function addFields() {
    console.log("hello")
    // var nameFields = document.getElementById("nameFields");
    // var field = document.createElement("div");
    // field.classList.add("field");
    // for (var i = 0; i < 4; i++) {
    //     var input = document.createElement("input");
    //     input.type = "text";
    //     input.name = "name";
    //     input.id = "name";
    //     field.appendChild(input);
    // }
    // nameFields.appendChild(field);
  }

  // Attach event listener to button click
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', addFields);
  });

  return (`
	<div class="container-fluid" id="steppertwo">

    <div class="row">

      <div class="col-12">

        <div style="margin-top: 50px;">

          <h5><strong>How many people work at your company? </strong> </h5>

          <div  style=" display:inline;">
               
            <div class="inputstyleslidertwo"> 
              <input type="radio" name="people" id="one"  value="one">
              <label for="one" >1 - 9</label>
            </div>
            <div class="inputstyleslidertwo">
              <input type="radio" name="people" id="two" value="two">
              <label for="two">20 - 49</label>
            </div>
            <div class="inputstyleslidertwo">
              <input type="radio" name="people" id="three" value="three">
              <label for="three">50 - 99</label>
            </div>
            <div class="inputstyleslidertwo" >
              <input type="radio" name="people" id="four" value="four">
              <label for="four">100 - 250</label>
            </div>
                  
          </div>

          <div  style=" ">
               
            <div class="inputstyleslidertwo"> 
              <input type="radio" name="people" id="five" value="five">
              <label for="five" > 251 - 500</label>
            </div>
            <div class="inputstyleslidertwo">
              <input type="radio" name="people" id="six" value="six">
              <label for="six">501 - 1500</label>
            </div>
            <div class="inputstyleslidertwo">
              <input type="radio" name="people" id="seven" value="seven">
              <label for="seven">1500+ </label>
            </div>
                
          </div> 

        </div> 


      </div>

    </div>

  </div>
  `);
};
