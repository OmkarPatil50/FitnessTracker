import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteGoal, fetchGoals } from "../../actions";
import { NewGoalModal } from "../../components/Modals/NewGoalModal";
import { Loading } from "../../components/Loading/Loading";

export const Goals = () => {
  const { goalReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteGoal(id));
  };

  const getDate = (date) => {
    const newDate = new Date(date);
    return newDate.toDateString("en-US");
  };

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <div className="main-page">
      <header className="page-header">
        <h1 className="page-heading">Goals</h1>
        <button
          className="btn-add-new-entry"
          onClick={() =>
            dispatch({
              type: "SHOW_NEW_GOAL_MODAL",
              payload: !goalReducer.showNewGoalModal
            })
          }
        >
          <i className="fa-solid fa-bullseye"></i> Add New Goal
        </button>
      </header>
      {goalReducer.goalsList?.length ? (
        <ul className="entries-list">
          {goalReducer.goalsList.map((goal, index) => {
            const {
              name,
              description,
              targetDate,
              targetCaloriesValue,
              status,
              _id
            } = goal;
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
                  Description: {description}
                </p>
                <p className="entries-list-item-details">
                  Target Date: {getDate(targetDate)}
                </p>
                <p className="entries-list-item-details">
                  Target Calories: {targetCaloriesValue}
                </p>
                <p className="entries-list-item-details">Status: {status}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="empty-list-line">
          "Ready to set some goals? Start by adding your first one now!"
        </p>
      )}
      {goalReducer.loading ? <Loading /> : ""}
      {goalReducer.showNewGoalModal ? <NewGoalModal /> : ""}
    </div>
  );
};
