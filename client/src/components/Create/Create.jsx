import { UseForm } from "../UseForm/UseForm";
import { Validate } from "./Validate";
import CreateCss from "./CreateCss.module.css";
import BotonesNav from "../BotonesNav/BotonesNav";
import Prev from "./PreView.module.css";
import Egg from "../Loader/Egg";

export default function Create() {
  const initialForm = {
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    img: "",
    types: [],
  };
  const {
    form,
    errors,
    allTypes,
    disabled,
    handleChange,
    handleTypeChange,
    handleBlur,
    handleDeleteType,
    handleSubmit,
  } = UseForm(initialForm, Validate);

  return (
    <div className={CreateCss.mastercontainer}>
      <div>
        <BotonesNav />
      </div>
      <div className={CreateCss.container_form_views}>
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
              />
              {errors.img && <p className={CreateCss.error}>{errors.img}</p>}
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
                required
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
              />
              {errors.speed && (
                <p className={CreateCss.error}>{errors.speed}</p>
              )}
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
              />
              {errors.height && (
                <p className={CreateCss.error}>{errors.height}</p>
              )}
            </div>
            <label>Types:</label>
            <div className={CreateCss.select}>
              <select
                value={form.types}
                name="types"
                type="select-multiple"
                multiple={true}
                className={CreateCss.standard_select}
                onChange={handleTypeChange}
              >
                {allTypes &&
                  allTypes
                    .sort(function (a, b) {
                      if (a.name < b.name) return -1;
                      if (a.name > b.name) return 1;
                      return 0;
                    })
                    .map((e, index) => (
                      <option key={index} value={e.name}>
                        {e.name}
                      </option>
                    ))}
              </select>
              {errors.types && (
                <p className={CreateCss.error}>{errors.types}</p>
              )}
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
        {/* ----------------------PreViews pokemon ---------------------- */}
        <div className={Prev.views}>
          <div id="card" className={Prev.detail_container}>
            <div className={Prev.pokeImg}>
              {form.img.length === 0 ? (
                <div className={Prev.egg}>
                  <Egg />
                </div>
              ) : (
                <img className={Prev.image} src={form.img} alt="Pokemon" />
              )}
            </div>
            <div className={Prev.pokeName}>
              <div id="name">
                <h2>Name:</h2>
              </div>
              <div id="namepokemon">
                <h2>{form.name}</h2>
              </div>
            </div>

            <div className={Prev.titletype}>
              <span>Types</span>
            </div>
            <div className={Prev.ContainerTypes}>
              <div className={Prev.positiontype}>
                {form.types?.map((type, index) => (
                  <div key={index} className={Prev.type}>
                    <div className={`${Prev.divtype} ${type} `} key={index}>
                      {type}
                      <button
                        className={Prev.btntype}
                        onClick={(e) => handleDeleteType(type)}
                      >
                        .
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={Prev.power}>
              <div className={Prev.cont_name}>
                <span>Hp: </span>
              </div>
              <div className={Prev.cont_point}>
                <span>{form.hp}</span>
              </div>
            </div>

            <div className={Prev.power}>
              <div className={Prev.cont_name}>
                <span>Attack: </span>
              </div>
              <div className={Prev.cont_point}>
                <span>{form.attack}</span>
              </div>
            </div>

            <div className={Prev.power}>
              <div className={Prev.cont_name}>
                <span>Defense: </span>
              </div>
              <div className={Prev.cont_point}>
                <span>{form.defense}</span>
              </div>
            </div>

            <div className={Prev.power}>
              <div className={Prev.cont_name}>
                <span>Speed: </span>
              </div>
              <div className={Prev.cont_point}>
                <span>{form.speed}</span>
              </div>
            </div>

            <div className={Prev.power}>
              <div className={Prev.cont_name}>
                <span>Height: </span>
              </div>
              <div className={Prev.cont_point}>
                <span>{form.height}</span>
              </div>
            </div>

            <div className={Prev.power}>
              <div className={Prev.cont_name}>
                <span>Weight: </span>
              </div>
              <div className={Prev.cont_point}>
                <span>{form.weight}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
