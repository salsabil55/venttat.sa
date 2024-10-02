//
$(document).ready(function () {
  $("#contactForm").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true,
      },
      mobil: {
        required: true,
        minlength: 9,
        maxlength: 11,
      },

      message: {
        required: false,
      },
    },

    messages: {
      name: "Please Enter your Name",
      email: "Please Enter your Email",
      mobil: "Please Enter your Mobile Number",
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
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email_id").value,
    mobil_id: document.getElementById("mobil_id").value,
    msg_id: document.getElementById("msg_id").value,
  };

  // Send email using EmailJS
  emailjs
    .send("service_yxvzbi7", "template_gdqb015", params)
    .then((res) => {
      if (responseMsg) {
        responseMsg.style.display = "block"; // Show success message
        responseMsg.textContent = "Message sent successfully!";
        setTimeout(() => {
          $("#contactForm")[0].reset(); // Reset the form after a delay
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
