const expresiones = {     
    nombre: /^[A-Za-z]+$/,               
    numeros: /^[0-9]+$/,                  
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
    letraynumeros: /^[A-Za-z0-9-]+$/,     
    texto: /^[A-Za-z0-9.,; ()]+$/         
};

let formulario = document.getElementById('formulario');
let inputs = document.querySelectorAll('#formulario input');

const validarFormulario = (e) => {
    switch (e.target.name) {
        case 'nombre-apellido':
            let ok = expresiones.nombre.test(e.target.value);
            console.log(ok);
            let nombreApellido = document.getElementsByName('nombre-apellido')[0];
            if (ok) {
                console.log('correcto');
                nombreApellido.classList.remove('div-form-incorrect');
                nombreApellido.classList.add('div-form-correct');
            } else {
                console.log('incorrecto');
                nombreApellido.classList.remove('div-form-correct');
                nombreApellido.classList.add('div-form-incorrect');
            }
            break;
        case 'email':
            let email = document.getElementsByName('email')[0];
            if (expresiones.email.test(e.target.value)) {
                email.classList.remove('div-form-incorrect');
                email.classList.add('div-form-correct');
            } else {
                email.classList.add('div-form-incorrect');
                email.classList.remove('div-form-correct');
            }
            break;
        case 'telefono':
            let telefono = document.getElementsByName('telefono')[0];
            if (expresiones.numeros.test(e.target.value)) {
                telefono.classList.remove('div-form-incorrect');
                telefono.classList.add('div-form-correct');
            } else {
                telefono.classList.add('div-form-incorrect');
                telefono.classList.remove('div-form-correct');
            }
            break; // Añadir break aquí
        case 'marca':
            let marca = document.getElementsByName('marca')[0];
            if (expresiones.nombre.test(e.target.value)) {
                marca.classList.remove('div-form-incorrect');
                marca.classList.add('div-form-correct');
            } else {
                marca.classList.add('div-form-incorrect');
                marca.classList.remove('div-form-correct');
            }
            break; // Añadir break aquí
        case 'modelo':
            let modelo = document.getElementsByName('modelo')[0];
            if (expresiones.letraynumeros.test(e.target.value)) {
                modelo.classList.remove('div-form-incorrect');
                modelo.classList.add('div-form-correct');
            } else {
                modelo.classList.add('div-form-incorrect');
                modelo.classList.remove('div-form-correct');
            }
            break; // Añadir break aquí
        case 'version':
            let version = document.getElementsByName('version')[0];
            if (expresiones.letraynumeros.test(e.target.value)) {
                version.classList.remove('div-form-incorrect');
                version.classList.add('div-form-correct');
            } else {
                version.classList.add('div-form-incorrect');
                version.classList.remove('div-form-correct');
 }
            break; // Añadir break aquí
        case 'año':
            let ano = document.getElementsByName('ano')[0];
            if (expresiones.numeros.test(e.target.value)) {
                ano.classList.remove('div-form-incorrect');
                ano.classList.add('div-form-correct');
            } else {
                ano.classList.add('div-form-incorrect');
                ano.classList.remove('div-form-correct');
            }
            break; // Añadir break aquí
        case 'km':
            let km = document.getElementsByName('km')[0];
            if (expresiones.numeros.test(e.target.value)) {
                km.classList.remove('div-form-incorrect');
                km.classList.add('div-form-correct');
            } else {
                km.classList.add('div-form-incorrect');
                km.classList.remove('div-form-correct');
            }
            break; // Añadir break aquí
        case 'affair':
            let affair = document.getElementsByName('affair')[0];
            if (expresiones.texto.test(e.target.value)) {
                affair.classList.remove('div-form-incorrect');
                affair.classList.add('div-form-correct');
            } else {
                affair.classList.add('div-form-incorrect');
                affair.classList.remove('div-form-correct');
            }
            break; // Añadir break aquí
        case 'message':
            let message = document.getElementsByName('message')[0];
            if (expresiones.texto.test(e.target.value)) {
                message.classList.remove('div-form-incorrect');
                message.classList.add('div-form-correct');
            } else {
                message.classList.add('div-form-incorrect');
                message.classList.remove('div-form-correct');
            }
            break; // Añadir break aquí
        default:
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
});