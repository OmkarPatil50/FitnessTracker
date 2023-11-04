import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../../actions";

export const NewGoalModal = () => {
  const dispatch = useDispatch();
  const [newGoal, setNewGoal] = useState({
    name: "",
    description: "",
    targetDate: "",
    targetCaloriesValue: 0,
    status: "In Progress"
  });

  const handleAddGoal = (newGoal) => {
    dispatch(addGoal(newGoal));
  };
  return (
    <div className="modal-page">
      <div className="modal-box">
        <header className="modal-header">
          <h3 className="modal-heading">Add New Goal</h3>
          <button
            className="btn-delete-entry close-modal-btn"
            onClick={() =>
              dispatch({ type: "SHOW_NEW_GOAL_MODAL", payload: false })
            }
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </header>
        <section className="modal-details-section">
          <fieldset>
            <legend>Name of Goal</legend>
            <label htmlFor="name">
              <input
                required
                placeholder="Monthly goal"
                type="text"
                onChange={(event) =>
                  setNewGoal(() => ({
                    ...newGoal,
                    name: event.target.value
                  }))
                }
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Description</legend>
            <label htmlFor="description">
              <input
                required
                type="text"
                placeholder="This is my monthly goal"
                onChange={(event) =>
                  setNewGoal(() => ({
                    ...newGoal,
                    description: event.target.value
                  }))
                }
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Target Date</legend>
            <label htmlFor="targetDate">
              <input
                required
                type="date"
                onChange={(event) =>
                  setNewGoal(() => ({
                    ...newGoal,
                    targetDate: event.target.value
                  }))
                }
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Target Calories Value</legend>
            <label htmlFor="targetCaloriesValue">
              <input
                required
                type="number"
                placeholder="350"
                onChange={(event) =>
                  setNewGoal(() => ({
                    ...newGoal,
                    targetCaloriesValue: event.target.value
                  }))
                }
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Status</legend>
            <label htmlFor="status">
              <select
                name="status"
                onChange={(event) =>
                  setNewGoal(() => ({
                    ...newGoal,
                    status: event.target.value
                  }))
                }
              >
                <option>In Progress</option>
                <option>Achieved</option>
                <option>Abandoned</option>
              </select>
            </label>
          </fieldset>
        </section>
        <section className="btn-section-modal">
          <button
            className="btn-save-modal"
            onClick={() => {
              if (
                newGoal.name.length &&
                newGoal.description.length &&
                newGoal.targetDate &&
                newGoal.targetCaloriesValue >= 0 &&
                newGoal.status
              ) {
                handleAddGoal(newGoal);
                dispatch({ type: "SHOW_NEW_GOAL_MODAL", payload: false });
                setNewGoal({
                  name: "",
                  description: "",
                  targetDate: "",
                  targetCaloriesValue: 0,
                  status: "In Progress"
                });
              }
            }}
          >
            Add
          </button>
          <button
            className="btn-discard-modal"
            onClick={() => {
              dispatch({ type: "SHOW_NEW_GOAL_MODAL", payload: false });
              setNewGoal({
                name: "",
                description: "",
                targetDate: "",
                targetCaloriesValue: 0,
                status: "In Progress"
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
