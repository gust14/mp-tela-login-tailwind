const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');
const togglePassword = document.getElementById('togglePassword');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');


// Função para validar email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Função para validar o usuário
function validateUsername() {
  if (usernameInput.value.trim() === '') {
    usernameError.textContent = 'O campo de usuário é obrigatório';
    return false;
  } else if (!validateEmail(usernameInput.value)) {
    usernameError.textContent = 'Insira um email válido';
    return false;
  } else {
    usernameError.textContent = ''; // Limpa a mensagem de erro
    return true;
  }
}

// Função para validar a senha
function validatePassword() {
  if (passwordInput.value.trim() === '') {
    passwordError.textContent = 'O campo de senha é obrigatório';
    return false;
  } else if (passwordInput.value.length < 8) {
    passwordError.textContent = 'A senha deve ter pelo menos 8 caracteres';
    return false;
  } else {
    passwordError.textContent = ''; // Limpa a mensagem de erro
    return true;
  }
}

// Verifica a validação ao digitar no campo de usuário
usernameInput.addEventListener('input', () => {
  validateUsername();
});

// Verifica a validação ao digitar no campo de senha
passwordInput.addEventListener('input', () => {
  validatePassword();
});

//  Alterna a visibilidade da senha
togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePassword.classList.remove('fa-eye');
      togglePassword.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      togglePassword.classList.remove('fa-eye-slash');
      togglePassword.classList.add('fa-eye');
    }
  });

// Envia o formulário
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Valida novamente antes do envio
  const usernameIsValid = validateUsername();
  const passwordIsValid = validatePassword();

  if (usernameIsValid && passwordIsValid) {
    // Se os dados forem válidos, envie o formulário
    loginModal.classList.remove('hidden');
    form.reset();
    
  }
});

// Fecha o modal
closeModal.addEventListener('click', () => {
  loginModal.classList.add('hidden');
});