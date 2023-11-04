import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercises, fetchFood, fetchGoals } from "../../actions";
import "./DashboardData.css";

export const DashboardData = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const totalCaloriesBurned = state.exerciseReducer.exerciseList?.reduce(
    (acc, curr) => {
      return (acc = acc + curr.calories * curr.duration);
    },
    0
  );

  const totalCaloriesConsumed = state.foodReducer.foodsList?.reduce(
    (acc, curr) => {
      return (acc = acc + curr.calories);
    },
    0
  );

  const totalCaloriesGoal = state.goalReducer.goalsList?.reduce((acc, curr) => {
    return curr.status === "Abandoned"
      ? acc
      : (acc = acc + curr.targetCaloriesValue);
  }, 0);

  useEffect(() => {
    dispatch(fetchFood());
    dispatch(fetchExercises());
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <div className="dashboard-data-box">
      <h2>
        {" "}
        <i className="fa-solid fa-dumbbell"></i> Total Calories Burned:{" "}
        {totalCaloriesBurned || 0}
      </h2>
      <h2>
        {" "}
        <i className="fa-solid fa-pizza-slice"></i> Total Calories Consumed:{" "}
        {totalCaloriesConsumed || 0}
      </h2>
      <h2>
        {" "}
        <i className="fa-solid fa-bullseye"></i> Total Calories Goal:{" "}
        {totalCaloriesGoal || 0}
      </h2>
      <h2>
        {" "}
        <i className="fa-solid fa-heart-pulse"></i> Remaining Calories to Goal:
        {parseFloat(totalCaloriesGoal) +
          parseFloat(totalCaloriesConsumed) -
          parseFloat(totalCaloriesBurned) || 0}{" "}
      </h2>
    </div>
  );
};
