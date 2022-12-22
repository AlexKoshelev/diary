import React from "react";
import { useSelector } from "react-redux";

import PreviewDiaryPage from "../components/page/diary/previewDiaryPage";
import { getCurrentTrainerData } from "../store/trainers";
import DiaryLayout from "./diaryLayout";

const Diary = () => {
  const currentTrainer = useSelector(getCurrentTrainerData());

  return <>{currentTrainer ? <DiaryLayout /> : <PreviewDiaryPage />}</>;
};
export default Diary;
