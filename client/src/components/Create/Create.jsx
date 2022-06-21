import { Link } from "react-router-dom";
import { UseForm } from "../UseForm/UseForm";
import { Validate } from "./Validate";
import CreateCss from "./CreateCss.module.css";

export default function Create() {
  const initialForm = {
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  };
  const {
    form,
    errors,
    // loading,
    // response,
    allTypes,
    disabled,
    handleChange,
    handleTypeChange,
    handleBlur,
    handleDeleteType,
    handleSubmit,
  } = UseForm(initialForm, Validate);

  return (
    <div>
      <Link to="/home">
        <span></span>
        <span></span>
        Home
        <span></span>
        <span></span>
      </Link>

      <form onSubmit={handleSubmit}>
        <div className={CreateCss.formulario}>
          <div className={CreateCss.form_group}>
            <label className={CreateCss.name_label}>Name:</label>
            <input
              className={CreateCss.form_control}
              type="text"
              name="name"
              placeholder="Pokemon name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.name}
              required
            />
            {errors.name && <p className={CreateCss.error}>{errors.name}</p>}
          </div>

          <div className={CreateCss.form_group}>
            <label className={CreateCss.name_label}>Imagen:</label>
            <input
              className={CreateCss.form_control}
              type="text"
              name="img"
              placeholder="Pokemon url-imagen"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.img}
              required
            />
          </div>

          <div className={CreateCss.form_group}>
            <label>Hp:</label>
            <input
              className={CreateCss.form_control}
              type="number"
              name="hp"
              placeholder="Health point"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.hp}
            />
            {errors.hp && <p className={CreateCss.error}>{errors.hp}</p>}
          </div>

          <div className={CreateCss.form_group}>
            <label>Attack:</label>
            <input
              className={CreateCss.form_control}
              type="number"
              name="attack"
              placeholder="Attack point"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.attack}
            />
            {errors.attack && (
              <p className={CreateCss.error}>{errors.attack}</p>
            )}
          </div>

          <div className={CreateCss.form_group}>
            <label>Defense:</label>
            <input
              className={CreateCss.form_control}
              type="number"
              name="defense"
              placeholder="Defense point"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.defense}
              required
            />
            {errors.defense && (
              <p className={CreateCss.error}>{errors.defense}</p>
            )}
          </div>

          <div className={CreateCss.form_group}>
            <label>Speed:</label>
            <input
              className={CreateCss.form_control}
              type="number"
              name="speed"
              placeholder="Speed point"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.speed}
              required
            />
            {errors.speed && <p className={CreateCss.error}>{errors.speed}</p>}
          </div>

          <div className={CreateCss.form_group}>
            <label>Weight:</label>
            <input
              className={CreateCss.form_control}
              type="number"
              name="weight"
              placeholder="Weight point"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.weight}
              required
            />
            {errors.weight && (
              <p className={CreateCss.error}>{errors.weight}</p>
            )}
          </div>

          <div className={CreateCss.form_group}>
            <label>Height:</label>
            <input
              className={CreateCss.form_control}
              type="number"
              name="height"
              placeholder="Height point"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.height}
              required
            />
            {errors.height && (
              <p className={CreateCss.error}>{errors.height}</p>
            )}
          </div>
          <label>Types:</label>
          <div className={CreateCss.select}>
            {/* <label>Types:</label>
            {allTypes?.map((t, index) => {
              return (
                <div
                  className={CreateCss.conten_input_checkbox}
                  key={index}
                  value={form.types}
                  name="types"
                  onChange={handleTypeChange}
                >
                  <input
                    type="checkbox"
                    className={CreateCss.input_checkbox}
                    value={t.name}
                  />
                  <label key={index}>{t.name}</label>
                </div>
              );
            })}
            {errors.types && <p className={CreateCss.error}>{errors.types}</p>} */}

            <select
              value={form.types}
              name="types"
              type="select-multiple"
              multiple={true}
              className={CreateCss.standard_select}
              onChange={handleTypeChange}
            >
              {allTypes?.map((e, index) => (
                <option key={index} value={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            {form.types?.map((type, index) => (
              <p key={index}>
                {type}
                <button onClick={(e) => handleDeleteType(type)}>X</button>
              </p>
            ))}
          </div>

          <button
            className={CreateCss.btn}
            value="create"
            type="submit"
            disabled={disabled}
          >
            Create
          </button>
        </div>
      </form>

      {/* {loading && <Loader/>}
    {response &&(
      <Message msg="Los datos han sido enviado"/>
    )} */}
    </div>
  );
}
