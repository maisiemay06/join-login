export default function ValidatePassword(password) {
  // upper & lower case, special char, min 6
  const regex = /^(?=.*[A-Z])(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,}/;

  return regex.test(password);
}
