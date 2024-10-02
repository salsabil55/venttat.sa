//

$(document).ready(function () {
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

    submitHandler: function (form) {
      // Call sendMail function or directly call emailjs here
      sendMail();
      // Prevent default form submission if using AJAX
      return false;
    },
  });
});

function sendMail() {
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
    service_id: document.getElementById("services").value,
    notes_id: document.getElementById("notes").value,
  };

  // Send email using EmailJS
  emailjs
    .send("service_yxvzbi7", "template_b3vmq1a", params)
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
