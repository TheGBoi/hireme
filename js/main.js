function handleForm(event) {
    event.preventDefault();
    document.getElementById('form-response').innerText = "Thanks for reaching out! I'll get back to you soon.";
    event.target.reset();
  }
  