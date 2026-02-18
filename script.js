const users = [
  { id: 1, name: "Juan Pérez", email: "juan.perez@example.com" },
  { id: 2, name: "María Gómez", email: "maria.gomez@example.com" },
  { id: 3, name: "Carlos Rodríguez", email: "carlos.rodriguez@example.com" },
  { id: 4, name: "Laura Martínez", email: "laura.martinez@example.com" },
  { id: 5, name: "Andrés López", email: "andres.lopez@example.com" },
];

function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuario = users.find(user => user.id === id);

      if (usuario) {
        resolve(usuario);
      } else {
        reject("Usuario no existe");
      }
    }, 2000);
  });
}

const btn = document.getElementById("btn");
const input = document.getElementById("userId");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", () => {
  const id = Number(input.value);

  if (!id) {
    resultado.innerHTML = "Ingrese un ID válido";
    return;
  }

  resultado.innerHTML = "Cargando usuario...";

  buscarUsuario(id)
    .then(usuario => {
      resultado.innerHTML = `
        <strong>Usuario encontrado:</strong><br>
        ID: ${usuario.id} <br>
        Nombre: ${usuario.name} <br>
        Email: ${usuario.email}
      `;
    })
    .catch(error => {
      resultado.innerHTML = ` ${error}`;
    })
    .finally(() => {
      console.log("Búsqueda finalizada");
    });
});
