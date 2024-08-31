function sendMail() {
  const responseMsg = document.getElementById("respone");
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
        responseMsg.style.display = "block";
        console.log("Successfully sent message:", res);
      } else {
        console.error("Element with ID 'response' not found.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
