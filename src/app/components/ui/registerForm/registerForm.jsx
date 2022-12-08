import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { validator } from "../../../utils/validator";
import RadioField from "../../common/form/radioField/radioField";
import TextField from "../../common/form/textField/textField";
import "./registerForm.scss";
/*   */
/* import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import CheckBoxField from "../../common/form/checkBoxField/checkBoxField"; */
/* import { signUp } from "../../store/users"; */

const RegisterForm = () => {
  /*   const dispatch = useDispatch(); */
  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
    sex: "female",
    age: "",
    arm: "",
    bust: "",
    growth: "",
    hips: "",
    leg: "",
    waist: "",
    waight: "",
  });

  /*   const qualities = useSelector(getQualities());
  const qualitiesList = qualities.map((q) => ({
    label: q.name,
    value: q._id,
  })); */

  /*   const professions = useSelector(getProfessions());
  const professionsList = professions.map((p) => ({
    label: p.name,
    value: p._id,
  })); */
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Email введен некорректно",
      },
    },
    name: {
      isRequired: {
        message: "Имя обязательно для заполнения",
      },
      min: {
        message: "Имя должно состоять минимум из 3 символов",
        value: 3,
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения",
      },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одно число",
      },
      min: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8,
      },
    },
    profession: {
      isRequired: {
        message: "Обязательно выберите вашу профессию",
      },
    },
    licence: {
      isRequired: {
        message:
          "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения",
      },
    },
  };
  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    /*  const newData = {
      ...data,
      qualities: data.qualities.map((q) => q.value),
    }; */
    /*     dispatch(signUp(newData)); */
  };

  return (
    <>
      <div className="form__login-text">Зарегистрируйся</div>
      <div className="text__main">Чтобы получить доступ ко всем программам</div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Введите электронную почту"
          placeholder="Почта"
          name="email"
          value={data.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          label="Введите пароль"
          placeholder="Пароль"
          name="password"
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />
        <TextField
          label="Укажите свое имя"
          placeholder="Имя"
          name="name"
          value={data.name}
          onChange={handleChange}
          error={errors.name}
        />

        <RadioField
          options={[
            { name: "Женщина", value: "female" },
            { name: "Мужчина", value: "male" },
          ]}
          value={data.sex}
          name="sex"
          onChange={handleChange}
          label="Выберите ваш пол"
        />
        <TextField
          label="Введите номер телефона"
          placeholder="Номер телефона"
          name="phone"
          value={data.phone}
          onChange={handleChange}
        />
        <TextField
          label="Укажите свои параметры:"
          placeholder="Ваш возраст"
          name="age"
          value={data.age}
          onChange={handleChange}
        />
        <TextField
          placeholder="Рост"
          name="growth"
          value={data.growth}
          onChange={handleChange}
        />
        <TextField
          placeholder="Вес"
          name="waight"
          value={data.waight}
          onChange={handleChange}
        />
        <TextField
          placeholder="Обхват талии"
          name="waist"
          value={data.waist}
          onChange={handleChange}
        />
        <TextField
          placeholder="Обхват груди"
          name="bust"
          value={data.bust}
          onChange={handleChange}
        />
        <TextField
          placeholder="Обхват бедер"
          name="hips"
          value={data.hips}
          onChange={handleChange}
        />
        <TextField
          placeholder="Обхват бедра"
          name="leg"
          value={data.leg}
          onChange={handleChange}
        />
        <TextField
          placeholder="Бицепс"
          name="arm"
          value={data.arm}
          onChange={handleChange}
        />
        <div className="form__btn-container">
          <button
            className="form__btn"
            type="submit"
            disabled={!isValid /* || loginError */}
          >
            Зарегистрироваться
          </button>
          <button className="form__btn">
            <NavLink to={"/login/signin"} className="href">
              Войти
            </NavLink>
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
