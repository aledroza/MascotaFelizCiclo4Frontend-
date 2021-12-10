// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
            registrarUsuario();
            event.preventDefault()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

function registrarUsuario(){
    alert("Usuario Registrado");

    let nombres = document.querySelector("#txtNombres").value;
    let apellidos = document.querySelector("#txtApellidos").value;
    let correo = document.querySelector("#txtCorreo").value;
    let direccion = document.querySelector("#txtDireccion").value;
    let telefono = document.querySelector("#txtTelefono").value;
    let rol = document.querySelector("#txtRol").value;
    let autenticacion = document.querySelector("#txtAutenticacion").value;

    let url = `http://localhost:3000/usuarios`;
    let datos ={
        nombres: nombres,
        apellidos: apellidos,
        correo: correo,
        direccion: direccion,
        telefono: telefono,
        rol: rol,
        autenticacion: autenticacion
    };

    fetch(url,{
        method:'post',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
    .then(mensaje =>{
        console.log(mensaje)
    })

}