import toast from "react-hot-toast";

export const fetchExercises = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_EXERCISE_DATA_LOADING" });
    const response = await fetch(
      "https://fitness-tracker-apis.omkarpatil20.repl.co/exercises"
    );
    const data = await response.json();
    dispatch({ type: "FETCH_EXERCISE_DATA_SUCCESS", payload: data.exercises });
  } catch (error) {
    toast.error({ error });
    dispatch({ type: "FETCH_EXERCISE_DATA_FAILURE", payload: error.message });
  }
};

export const fetchFood = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_FOOD_DATA_LOADING" });
    const response = await fetch(
      "https://fitness-tracker-apis.omkarpatil20.repl.co/food"
    );
    const data = await response.json();
    dispatch({ type: "FETCH_FOOD_DATA_SUCCESS", payload: data.foodItems });
  } catch (error) {
    toast.error({ error });
    dispatch({ type: "FETCH_FOOD_DATA_FAILURE", payload: error.message });
  }
};

export const fetchGoals = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_GOALS_DATA_LOADING" });
    const response = await fetch(
      "https://fitness-tracker-apis.omkarpatil20.repl.co/goals"
    );
    const data = await response.json();
    dispatch({ type: "FETCH_GOALS_DATA_SUCCESS", payload: data.goals });
  } catch (error) {
    toast.error({ error });
    dispatch({ type: "FETCH_GOALS_DATA_FAILURE", payload: error.message });
  }
};

export const addExercise = (exerciseObj) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_EXERCISE_DATA_LOADING" });
    const response = await fetch(
      "https://fitness-tracker-apis.omkarpatil20.repl.co/exercises",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(exerciseObj)
      }
    );
    const data = await response.json();
    dispatch({ type: "ADD_NEW_EXERCISE_SUCCESS", payload: data.exercise });
    toast.success("New Exercise Created Successfully!");
  } catch (error) {
    toast.error({ error });
    dispatch({ type: "FETCH_EXERCISE_DATA_FAILURE", payload: error.message });
  }
};

export const addFood = (foodObj) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_FOOD_DATA_LOADING" });
    const response = await fetch(
      "https://fitness-tracker-apis.omkarpatil20.repl.co/food",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(foodObj)
      }
    );
    const data = await response.json();
    dispatch({ type: "ADD_NEW_FOOD_SUCCESS", payload: data.foodItem });
    toast.success("New Food Added Successfully!");
  } catch (error) {
    toast.error({ error });
    dispatch({ type: "FETCH_FOOD_DATA_FAILURE", payload: error.message });
  }
};

export const addGoal = (goalObj) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_GOALS_DATA_LOADING" });
    const response = await fetch(
      "https://fitness-tracker-apis.omkarpatil20.repl.co/goals",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(goalObj)
      }
    );
    const data = await response.json();
    dispatch({ type: "ADD_NEW_GOAL_SUCCESS", payload: data.goal });
    toast.success("New Goal Created Successfully!");
  } catch (error) {
    toast.error({ error });
    dispatch({ type: "FETCH_GOALS_DATA_FAILURE", payload: error.message });
  }
};

export const deleteExercise = (exerciseId) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_EXERCISE_DATA_LOADING" });
    const response = await fetch(
      `https://fitness-tracker-apis.omkarpatil20.repl.co/exercises/${exerciseId}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      }
    );
    const data = await response.json();
    dispatch({ type: "DELETE_EXERCISE_SUCCESS", payload: data.exercises });
    toast.success("Exercise Deleted Successfully!");
  } catch (error) {
    toast.error({ error });
    dispatch({ type: "FETCH_EXERCISE_DATA_FAILURE", payload: error.message });
  }
};

export const deleteFood = (foodId) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_FOOD_DATA_LOADING" });
    const response = await fetch(
      `https://fitness-tracker-apis.omkarpatil20.repl.co/food/${foodId}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      }
    );
    const data = await response.json();
    dispatch({ type: "DELETE_FOOD_SUCCESS", payload: data.foods });
    toast.success("Food item Deleted Successfully!");
  } catch (error) {
    toast.error({ error });
    dispatch({ type: "FETCH_FOOD_DATA_FAILURE", payload: error.message });
  }
};

export const deleteGoal = (goalId) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_GOALS_DATA_LOADING" });
    const response = await fetch(
      `https://fitness-tracker-apis.omkarpatil20.repl.co/goals/${goalId}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      }
    );
    const data = await response.json();
    dispatch({ type: "DELETE_GOAL_SUCCESS", payload: data.goals });
    toast.success("Goal Deleted Successfully!");
  } catch (error) {
    toast.error({ error });
    dispatch({ type: "FETCH_GOALS_DATA_FAILURE", payload: error.message });
  }
};
