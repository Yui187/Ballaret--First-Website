function Login() {
  const usernameInput =  document.querySelector('#username-id').value;
  const passwordInput = document.querySelector('#password-id').value;

  if (!usernameInput) {
    alert('Please input a username');
    return;
  } else if (usernameInput.length < 3) {
    alert('Username should have or three (3) or more characters');
    return;
  }
  
  if (!passwordInput) {
    alert('Please input a password');
    return;
  } else if (passwordInput.length < 3) {
    alert('Password should have three (3) or more characters');
    return;
  }

  if (usernameInput === "admin" && passwordInput === "root") {
    location.href = "Home.html";
  } else {
    alert('Access denied');
  }
}
