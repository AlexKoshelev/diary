import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";
import NavBar from "./components/common/navBar/navBar";
import AppLoader from "./components/ui/hoc/appLoader";
import routes from "./routes";
import { loadClientsList } from "./store/clients";

import { loadTrainersList } from "./store/trainers";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTrainersList());
    dispatch(loadClientsList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const element = useRoutes(routes());
  return (
    <>
      <AppLoader>
        <NavBar />
        {element}
      </AppLoader>
    </>
  );
}

export default App;
