document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const exam = document.getElementById('exam').value;
    const date = document.getElementById('date').value;

    // Simple validation
    if (name && email && exam && date) {
        document.getElementById('message').className = 'success';
        document.getElementById('message').innerText = 'Registration Successful!';
    } else {
        document.getElementById('message').className = 'error';
        document.getElementById('message').innerText = 'Please fill out all fields!';
    }
    
    document.getElementById('message').classList.remove('hidden');
});
