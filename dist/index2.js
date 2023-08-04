"use strict";
var _a;
var selectedRow = null;
//Submit Data
(_a = document.querySelector("#payment-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (e) => {
    e.preventDefault();
    //Get Form Value
    const type = document.querySelector("#type").value;
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const amount = document.querySelector("#amount").value;
    //Validate
    if (type == "" || firstName == "" || lastName == "" || amount == "") {
        showAlert("Please Input Order, danger");
    }
    else {
        if (selectedRow == null) {
            const list = document.querySelector("#order-list");
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${type}</td>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${amount}</td>
                <td>                                    
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list === null || list === void 0 ? void 0 : list.appendChild(row);
            selectedRow = null;
            showAlert("Success");
        }
    }
});
