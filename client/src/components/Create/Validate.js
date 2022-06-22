export function Validate(form) {
  let errors = {};
  const regexNumber = /^-?\d*(\.\d+)?$/;
  const regexName = /^[a-zA-Zñáéíóúü]*$/;
  const regexUrl = /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i;

  if (!form.name.trim()) {
    errors.name = "Pokemon Name is required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name =
      "The name must NOT contain numbers or special characters, try again!";
  }
  if (form.name.length > 15) {
    errors.name = "The name can only be 15 characters long. Please try again!";
  }

  if (!regexUrl.test(form.img.trim())) {
    errors.img = "The url must be of an image.Please try again!";
  }

  if (form.hp.trim() < 1 || form.hp.trim() > 251) {
    errors.hp = "Health point, must be between 1 or 250";
  } else if (!regexNumber.test(form.hp.trim())) {
    errors.hp = "The value entered must be a number. Try again!";
  }

  if (form.attack.trim() < 1 || form.attack.trim() > 251) {
    errors.attack = "Attack point, must be between 1 or 250";
  } else if (!regexNumber.test(form.attack.trim())) {
    errors.attack = "The value entered must be a number. Try again!";
  }

  if (form.defense.trim() < 1 || form.defense.trim() > 251) {
    errors.defense = "Defense point, must be between 1 or 250";
  } else if (!regexNumber.test(form.defense.trim())) {
    errors.defense = "The value entered must be a number. Try again!";
  }

  if (form.speed.trim() < 1 || form.speed.trim() > 251) {
    errors.speed = "Speed point, must be between 1 or 250";
  } else if (!regexNumber.test(form.speed.trim())) {
    errors.speed = "The value entered must be a number. Try again!";
  }

  if (form.weight.trim() < 1 || form.weight.trim() > 251) {
    errors.weight = "Weight point, must be between 1 or 250";
  } else if (!regexNumber.test(form.weight.trim())) {
    errors.weight = "The value entered must be a number. Try again!";
  }

  if (form.height.trim() < 1 || form.height.trim() > 251) {
    errors.height = "Height point, must be between 1 or 250";
  } else if (!regexNumber.test(form.height.trim())) {
    errors.height = "The value entered must be a number. Try again!";
  }

  if (form.types.length > 2 || form.types.length <= 0) {
    errors.types = "only maximum two types are allowed";
  }

  return errors;
}
