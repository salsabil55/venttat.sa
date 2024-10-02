// let jobTitle = ""; // Initialize jobTitle variable

// $(document).ready(function () {
//   // Initialize EmailJS
//   emailjs.init("YGZQd0VsEGg_3HS2F"); // Replace with your EmailJS public key

//   // Form validation
//   $("#careerForm").validate({
//     rules: {
//       from_name: "required",
//       email_id: {
//         required: true,
//         email: true,
//       },
//       mobil_id: {
//         required: true,
//         minlength: 9,
//         maxlength: 11,
//       },
//       nationality_id: {
//         required: true,
//       },
//       my_file: {
//         required: true, // Ensure the CV is uploaded
//       },
//     },
//     messages: {
//       from_name: "Please Enter your Name",
//       email_id: "Please Enter your Email",
//       mobil_id: "Please Enter your Mobile Number",
//       nationality_id: "Please Choose your Nationality",
//       my_file: "Please Upload your CV (only .pdf, .doc, .docx)",
//     },
//   });

//   // Job Title button handler
//   const applyButtons = document.querySelectorAll(".job-apply button");
//   applyButtons.forEach((button) => {
//     button.addEventListener("click", function (e) {
//       e.preventDefault();
//       const jobCard = button.closest(".job-card");
//       jobTitle = jobCard.querySelector("h2").innerText;
//       document.getElementById("job_title").value = jobTitle;
//     });
//   });
// });

// document
//   .getElementById("careerForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Send the form using EmailJS
//     emailjs
//       .sendForm("service_wbq2y8o", "template_hv7pfag", this)
//       .then((res) => {
//         console.log("Email sent successfully!", res);
//         document.getElementById("response").textContent =
//           "Message sent successfully!";
//         document.getElementById("response").style.display = "block";
//         setTimeout(() => {
//           event.target.reset(); // Reset form after a delay
//           document.getElementById("response").style.display = "none"; // Hide response message
//         }, 2000);
//       })
//       .catch((error) => {
//         console.error("Failed to send email:", error);
//         document.getElementById("errorMessage").textContent =
//           "Failed to send message!";
//         document.getElementById("errorMessage").style.display = "block";
//       });
//   });

// // File input and clear button logic
// const attachmentInput = document.getElementById("my_file");
// const clearFileButton = document.getElementById("clearFileButton");

// attachmentInput.addEventListener("change", function () {
//   if (attachmentInput.files.length > 0) {
//     clearFileButton.style.display = "inline-block";
//   } else {
//     clearFileButton.style.display = "none";
//   }
// });

// clearFileButton.addEventListener("click", function () {
//   attachmentInput.value = "";
//   clearFileButton.style.display = "none";
// });

let jobTitle = ""; // Initialize jobTitle variable

$(document).ready(function () {
  // Initialize EmailJS
  emailjs.init("YGZQd0VsEGg_3HS2F"); // Replace with your EmailJS public key

  // Form validation
  $("#careerForm").validate({
    rules: {
      from_name: "required",
      email_id: {
        required: true,
        email: true,
      },
      mobil_id: {
        required: true,
        minlength: 9,
        maxlength: 11,
      },
      nationality_id: {
        required: true,
      },
      my_file: {
        required: true, // Ensure the CV is uploaded
      },
    },
    messages: {
      from_name: "Please Enter your Name",
      email_id: "Please Enter your Email",
      mobil_id: "Please Enter your Mobile Number",
      nationality_id: "Please Choose your Nationality",
      my_file: "Please Upload your CV (only .pdf, .doc, .docx)",
    },
    submitHandler: function (form) {
      // Send the form using EmailJS only after validation passes
      const responseMsg = document.getElementById("response");
      const errorMessage = document.getElementById("errorMessage");
      const submitButton = document.getElementById("Submit");
      // Disable the button and show loading
      $(submitButton).css({
        color: "#ecf8ff",
        "background-color": "#30c0e4",
        "box-shadow": "0 2px 12px 0px #30c0e4",
      });

      submitButton.innerHTML = "Sending...";
      submitButton.disabled = true;

      emailjs
        .sendForm("service_wbq2y8o", "template_hv7pfag", form)
        .then((res) => {
          // Success
          responseMsg.style.display = "block";
          responseMsg.textContent = "Message sent successfully!";
          setTimeout(() => {
            $("#careerForm")[0].reset(); // Reset the form
            responseMsg.style.display = "none";
            $("#myModal").modal("hide");
          }, 2000);

          submitButton.innerHTML = "Submit";
          submitButton.disabled = false;
        })
        .catch((error) => {
          // Error handling
          errorMessage.style.display = "block";
          errorMessage.textContent = "Failed to send message!";
          submitButton.innerHTML = "Submit";
          submitButton.disabled = false;
        });
    },
  });

  // Close button click handler
  $(".close").on("click", function () {
    // Reset the form
    $("#careerForm")[0].reset();
  });

  // Job Title button handler
  const applyButtons = document.querySelectorAll(".job-apply button");
  applyButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const jobCard = button.closest(".job-card");
      jobTitle = jobCard.querySelector("h2").innerText;
      document.getElementById("job_title").value = jobTitle;
    });
  });
});

// File input and clear button logic
const attachmentInput = document.getElementById("my_file");
const clearFileButton = document.getElementById("clearFileButton");

attachmentInput.addEventListener("change", function () {
  if (attachmentInput.files.length > 0) {
    $("#my_file-error").hide();

    clearFileButton.style.display = "inline-block";
  } else {
    clearFileButton.style.display = "none";
  }
});

clearFileButton.addEventListener("click", function () {
  attachmentInput.value = "";
  clearFileButton.style.display = "none";
});
