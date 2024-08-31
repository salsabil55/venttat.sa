function sendMail() {
  let params;
  params = {
    from_name: document.getElementById("funame").value,
    email_id: document.getElementById("email_id").value,
    tel_id: document.getElementById("tel").value,
    event_id: document.getElementById("event").value,
    service_id: document.getElementById("service").value,
  }
    .send("service_yxvzbi7", "template_b3vmq1a", params)
    .then(function redirectToHome() {
      window.location.href = "/"; // Redirects to the home page
    });
  redirectToHome();
}
