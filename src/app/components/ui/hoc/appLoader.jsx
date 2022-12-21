import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoggedIn,
  getTrainersLoadingStatus,
  loadTrainersList,
} from "../../../store/trainers";

import { useEffect } from "react";
import {
  getClientsLoadingStatus,
  loadClientsList,
} from "../../../store/clients";
import { getWorkoutsLoadingStatus } from "../../../store/workouts";
import { loadCommentsList } from "../../../store/comments";

const AppLoader = ({ children }) => {
  const trainerStatusLoading = useSelector(getTrainersLoadingStatus());
  const clientStatusLoading = useSelector(getClientsLoadingStatus());
  const workoutsLoadingStatus = useSelector(getWorkoutsLoadingStatus());
  const isLoggedIn = useSelector(getIsLoggedIn());
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(loadTrainersList());
      dispatch(loadClientsList());
      dispatch(loadCommentsList());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  if (trainerStatusLoading && clientStatusLoading && workoutsLoadingStatus)
    return <div>"Загрузка"</div>;
  return children;
};
/* function Loading() {
  return <img src={loadingImage} alt="Загрузка" />;
} */
AppLoader.propTypes = {
  childdren: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default AppLoader;
