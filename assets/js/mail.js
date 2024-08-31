function sendMail() {
  const response_msg = document.getElementsByClassName("response");
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
      console.log("sucess sent msg", res);
      response_msg.style.display = "block";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
