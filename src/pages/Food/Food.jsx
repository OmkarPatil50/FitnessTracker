import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFood, fetchFood } from "../../actions";
import { NewFoodModal } from "../../components/Modals/NewFoodModal";
import { Loading } from "../../components/Loading/Loading";

export const Food = () => {
  const { foodReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteFood(id));
  };

  useEffect(() => {
    dispatch(fetchFood());
  }, [dispatch]);

  return (
    <div className="main-page">
      <header className="page-header">
        <h1 className="page-heading">Food</h1>
        <button
          className="btn-add-new-entry"
          onClick={() =>
            dispatch({
              type: "SHOW_NEW_FOOD_MODAL",
              payload: !foodReducer.showNewFoodModal
            })
          }
        >
          <i className="fa-solid fa-utensils"></i> Add New Food
        </button>
      </header>
      {foodReducer.foodsList?.length ? (
        <ul className="entries-list">
          {foodReducer.foodsList.map((food, index) => {
            const { name, calories, proteins, carbohydrates, fats, _id } = food;
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
                  Calories: {calories}
                </p>
                <p className="entries-list-item-details">
                  Proteins: {proteins} gms
                </p>
                <p className="entries-list-item-details">
                  Carbohydrates: {carbohydrates} gms
                </p>
                <p className="entries-list-item-details">Fats: {fats} gms</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="empty-list-line">
          "Time to nourish your body – add your first meal now!"
        </p>
      )}

      {foodReducer.loading ? <Loading /> : ""}
      {foodReducer.showNewFoodModal ? <NewFoodModal /> : ""}
    </div>
  );
};
