import { rpage1 } from './rpage1.js';
import { rpage2 } from './rpage2.js';
import { rpage3 } from './rpage3.js';
import { rpage4 } from './rpage4.js';
import {lpage1} from './lpage1.js'
import {lpage2} from './lpage2.js'
import {lpage3} from './lpage3.js'
import {lpage4} from './lpage4.js'

// function testFunction(){
//   console.log("Test function");
// }

document.addEventListener('DOMContentLoaded', function() {
  const contentDiv1 = document.getElementById('content');
  const contentDiv2 = document.getElementById('content2');
  const circleDivs = document.querySelectorAll('.circle');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const crossbutton = document.getElementById('crossbutton');
  
  let count = 0;

  // Array to store the content for each page
  const pages = [
    {
      contentleft: lpage1(),
      content: rpage1(),
      showAddMoreButton: false
    },
    {
      contentleft: lpage2(),
      content: rpage2(),
      showAddMoreButton: true
    },
    {
      contentleft: lpage3(),
      content: rpage3(),
      showAddMoreButton: true
    },
    {
      contentleft: lpage4(),
      content: rpage4(),
      showAddMoreButton: true
    }
  ];

  // Function to attach event listener form step 3 to add more rows
  const attachMoreRowsListener = () => {
        // Function to add more rows for step 3
        const form = document.getElementById("multi-row-form")
        if(form){
          form.querySelector("#add-row-btn").addEventListener("click", () => {
            const tbody = form.querySelector("#tbody");
            const tr = document.createElement("tr");
        
            tr.innerHTML = `
              <td width="30%">
                <input type="text" class="form-control " style="border: 1px solid lightgrey; margin-bottom: 0px;" placeholder="Enter Name" name="name">
              </td>
              <td width="30%">
                <input type="text" class="form-control " style="border: 1px solid lightgrey; margin-bottom: 0px;" placeholder="Enter Email" name="Email">
              </td>
              <td  width="15%">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Choose..</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </td>
              <td  width="15%">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Choose..</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </td>
            `;
        
            tbody.appendChild(tr);
          });
        }
  }

  // Function to update the content of the div elements and the circles
  const updateContent = () => {
    const currentPage = pages[count];
    const title = currentPage.contentleft;
    const content = currentPage.content;

    contentDiv1.innerHTML = title;
    contentDiv2.innerHTML = content;

    // Show add more button if it is set to true in the page object
    // if (currentPage.showAddMoreButton) {
    //   contentDiv2.innerHTML += `
    //     <button id="add-more-btn">Add More</button>
    //   `;
    // }

    document.addEventListener('click', (event) => {
      if (event.target && event.target.id === 'add-more-btn') {
        addMoreSection();
      }
    });

    circleDivs.forEach((div, index) => {
      if (index <= count) {
        div.classList.add('greens');
      } else {
        div.classList.remove('greens');
      }
    });

    // Hide the previous button if count is 0
    if (count === 0) {
      prevBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'block';
    }

    // Hide the next button if count is equal to the last index in pages
    if (count === pages.length - 1) {
      nextBtn.style.display = 'none';
    } else {
      nextBtn.style.display = 'block';
    }
  };
  //close button 

  crossbutton.addEventListener('click', function() {
    console.log('Cross button clicked!');
    window.location.href = "login_screen.html";
    // Add your desired functionality here
  });

  // Call the updateContent function initially
  updateContent();

  // Add an event listener to the next button to change the content
  nextBtn.addEventListener('click', () => {
    count = (count + 1) % pages.length;
    updateContent();
    attachMoreRowsListener();
  });

  // Add an event listener to the previous button to change the content
  prevBtn.addEventListener('click', () => {
    count = (count - 1 + pages.length) % pages.length;
    updateContent();
    attachMoreRowsListener();
  });
});

  