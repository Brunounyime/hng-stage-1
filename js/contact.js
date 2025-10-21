document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const successMsg = document.getElementById("success-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    // Name validation
    if (!name.value.trim()) {
      document.getElementById("error-name").textContent =
        "Full name is required.";
      valid = false;
    } else {
      document.getElementById("error-name").textContent = "";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      document.getElementById("error-email").textContent = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      document.getElementById("error-email").textContent =
        "Enter a valid email.";
      valid = false;
    } else {
      document.getElementById("error-email").textContent = "";
    }

    // Subject validation
    if (!subject.value.trim()) {
      document.getElementById("error-subject").textContent =
        "Subject is required.";
      valid = false;
    } else {
      document.getElementById("error-subject").textContent = "";
    }

    // Message validation
    if (!message.value.trim()) {
      document.getElementById("error-message").textContent =
        "Message is required.";
      valid = false;
    } else if (message.value.trim().length < 10) {
      document.getElementById("error-message").textContent =
        "Message must be at least 10 characters.";
      valid = false;
    } else {
      document.getElementById("error-message").textContent = "";
    }

    // Show success message
    if (valid) {
      successMsg.style.display = "block";
      form.reset();
      setTimeout(() => {
        successMsg.style.display = "none";
      }, 4000);
    } else {
      successMsg.style.display = "none";
    }
  });
});
