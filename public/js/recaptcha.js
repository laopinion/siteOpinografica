function onSubmit(token) {
  alert('Gracias ' + document.getElementById('nombre').value);
}

function validateEmail(valor) {
  console.log(valor)
  if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
    return true;
  } else {
   return false;
  }
}

function validate(event) {
  event.preventDefault();
  const elNombre = document.getElementById('nombre');
  const elCorreo = document.getElementById('correo');
  const elPais = document.getElementById('pais');

  let nombre = elNombre.value;
  let correo = elCorreo.value;
  let pais = elPais.value;
  if (!document.getElementById('nombre').value || !document.getElementById('pais').value || !document.getElementById('correo').value) {
    // alert('You must add text to the required nombre');
    document.getElementById('error').textContent = 'Debe completar todos los campos obligatorios';

    if (nombre == '') {
      elNombre.focus();
      elNombre.classList.add('error');
    } else if (pais == '') {
      elPais.focus();
      elPais.classList.add('error');
      elNombre.classList.remove('error');
    } else if (correo == '') {
      elCorreo.focus();
      elCorreo.classList.add('error');
      elPais.classList.remove('error');
    } else {
      elNombre.classList.remove('error');
      elCorreo.classList.remove('error');
      elPais.classList.remove('error');
    }

  } else {
    // console.log(nombre)
    // console.log(validateEmail(correo))
    if (!validateEmail(correo)) {
      elCorreo.classList.add('error');
      document.getElementById('error').textContent = 'Debe escribir un correo'
    } else {
      elCorreo.classList.remove('error');
      document.getElementById('error').textContent = '';

      grecaptcha.execute();

      const formLogin = document.querySelector('#formContacto');
      const formData = new FormData(formLogin);

      // const token = document.getElementById('recaptcha-token').value;
      // console.log(`Este es el token -> ${token}`)
      // console.log('Esta es la data name -> '+ formData.get('nombre'));

      const data = JSON.stringify({
        nombre: formData.get('nombre'),
        pais: formData.get('pais'),
        correo: formData.get('correo'),
        mensaje: formData.get('mensaje'),
        token: formData.get('g-recaptcha-response')
      });
      
      fetch('/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data      
      })
      .then(function(res) {
        return res.json();
      })
      .then(data => {
        console.log('ok bien :D')
        // Guardamos el token en localStorage
        console.log(`Esta es la data -> ${data}`)
      })
      .catch(err => {
        console.log(`Algo salio mal -> ${err}`);
      })
    }
  }
}

function onload() {
  var element = document.getElementById('enviar');
  element.onclick = validate;
}
