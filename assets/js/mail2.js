// $(document).ready(function () {
//   const selectBtn = document.getElementById("customMultiSelect");
//   const dropdown = document.querySelector(".dropdown");
//   const searchInput = document.getElementById("searchInput");
//   const optionsList = document.getElementById("optionsList");
//   const selectInput = document.getElementById("selectInput");

//   let selectedItems = [];

//   // Toggle the dropdown display when clicking the button
//   selectBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     dropdown.style.display =
//       dropdown.style.display === "block" ? "none" : "block";
//   });

//   // Filter options based on search input
//   searchInput.addEventListener("input", (e) => {
//     const searchTerm = e.target.value.toLowerCase();
//     const options = optionsList.querySelectorAll("li");
//     options.forEach((option) => {
//       const text = option.textContent.toLowerCase();
//       option.style.display = text.includes(searchTerm) ? "block" : "none";
//     });
//   });

//   // Handle option selection
//   optionsList.addEventListener("click", (e) => {
//     if (e.target.tagName === "LI") {
//       const value = e.target.dataset.value;

//       // Add or remove selected items
//       if (!selectedItems.includes(value)) {
//         selectedItems.push(value);
//       } else {
//         selectedItems = selectedItems.filter((item) => item !== value);
//       }

//       updateInputDisplay(); // Update the input field display
//       searchInput.value = ""; // Clear the search input
//     }
//   });

//   // Function to update the input field display
//   function updateInputDisplay() {
//     selectInput.value = selectedItems.join(", "); // Display selected items
//   }

//   // Close the dropdown if clicked outside
//   document.addEventListener("click", (e) => {
//     if (!e.target.closest(".custom-multi-select")) {
//       dropdown.style.display = "none";
//     }
//   });

//   $("#myForm").validate({
//     rules: {
//       fname: "required",
//       email: {
//         required: true,
//         email: true,
//       },
//       tel: {
//         required: true,
//         minlength: 9,
//         maxlength: 11,
//       },
//       event: "required",
//       service: "required",
//       notes: {
//         required: false,
//       },
//     },

//     messages: {
//       fname: "Please Enter your Name",
//       email: "Please Enter your Email",
//       tel: "Please Enter your Mobile Number",
//       event: "Please Choose Event",
//       service: "Please Choose Service",
//     },

//     submitHandler: function (form) {
//       // Call sendMail function or directly call emailjs here
//       sendMail();
//       var params = {
//         from_name: document.getElementById("funame").value,
//         email_id: document.getElementById("email_id").value,
//         tel_id: document.getElementById("tel").value,
//         event_id: document.getElementById("event").value,
//         service: { ...selectedItems },
//         notes_id: document.getElementById("notes").value,
//       };
//       const formData = JSON.stringify(params);

//       console.log(formData);

//       // Prevent default form submission if using AJAX
//       return false;
//     },
//   });
// });

// function sendMail() {
//   const responseMsg = document.getElementById("response");
//   const errorMessage = document.getElementById("errorMessage");
//   const submitButton = document.getElementById("Submit");

//   // Show loading text and disable the button
//   submitButton.innerHTML = "Sending...";
//   submitButton.disabled = true;

//   // Collect form data
//   var params = {
//     from_name: document.getElementById("funame").value,
//     email_id: document.getElementById("email_id").value,
//     tel_id: document.getElementById("tel").value,
//     event_id: document.getElementById("event").value,
//     service: { ...selectedItems },
//     notes_id: document.getElementById("notes").value,
//   };
//   const formData = JSON.stringify(params);

