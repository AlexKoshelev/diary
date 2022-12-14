import { Navigate } from "react-router-dom";
import About from "./components/page/about/about";
import Diary from "./components/page/diary/diary";
import Nutrition from "./components/page/nutrition/nutrition";
import ReviewsPage from "./components/page/reviewsPage/reviewsPage";
import TrainerPage from "./components/page/trainerPage/trainerPage";
import Workouts from "./components/page/workouts/workouts";
import LoginForm from "./components/ui/loginForm/loginForm";
import RegisterForm from "./components/ui/registerForm/registerForm";

import Login from "./layouts/login";

const routes = () => [
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/diary",
    element: <Diary />,
  },
  {
    path: "/rewiews",
    element: <ReviewsPage />,
  },
  {
    path: "/nutrition",
    element: <Nutrition />,
  },
  {
    path: "/workouts",
    element: <Workouts />,
  },
  {
    path: "/trainerPage",
    element: <TrainerPage />,
  },
  {
    path: "/login",
    element: <Login />,
    children: [
      {
        path: "",
        element: <Navigate to="signin" />,
      },
      {
        path: "*",
        element: <Navigate to="signin" />,
      },
      {
        path: "signup",
        element: <RegisterForm />,
      },
      {
        path: "signin",
        element: <LoginForm />,
      },
    ],
  },
];
export default routes;
