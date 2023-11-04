import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../../actions";

export const NewFoodModal = () => {
  const dispatch = useDispatch();
  const [newFood, setNewFood] = useState({
    name: "",
    calories: 0,
    proteins: 0,
    carbohydrates: 0,
    fats: 0
  });

  const handleAddFood = (newFood) => {
    dispatch(addFood(newFood));
  };
  return (
    <div className="modal-page">
      <div className="modal-box">
        <header className="modal-header">
          <h3 className="modal-heading">Add New Food</h3>
          <button
            className="btn-delete-entry close-modal-btn"
            onClick={() =>
              dispatch({ type: "SHOW_NEW_FOOD_MODAL", payload: false })
            }
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </header>
        <section className="modal-details-section">
          <fieldset>
            <legend>Name of Food</legend>
            <label htmlFor="name">
              <input
                required
                placeholder="Apple"
                type="text"
                onChange={(event) =>
                  setNewFood(() => ({
                    ...newFood,
                    name: event.target.value
                  }))
                }
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Calories</legend>
            <label htmlFor="calories">
              <input
                required
                type="number"
                placeholder="6"
                onChange={(event) =>
                  setNewFood(() => ({
                    ...newFood,
                    calories: event.target.value
                  }))
                }
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Proteins</legend>
            <label htmlFor="proteins">
              <input
                required
                type="number"
                placeholder="5 gms"
                onChange={(event) =>
                  setNewFood(() => ({
                    ...newFood,
                    proteins: event.target.value
                  }))
                }
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Carbohydrates</legend>
            <label htmlFor="carbohydrates">
              <input
                required
                type="number"
                placeholder="21 gms"
                onChange={(event) =>
                  setNewFood(() => ({
                    ...newFood,
                    carbohydrates: event.target.value
                  }))
                }
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Fats</legend>
            <label htmlFor="fats">
              <input
                required
                type="number"
                placeholder="2 gms"
                onChange={(event) =>
                  setNewFood(() => ({
                    ...newFood,
                    fats: event.target.value
                  }))
                }
              />
            </label>
          </fieldset>
        </section>

        <section className="btn-section-modal" s>
          <button
            className="btn-save-modal"
            onClick={() => {
              if (
                newFood.name.length &&
                newFood.calories >= 0 &&
                newFood.proteins >= 0 &&
                newFood.carbohydrates >= 0 &&
                newFood.fats >= 0
              ) {
                handleAddFood(newFood);
                dispatch({ type: "SHOW_NEW_FOOD_MODAL", payload: false });
                setNewFood({
                  name: "",
                  calories: 0,
                  proteins: 0,
                  carbohydrates: 0,
                  fats: 0
                });
              }
            }}
          >
            Add
          </button>
          <button
            className="btn-discard-modal"
            onClick={() => {
              dispatch({ type: "SHOW_NEW_FOOD_MODAL", payload: false });
              setNewFood({
                name: "",
                calories: 0,
                proteins: 0,
                carbohydrates: 0,
                fats: 0
              });
            }}
          >
            Discard
          </button>
        </section>
      </div>
    </div>
  );
};
