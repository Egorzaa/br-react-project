import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogsRequest } from "../../Store/Dogs/actions";
import { dogsSelector } from "../../Store/Dogs/selectors";

export const Dogs = () => {
  const dispatch = useDispatch();
  const { loading, error, dogs } = useSelector(dogsSelector);

  const handleGetDogs = () => {
    dispatch(getDogsRequest());
  };

  useEffect(() => {
    handleGetDogs();
  }, []);

  if (loading) return <CircularProgress />;

  if (error)
    return (
      <div>
        <div>Произошла ошибка</div>
        <button onClick={handleGetDogs}>Обновить страницу</button>
      </div>
    );

  return (
    <div>
      {dogs.map((dog) => (
        <div key={dog}>{dog}</div>
      ))}
    </div>
  );
};
