import React from "react";
import { useExercise } from "../../hooks/useExercise";

const Table = () => {
  /*   const [errors, setErrors] = useState(null); */
  const { exercise } = useExercise();

  console.log(exercise);

  /* useEffect(() => {
    exerciseService.fetchAll().then((data) => {
      setExercise(data.content);
    });
  });

  //получаем упражнения с бд и отрабатываем ошибку
  const getExercise = async (id) => {
    try {
      const data = await exerciseService.get(id);
      return data.content;
    } catch (error) {
      const { message, code } = error.response.data;
      setErrors({ message, code });
      toast.error(message);
    }
  }; */
  return <>Table</>;
};
export default Table;
