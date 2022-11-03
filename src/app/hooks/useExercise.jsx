import React, { useContext, useState, useEffect } from "react";
import exerciseService from "../services/exercise.service";
import { toast } from "react-toastify";

const ExerciseContext = React.createContext();

export const useExercise = () => {
  return useContext(ExerciseContext);
};

export const ExerciseProvider = ({ children }) => {
  const [exercise, setExercise] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const getExercises = async () => {
      try {
        const { content } = await exerciseService.fetchAll();
        setExercise(content);
        setLoading(false);
      } catch (error) {
        errorCatcher(error);
      }
    };
    getExercises();
  }, []);
  const getExercise = (id) => {
    return exercise.find((exe) => exe._id === id);
  };
  function errorCatcher(message) {
    if (message.response) {
      const { error } = message.response.data;
      console.log(error);

      setErrors(error);
    }
  }
  useEffect(() => {
    if (errors !== null) {
      toast(errors);
      setErrors(null);
    }
  }, [errors]);
  return (
    <ExerciseContext.Provider value={{ exercise, getExercise, isLoading }}>
      {children}
    </ExerciseContext.Provider>
  );
};
