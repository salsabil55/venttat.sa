function sendMail() {
  const responseMsg = document.getElementById("respone");
  const submitButtn = document.getElementById("Submit");

  var params = {
    from_name: document.getElementById("funame").value,
    email_id: document.getElementById("email_id").value,
    tel_id: document.getElementById("tel").value,
    event_id: document.getElementById("event").value,
    service_id: document.getElementById("service").value,
  };

  emailjs
    .send("service_yxvzbi7", "template_b3vmq1a", params)
    .then((res) => {
      if (responseMsg) {
        $("#Submit").html("Sending...");
        $("#Submit").attr("disabled", "disabled");
        responseMsg.style.display = "block";
        setTimeout(() => {
          $("#myForm")[0].reset();
          $("html, body").animate({ scrollTop: 0 }, "slow");
        }, 2000);
      } else {
        console.error("Element with ID 'response' not found.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
