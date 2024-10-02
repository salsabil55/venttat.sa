// function sendMail() {
//   var params = {
//     from_name: document.getElementById("funame").value,
//     email_id: document.getElementById("email_id").value,
//     tel_id: document.getElementById("tel").value,
//     event_id: document.getElementById("event").value,
//     service_id: document.getElementById("service").value,
//     message_id: document.getElementById("message").value,
//   };

//   emailjs
//     .send("service_yxvzbi7", "template_b3vmq1a", params)
//     .then((res) => {
//       if (responseMsg) {
//         responseMsg.style.display = "block";
//         setTimeout(() => {
//           $("#myForm")[0].reset();
//           responseMsg.style.display = "none";

//           $("html, body").animate({ scrollTop: 0 }, "slow");
//         }, 2000);
//       } else {
//         console.error("Element with ID 'response' not found.");
//       }
//     })
//     .catch((error) => {
//       errorMessage.style.display = "block";
//       errorMessage.textContent = "Failed to send message!";
//     });
// }

// second sol

function sendMail() {
  const responseMsg = document.getElementById("response");
  const submitButtn = document.getElementById("Submit");
  const errorMessage = document.getElementById("errorMessage");

  // Form validation
  const inputs = document.querySelectorAll("#myForm input");
  const selects = document.querySelectorAll("#myForm select[required]");

  let isValid = true; // Assume the form is valid

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      // Check if input is empty
      isValid = false; // Set form validity to false
    }
  });
  // Validate select fields
  selects.forEach((select) => {
    if (select.value === "") {
      isValid = false; // Set form validity to false if any select field is empty
    }
  });
  // If form is not valid, show an error message and prevent submission
  if (!isValid) {
    errorMessage.style.display = "block"; // Show error message
    return false; // Prevent form submission
  } else {
    errorMessage.style.display = "none"; // Hide error message

    $("#Submit").html("Sending...");
    $("#Submit").attr("disabled", "disabled");

    var params = {
      from_name: document.getElementById("funame").value,
      email_id: document.getElementById("email_id").value,
      tel_id: document.getElementById("tel").value,
      event_id: document.getElementById("event").value,
      service_id: document.getElementById("service").value,
      message_id: document.getElementById("message").value,
    };

    emailjs
      .send("service_yxvzbi7", "template_b3vmq1a", params)
      .then((res) => {
        if (responseMsg) {
          responseMsg.style.display = "block";
          setTimeout(() => {
            $("#myForm")[0].reset();
            $("html, body").animate({ scrollTop: 0 }, "slow");
          }, 2000);
        } else {
          console.error("Element with ID 'response' not found.");
        }

        // Re-enable the button after successful send
        responseMsg.style.display = "none";
        $("#Submit").html("Submit");
        $("#Submit").removeAttr("disabled");
      })
      .catch((error) => {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Failed to send message!";

        // Re-enable the button in case of error
        $("#Submit").html("Submit");
        $("#Submit").removeAttr("disabled");
      });
  }
}
