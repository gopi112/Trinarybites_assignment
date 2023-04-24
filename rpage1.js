
import { addClass, removeClass } from './utils.js';

export const rpage1 = () => {
  return (`
  <div class="container-fluid" id="stepperone">

  <div class="row">
  
    <div class="col-12>
             
      <div style="margin-top: 50px;">

        <h5><strong>Hey there, what brings you here today? </strong> </h5>

          <div  style=" display:inline;">
              
            <div class="input"> 
              <input type="radio" name="JTP" id="work" value="work">
              <label for="work" >Work</label>
            </div>

            <div class="input"+>
              <input type="radio" name="JTP" id="personal" value="personal">
              <label for="personal">Personal</label>
            </div>

            <div class="input"+>
              <input type="radio" name="JTP" id="school" value="school">
              <label for="school">School</label>
            </div>
              
            <div class="input"+>
              <input type="radio" name="JTP" id="nonprofit" value="nonprofit">
              <label for="nonprofit">nonprofit</label>
            </div>
                  
          </div>

        

          <div class="mt-5">

            <h5><strong>What best describes, your current role? </strong> </h5>

            <div>
              
              <div class="input"> 
                <input type="radio" name="role" id="businessowner" value="businessowner">
                <label for="businessowner" >Business Owner</label>
              </div>

              <div class="input">
                <input type="radio" name="role" id="teamleader" value="teamleader">
                <label for="teamleader">Team Leader</label>
              </div>

              <div class="input">
                <input type="radio" name="role" id="teammember" value="teammember">
                <label for="teammember">Team Member</label>
              </div>
                  
            </div> 
          </div>

          <div >
              
            <div class="input"> 
              <input type="radio" name="role" id="freelancer" value="freelancer">
              <label for="freelancer" >Freelancer</label>
            </div>
            <div class="input">
              <input type="radio" name="role" id="director" value="director">
              <label for="director">Director</label>
            </div>
            <div class="input">
              <input type="radio" name="role" id="clevel" value="clevel">
              <label for="clevel">C-Level</label>
            </div>
            <div class="input">
              <input type="radio" name="role" id="vp" value="vp">
              <label for="vp">VP</label>
            </div>
                  
          </div> 


        </div>  

      </div>          

    </div>

  </div>
  `);
};

