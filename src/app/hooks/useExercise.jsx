import { useState } from "react";

export const useExercise = () => {
  const [exercise1, setExercise1] = useState({
    name1: "",
    weight1: "",
    rep1: "",
    weight2: "",
    rep2: "",
    weight3: "",
    rep3: "",
    weight4: "",
    rep4: "",
    weight5: "",
    rep5: "",
  });
  const [exercise2, setExercise2] = useState({
    name12: "",
    weight12: "",
    rep12: "",
    weight22: "",
    rep22: "",
    weight32: "",
    rep32: "",
    weight42: "",
    rep42: "",
    weight52: "",
    rep52: "",
  });
  const [exercise3, setExercise3] = useState({
    name13: "",
    weight13: "",
    rep13: "",
    weight23: "",
    rep23: "",
    weight33: "",
    rep33: "",
    weight43: "",
    rep43: "",
    weight53: "",
    rep53: "",
  });
  const [exercise4, setExercise4] = useState({
    name14: "",
    weight14: "",
    rep14: "",
    weight24: "",
    rep24: "",
    weight34: "",
    rep34: "",
    weight44: "",
    rep44: "",
    weight54: "",
    rep54: "",
  });
  const [exercise5, setExercise5] = useState({
    name15: "",
    weight15: "",
    rep15: "",
    weight25: "",
    rep25: "",
    weight35: "",
    rep35: "",
    weight45: "",
    rep45: "",
    weight55: "",
    rep55: "",
  });
  const [exercise6, setExercise6] = useState({
    name16: "",
    weight16: "",
    rep16: "",
    weight26: "",
    rep26: "",
    weight36: "",
    rep36: "",
    weight46: "",
    rep46: "",
    weight56: "",
    rep56: "",
  });
  const [exercise7, setExercise7] = useState({
    name17: "",
    weight17: "",
    rep17: "",
    weight27: "",
    rep27: "",
    weight37: "",
    rep37: "",
    weight47: "",
    rep47: "",
    weight57: "",
    rep57: "",
  });
  const [exercise8, setExercise8] = useState({
    name18: "",
    weight18: "",
    rep18: "",
    weight28: "",
    rep28: "",
    weight38: "",
    rep38: "",
    weight48: "",
    rep48: "",
    weight58: "",
    rep58: "",
  });
  const [exercise9, setExercise9] = useState({
    name19: "",
    weight19: "",
    rep19: "",
    weight29: "",
    rep29: "",
    weight39: "",
    rep39: "",
    weight49: "",
    rep49: "",
    weight59: "",
    rep59: "",
  });
  const [exercise10, setExercise10] = useState({
    name10: "",
    weight10: "",
    rep10: "",
    weight20: "",
    rep20: "",
    weight30: "",
    rep30: "",
    weight40: "",
    rep40: "",
    weight50: "",
    rep50: "",
  });
  const handleChange1 = (target) => {
    setExercise1((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleChange2 = (target) => {
    setExercise2((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleChange3 = (target) => {
    setExercise3((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleChange4 = (target) => {
    setExercise4((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleChange5 = (target) => {
    setExercise5((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleChange6 = (target) => {
    setExercise6((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleChange7 = (target) => {
    setExercise7((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleChange8 = (target) => {
    setExercise8((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleChange9 = (target) => {
    setExercise9((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleChange10 = (target) => {
    setExercise10((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  return {
    exercise1,
    handleChange1,
    exercise2,
    handleChange2,
    exercise3,
    handleChange3,
    exercise4,
    handleChange4,
    exercise5,
    handleChange5,
    exercise6,
    handleChange6,
    exercise7,
    handleChange7,
    exercise8,
    handleChange8,
    exercise9,
    handleChange9,
    exercise10,
    handleChange10,
  };
};
