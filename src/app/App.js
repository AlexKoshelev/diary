import React from "react";
import NavBar from "./components/common/navBar/navBar";
import { ExerciseProvider } from "./hooks/useExercise";
/* import Table from "./components/common/table"; */

/* import Calendar from "./components/calendar"; */
function App() {
  return (
    <ExerciseProvider>
      <NavBar />
      {/* <Calendar /> */}
      {/* <Table /> */}
    </ExerciseProvider>
  );
}

export default App;
