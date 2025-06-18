
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (!email || !password) {
    errorMsg.innerText = "Por favor complete todos los campos.";
    return;
  }

  if (email === "admin@veranum.cl" && password === "admin123") {
    window.location.href = "admin.html";
  } else if (email === "cliente@veranum.cl" && password === "cliente123") {
    window.location.href = "cliente.html";
  } else {
    errorMsg.innerText = "Correo o contraseña incorrectos.";
  }
});
