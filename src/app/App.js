import React from "react";
import { ExerciseProvider } from "./hooks/useExercise";
/* import Table from "./components/common/table"; */

import Calendar from "./components/calendar";
function App() {
  return (
    <ExerciseProvider>
      <Calendar />
      {/* <Table /> */}
    </ExerciseProvider>
  );
}

export default App;
