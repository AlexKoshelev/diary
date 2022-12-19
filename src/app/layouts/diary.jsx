import React from "react";
import { useSelector } from "react-redux";

import DiaryPage from "../components/page/diary/diaryPage";
import PreviewDiaryPage from "../components/page/diary/previewDiaryPage";
import { getCurrentTrainerData } from "../store/trainers";

const Diary = () => {
  const currentTrainer = useSelector(getCurrentTrainerData());

  return <>{currentTrainer ? <DiaryPage /> : <PreviewDiaryPage />}</>;
};
export default Diary;
