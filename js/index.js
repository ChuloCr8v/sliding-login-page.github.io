const signUpBtn = document.querySelector('.signup-btn');
const loginBtn = document.querySelector('.login-btn');
const container = document.querySelector('.container');


signUpBtn.addEventListener('click', () => {
  container.classList.add('signup-active')
})

loginBtn.addEventListener('click', () => {
  container.classList.remove('signup-active')
})