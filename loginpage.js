document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validate the input fields (e.g., check for empty fields)
  if (username.trim() === '' || password.trim() === '') {
    alert('Please enter username and password');
    return;
  }

  // Simulate password hashing (Replace this with your actual password hashing algorithm)
  const hashedPassword = hashPassword(password);

  // Here, you'd typically send the username and hashed password to a server for authentication
  // For simulation purposes, we'll just log the username and hashed password
  console.log('Username:', username);
  console.log('Hashed Password:', hashedPassword);

  // Clear the form after submission
  document.getElementById('loginForm').reset();
});

// Simulate a password hashing function (Replace this with your actual password hashing algorithm)
function hashPassword(password) {
  // For simulation, we'll just append "hashed" to the password
  return password + 'hashed';
}