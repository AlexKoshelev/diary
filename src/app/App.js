import React from "react";
import { useRoutes } from "react-router-dom";
import NavBar from "./components/common/navBar/navBar";
import { ExerciseProvider } from "./hooks/useExercise";
import routes from "./routes";
/* import Table from "./components/common/table"; */

/* import Calendar from "./components/calendar"; */
function App() {
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
