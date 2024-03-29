import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, postPokemon, typesPokemons } from "../../redux/actions";

export function UseForm(initialForm, validate) {
  const [form, setForm] = useState(initialForm);
  const [errors, seterrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [selectDisable, setselectDisable] = useState(false);

  const image =
    "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/07/247161-nuevos-pokemon-salen-huevos.jpg?itok=_KF-nmwE";

  const allTypes = useSelector((state) => state.types);
  const pokemon = useSelector((state) => state.pokemons);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
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
    setselectDisable(true);
  };

  const enableSelect = (e) => {
    const typ = form.types.filter((el) => el === e.target.value);
    typ.length !== 1 ? setselectDisable(true) : setselectDisable(false);
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
    let coincidencia = pokemon.find((e) => e.name === form.name);

    if (coincidencia) {
      return alert("the pokemon already exists");
    } else if (Object.keys(errors).length === 0) {
      setLoading(true);
      let imag = form.img === "" ? image : form.img;

      const newPokemon = {
        name: form.name,
        hp: form.hp,
        attack: form.attack,
        defense: form.defense,
        speed: form.speed,
        height: form.height,
        weight: form.weight,
        img: imag,
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
      alert("Pokemon created");
    } else {
      return;
    }
  };
  return {
    form,
    errors,
    loading,
    allTypes,
    disabled,
    handleChange,
    handleTypeChange,
    handleBlur,
    handleDeleteType,
    handleSubmit,
    selectDisable,
    enableSelect,
  };
}
