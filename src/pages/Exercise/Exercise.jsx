import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExercise, fetchExercises } from "../../actions";
import { NewExerciseModal } from "../../components/Modals/NewExerciseModal";

import "./Exercise.css";
import { Loading } from "../../components/Loading/Loading";

export const Exercise = () => {
  const { exerciseReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteExercise(id));
  };

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  return (
    <div className="main-page">
      <header className="page-header">
        <h1 className="page-heading">Exercises</h1>
        <button
          className="btn-add-new-entry"
          onClick={() =>
            dispatch({
              type: "SHOW_NEW_EXERCISE_MODAL",
              payload: !exerciseReducer.showNewExerciseModal
            })
          }
        >
          <i className="fa-solid fa-running"></i> Add New Exercise
        </button>
      </header>

      {exerciseReducer.exerciseList?.length ? (
        <ul className="entries-list">
          {exerciseReducer.exerciseList.map((exercise, index) => {
            const { name, duration, calories, _id } = exercise;
            return (
              <li key={_id} className="entries-list-item">
                <header className="entries-list-item-header">
                  <h3>
                    {index + 1}. {name}
                  </h3>
                  <button
                    className="btn-delete-entry"
                    onClick={() => handleDelete(_id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </header>
                <p className="entries-list-item-details">
                  Duration: {duration}
                </p>
                <p className="entries-list-item-details">
                  Calories: {parseFloat(duration) * parseFloat(calories)} ({" "}
                  {calories} per minute )
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="empty-list-line">
          "Let's get moving – add your first workout now!"
        </p>
      )}

      {exerciseReducer.loading ? <Loading /> : ""}

      {exerciseReducer.showNewExerciseModal ? <NewExerciseModal /> : ""}
    </div>
  );
};
