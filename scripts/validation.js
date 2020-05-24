const inputs = document.querySelectorAll("input");

const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([\w-\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

function validate(field, regex) {
  regex.test(field.value) ? field.className = "valid" : field.className = "invalid";
}

inputs.forEach(input => {
  input.addEventListener("keyup", () => {
    validate(input, patterns[input.name]);
  })
})
