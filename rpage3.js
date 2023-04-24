
// hello-world-3.js
import { addClass, removeClass } from './utils.js';

export const rpage3 = () => {
  return (`
  <div class="container-fluid" id="stepperthree">

    <div class="row">

      <div class="col-12">
               

        <div style="margin-top: 50px;">

          <h5><strong>One last question, how did your hear <br> about us?</strong> </h5>

          <div  style=" display:inline;">
               
            <div class="form-check p-2 font" style="display: inline-block;border: 1px solid lightgrey; border-radius: 25px; margin: 11px;"> 
              <input class="form-check-input" type="checkbox" value="" id="softwaresite">
              <label class="form-check-label" for="softwaresite">
                Software review sites
              </label>
            </div>
            <div class="form-check p-2 font" style="display: inline-block; border: 1px solid lightgrey; border-radius: 25px; margin: 11px;">
              <input class="form-check-input" type="checkbox" value="" id="audio">
              <label class="form-check-label" for="audio">
                Audio ad (Podcast, Spotify)
              </label>
            </div>
            
                  
          </div>

          <div>

            <div class="form-check p-2 font" style="display: inline-block;border: 1px solid lightgrey; border-radius: 25px; margin: 11px;"> 
              <input class="form-check-input" type="checkbox" value="" id="socialmedia">
              <label class="form-check-label" for="socialmedia">
                Socila media (Facebook, Instagram, Reddit, etc.)
              </label>
            </div>
            
          </div>

          <div >

            <div class="form-check p-2 font" style="display: inline-block;border: 1px solid lightgrey; border-radius: 25px; margin: 11px;"> 
              <input class="form-check-input" type="checkbox" value="" id="consultant">
              <label class="form-check-label" for="consultant">
                Consultant
              </label>
            </div>
            <div class="form-check p-2 font" style="display: inline-block; border: 1px solid lightgrey; border-radius: 25px; margin: 11px;">
              <input class="form-check-input" type="checkbox" value="" id="streamingservices">
              <label class="form-check-label" for="streamingservices">
                TV/Streaming Services 
              </label>
            </div>

          </div>

          <div >

            <div class="form-check p-2 font" style="display: inline-block;border: 1px solid lightgrey; border-radius: 25px; margin: 11px;"> 
              <input class="form-check-input" type="checkbox" value="" id="youtube">
              <label class="form-check-label" for="youtube">
                YouTube ad
              </label>
            </div>
            <div class="form-check p-2 font" style="display: inline-block; border: 1px solid lightgrey; border-radius: 25px; margin: 11px;">
              <input class="form-check-input" type="checkbox" value="" id="searchengine">
              <label class="form-check-label" for="searchengine">
                Search engine (Google, Bing, etc.) 
              </label>
            </div>

          </div> 

          <div >

            <div class="form-check p-2 font" style="display: inline-block;border: 1px solid lightgrey; border-radius: 25px; margin: 11px;"> 
              <input class="form-check-input" type="checkbox" value="" id="linkdin">
              <label class="form-check-label" for="linkdin">
                linkdln
              </label>
            </div>
            <div class="form-check p-2 font" style="display: inline-block; border: 1px solid lightgrey; border-radius: 25px; margin: 11px;">
              <input class="form-check-input" type="checkbox" value="" id="friend">
              <label class="form-check-label" for="friend">
                Friend/Colleagues 
              </label>
            </div>

            <div class="form-check p-2 font" style="display: inline-block; border: 1px solid lightgrey; border-radius: 25px; margin: 11px;">
              <input class="form-check-input" type="checkbox" value="" id="other">
              <label class="form-check-label" for="other">
                Other 
              </label>
            </div>

          </div> 

        </div>       

      </div>

    </div>

  </div>
  `);
};