export function validateForm(values) {
  let errors = {};
  // Validation name
  if (!values.name) {
    errors.name = "Campo obligatorio.";
  } else if (
    !/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(values.name)
  ) {
    errors.name = "El nombre sólo puede contener letras y espacios.";
  }
  // Validation surname
  if (!values.surname) {
    errors.surname = "Campo obligatorio.";
  } else if (
    !/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(
      values.surname
    )
  ) {
    errors.surname = "El apellido sólo puede contener letras y espacios.";
  }
  // Validation email
  if (!values.email) {
    errors.email = "Ingresa tu email";
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
  ) {
    errors.email =
      "El correo solo puede contener letras, números, puntos, guiones y guión bajo.";
  }
  // Validation password
  if (!values.password) {
    errors.password = "Ingresa tu contraseña";
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe tener al menos seis caracteres.";
  } else if (!/(?=.*[0-9])/.test(values.password)) {
    errors.password = "Contraseña inválida. Debe contener al menos un número.";
  }
  //  Validation confirm password
  if (!values.repeatpassword) {
    errors.repeatpassword = "Vuelve a escribir tu contraseña.";
  }
  if (values.password && values.repeatpassword) {
    if (values.password !== values.repeatpassword) {
      errors.password = "Las contraseñas no coinciden.";
    }
  }
  //validation gender
  if (!values.gender) {
    errors.gender = "Debe seleccionar una de las opciones.";
  }
  //validation terms and policy
  if (!values.policy) {
    errors.policy = "Debe aceptar los términos y condiciones.";
  }
  return errors;
}

//
