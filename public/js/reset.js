function onSubmit() {
  const [form] = document.getElementsByTagName('form');
  const [password, confirmPassword] = form;

  if (password.value !== confirmPassword.value) {
    const errorBox = document.getElementById('error-box');
    errorBox.innerHTML = 'Password doest not match! Please try again.';
    errorBox.style.display = 'block';
    return;
  }

  form.submit();
}
