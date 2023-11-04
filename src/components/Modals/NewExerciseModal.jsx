import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../../actions";
import "./modal.css";

export const NewExerciseModal = () => {
  const dispatch = useDispatch();
  const [newExercise, setNewExercise] = useState({
    name: "",
    duration: 0,
    calories: 0
  });

  const handleAddExercise = (newExercise) => {
    dispatch(addExercise(newExercise));
  };
  return (
    <div className="modal-page">
      <div className="modal-box">
        <header className="modal-header">
          <h3 className="modal-heading">Add New Exercise</h3>
          <button
            className="btn-delete-entry close-modal-btn"
            onClick={() =>
              dispatch({ type: "SHOW_NEW_EXERCISE_MODAL", payload: false })
            }
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </header>
        <section className="modal-details-section">
          <fieldset>
            <legend>Name of Exercise</legend>
            <label htmlFor="name">
              <input
                required
                placeholder="Walking"
                type="text"
                onChange={(event) =>
                  setNewExercise(() => ({
                    ...newExercise,
                    name: event.target.value
                  }))
                }
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Duration of Exercise (in minutes)</legend>
            <label htmlFor="duration">
              <input
                required
                placeholder="30"
                type="number"
                onChange={(event) =>
                  setNewExercise(() => ({
                    ...newExercise,
                    duration: event.target.value
                  }))
                }
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Calories Burned (per minute)</legend>
            <label htmlFor="calories">
              <input
                required
                type="number"
                placeholder="6"
                onChange={(event) =>
                  setNewExercise(() => ({
                    ...newExercise,
                    calories: event.target.value
                  }))
                }
              />
            </label>
          </fieldset>
        </section>
        <section className="btn-section-modal">
          <button
            className="btn-save-modal"
            onClick={() => {
              if (
                newExercise.name.length &&
                newExercise.duration > 0 &&
                newExercise.calories > 0
              ) {
                handleAddExercise(newExercise);
                dispatch({ type: "SHOW_NEW_EXERCISE_MODAL", payload: false });
                setNewExercise({
                  name: "",
                  duration: 0,
                  calories: 0
                });
              }
            }}
          >
            Add
          </button>
          <button
            className="btn-discard-modal"
            onClick={() => {
              dispatch({ type: "SHOW_NEW_EXERCISE_MODAL", payload: false });
              setNewExercise({
                name: "",
                duration: 0,
                calories: 0
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
