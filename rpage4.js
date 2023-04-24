export const rpage4 = () => {
  const form = document.createElement("form");
  form.id = "multi-row-form"
  form.classList.add("form");
  form.innerHTML = `
    <table width="100%" class="table-borderless">
      <thead class="line">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Function</th>
        </tr>
      </thead>
      <tbody id="tbody">
        <tr>
          <td>
            <input type="text" class="form-control " style="border: 1px solid lightgrey; margin-bottom: 0px;" placeholder="Enter Name" name="name">
          </td>
          <td>
            <input type="text" class="form-control " style="border: 1px solid lightgrey; margin-bottom: 0px;" placeholder="Enter Email" name="Email">
          </td>
          <td >
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose..</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </td>
          <td >
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose..</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-link but" id="add-row-btn">Add Row</button>
  `;
  
  return form.outerHTML;
};
