export default function ValidatePassword(password) {
  var regex = /^(?=.*[A-Z])(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/;
  return regex.test(password);
}
