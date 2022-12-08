import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";
import NavBar from "./components/common/navBar/navBar";
import { ExerciseProvider } from "./hooks/useExercise";
import routes from "./routes";
import { loadExersicesList } from "./store/exercise";
/* import Table from "./components/common/table"; */

/* import Calendar from "./components/calendar"; */
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadExersicesList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const element = useRoutes(routes());
  return (
    <ExerciseProvider>
      <NavBar />
      {element}
      {/* <Calendar /> */}
      {/* <Table /> */}
    </ExerciseProvider>
  );
}

export default App;
