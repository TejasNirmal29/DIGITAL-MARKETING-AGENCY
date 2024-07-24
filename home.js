const form = document.getElementById('contactForm');
document.getElementById('us').addEventListener('click', function() {
    const formContainer = document.getElementById('contactFormContainer');
    const body = document.getElementById('first_container');

    // Show the form with animation and blur the background
    if (formContainer.classList.contains('hidden')) {
        formContainer.classList.remove('hidden');
        formContainer.classList.add('pop');
        body.classList.add('blur'); // Blur the body
    }
});
document.getElementById('closeSvg').addEventListener('click', function() {
    const formContainer = document.getElementById('contactFormContainer');
    const body = document.querySelector('.first_container');

    formContainer.classList.remove('pop'); // Hide the form
    formContainer.classList.add('hidden');  // Ensure it's hidden
    body.classList.remove('blur');          // Remove blur from the body
});


form.addEventListener('input', (e) => {
  const inputFields = form.querySelectorAll('input');
  inputFields.forEach((input) => {
    if (input.value !== '') {
      input.nextElementSibling.classList.add('filled');
    } else {
      input.nextElementSibling.classList.remove('filled');
    }
  });
});

