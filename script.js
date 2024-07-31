let themeButton = document.getElementById("theme-button");
// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
  console.log("hello")
  document.body.classList.toggle("dark-mode");
}
themeButton.addEventListener("click", toggleDarkMode);


const form = document.getElementById('myForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const hometown = document.getElementById('hometown').value;
  const email = document.getElementById('email').value;

  const result = document.createElement('p');
  result.textContent = 'thank you, ' + name + ' for your support!';

  resultDiv.appendChild(result);
  form.reset();
})
