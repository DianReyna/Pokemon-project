import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon, typesPokemons } from "../../redux/actions";

export function UseForm(initialForm, validate) {
  const [form, setForm] = useState(initialForm);
  const [errors, seterrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const allTypes = useSelector((state) => state.types);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(typesPokemons());
  }, [dispatch]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleTypeChange = (e) => {
    const { value } = e.target;
    setForm({
      ...form,
      types: [...form.types, value],
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    seterrors(validate(form));
    if (
      form.name.length > 0 &&
      form.name.length <= 10 &&
      form.types.length < 3 &&
      !errors.hasOwnProperty("img") &&
      !errors.hasOwnProperty("hp") &&
      !errors.hasOwnProperty("attack") &&
      !errors.hasOwnProperty("defense") &&
      !errors.hasOwnProperty("speed") &&
      !errors.hasOwnProperty("height") &&
      !errors.hasOwnProperty("weight")
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleDeleteType = (e) => {
    setForm({
      ...form,
      types: form.types.filter((t) => t !== e),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    seterrors(validate(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      const newPokemon = {
        name: form.name,
        hp: form.hp,
        attack: form.attack,
        defense: form.defense,
        speed: form.speed,
        height: form.height,
        weight: form.weight,
        img: form.img,
        types: form.types,
      };
      dispatch(postPokemon(newPokemon));
      setForm({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        img: "",
        types: [],
      });
      alert("Pokemon creado");
    } else {
      return;
    }
  };
  return {
    form,
    errors,
    loading,
    //  response,
    allTypes,
    disabled,
    handleChange,
    handleTypeChange,
    handleBlur,
    handleDeleteType,
    handleSubmit,
  };
}