//   // Send email using EmailJS
//   emailjs
//     .send("service_yxvzbi7", "template_b3vmq1a", formData)
//     .then((res) => {
//       if (responseMsg) {
//         responseMsg.style.display = "block"; // Show success message
//         responseMsg.textContent = "Message sent successfully!";
//         setTimeout(() => {
//           $("#myForm")[0].reset(); // Reset the form after a delay
//           responseMsg.style.display = "none";
//           $("html, body").animate({ scrollTop: 0 }, "slow"); // Scroll to top using jQuery
//         }, 2000);
//       } else {
//         console.error("Element with ID 'responseMsg' not found.");
//       }
//       // Re-enable the button
//       submitButton.innerHTML = "Submit";
//       submitButton.disabled = false;
//     })
//     .catch((error) => {
//       errorMessage.style.display = "block";
//       errorMessage.textContent = "Failed to send message!";
//       submitButton.innerHTML = "Submit"; // Re-enable the button
//       submitButton.disabled = false;
//     });
// }
let selectedItems = []; // Declare globally

$(document).ready(function () {
  const selectBtn = document.getElementById("customMultiSelect");
  const dropdown = document.querySelector(".dropdown");
  const searchInput = document.getElementById("searchInput");
  const optionsList = document.getElementById("optionsList");
  const selectInput = document.getElementById("selectInput");

  // let selectedItems = [];

  // Toggle the dropdown display when clicking the button
  selectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });

  // Filter options based on search input
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const options = optionsList.querySelectorAll("li");
    options.forEach((option) => {
      const text = option.textContent.toLowerCase();
      option.style.display = text.includes(searchTerm) ? "block" : "none";
    });
  });

  // Handle option selection
  optionsList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const value = e.target.dataset.value;

      // Add or remove selected items
      if (!selectedItems.includes(value)) {
        selectedItems.push(value);
      } else {
        selectedItems = selectedItems.filter((item) => item !== value);
      }

      updateInputDisplay(); // Update the input field display
      searchInput.value = ""; // Clear the search input
    }
  });

  // Function to update the input field display
  function updateInputDisplay() {
    selectInput.value = selectedItems.join(", "); // Display selected items
  }

  // Close the dropdown if clicked outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-multi-select")) {
      dropdown.style.display = "none";
    }
  });

  // Form validation and submit handler
  $("#myForm").validate({
    rules: {
      fname: "required",
      email: {
        required: true,
        email: true,
      },
      tel: {
        required: true,
        minlength: 9,
        maxlength: 11,
      },
      event: "required",
      service: "required",
      notes: {
        required: false,
      },
    },

    messages: {
      fname: "Please Enter your Name",
      email: "Please Enter your Email",
      tel: "Please Enter your Mobile Number",
      event: "Please Choose Event",
      service: "Please Choose Service",
    },

    submitHandler: function (form, e) {
      // Prevent form from submitting and refreshing the page
      e.preventDefault();

      sendMail(selectedItems);
      return false; // Prevent default form submission
    },
  });
});

// Send email function
function sendMail(selectedItems) {
  const responseMsg = document.getElementById("response");
  const errorMessage = document.getElementById("errorMessage");
  const submitButton = document.getElementById("Submit");

  // Show loading text and disable the button
  submitButton.innerHTML = "Sending...";
  submitButton.disabled = true;

  // Collect form data
  var params = {
    from_name: document.getElementById("funame").value,
    email_id: document.getElementById("email_id").value,
    tel_id: document.getElementById("tel").value,
    event_id: document.getElementById("event").value,
    service: selectedItems.join(" , "), // Convert array to string
    notes_id: document.getElementById("notes").value,
  };
  // Send email using EmailJS
  emailjs
    .send("service_wbq2y8o", "template_lvgk9hi", params)
    .then((res) => {
      if (responseMsg) {
        responseMsg.style.display = "block"; // Show success message
        responseMsg.textContent = "Message sent successfully!";
        setTimeout(() => {
          $("#myForm")[0].reset(); // Reset the form after a delay
          responseMsg.style.display = "none";
          $("html, body").animate({ scrollTop: 0 }, "slow"); // Scroll to top using jQuery
        }, 2000);
      } else {
        console.error("Element with ID 'responseMsg' not found.");
      }
      // Re-enable the button
      submitButton.innerHTML = "Submit";
      submitButton.disabled = false;
    })
    .catch((error) => {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Failed to send message!";
      submitButton.innerHTML = "Submit"; // Re-enable the button
      submitButton.disabled = false;
    });
}
