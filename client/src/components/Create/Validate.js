export function Validate(form) {
  let errors = {};
  const regexNumber = /^-?\d*(\.\d+)?$/;
  const regexName = /^[a-zA-Zñáéíóúü]*$/;

  if (!form.name.trim()) {
    errors.name = "El Nombre del Pokemon es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name =
      "El nombre NO debe contener numeros o caracteres especiales,  ¡Intenta de Nuevo!";
  }
  if (form.name.length > 15) {
    errors.name =
      "El nombre solo puede tener 15 caracteres. ¡Intenta de Nuevo!";
  }

  if (form.hp.trim() < 1 || form.hp.trim() > 251) {
    errors.hp = "Health point, debe ser entre 1 o 250";
  } else if (!regexNumber.test(form.hp.trim())) {
    errors.hp = "El valor ingresado debe ser un numero. ¡Intenta de Nuevo!";
  }

  if (form.types.length > 2 || form.types.length <= 0) {
    errors.types = "only maximum two types are allowed";
  }

  return errors;
}
